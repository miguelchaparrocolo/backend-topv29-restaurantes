import { Request, Response } from 'express';

import {
  createUser,
  deleteUser,
  getAllUser,
  getUserByEmail,
  getUserById,
  updateUser,
} from './user.service';

export async function getAllUserHandler(req: Request, res: Response) {
  const users = await getAllUser();

  return res.json(users);
}

export async function createUserHandler(req: Request, res: Response) {
  const data = req.body;

  try {
    const user = await createUser(data);

    return res.json(user);
  } catch (error: any) {
    console.log(error);
  }
}

export async function getUserHandler(req: Request, res: Response) {
  const { id } = req.params;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  return res.json(user);
}

export async function deleteUserHandler(req: Request, res: Response) {
  const { id } = req.params;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

   await deleteUser(id);
  /* return res.status(200).json({
    message: 'Delete user',
  });*/


  return res.json(user);
}

export async function updateUserHandler(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  const updatedUser = await updateUser({ ...data, id });

  return res.json(updatedUser);


}


