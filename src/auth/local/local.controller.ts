import { Request, Response, NextFunction } from 'express';

import { getUserByEmail,
  getUserByToken,
  updateUser }
from '../../api/user/user.service';
import { comparePassword } from '../utils/bcrypt';
import { signToken } from '../auth.service';
import { createAuthResponse } from './local.services';

export async function loginHandler(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    console.log(user)

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // compare password
    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Email or password not match' });
    }

    // jwt
    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = signToken(payload);


    const profile = {
      id:user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      avatar: user.avatar,
      roles: user.roles.map(({ role }) => ({
      id: role.id,
      name: role.name,
      })),

    };


    return res.json({ token, profile });
  } catch (error) {
    console.log(error)
  }
}

export async function activateHandler(req: Request, res: Response) {
  const { token } = req.params;

  try {
    const user = await getUserByToken(token);


    if (!user) {
      return res.status(404).json({
        message: 'Invalid token',
      });
    }

    if (user.passwordResetExpires) {
      if (Date.now() > user.passwordResetExpires.getTime()) {
        return res.status(400).json({
          message: 'Token expired',
        });
      }
    }

    const data = {
      ...user,
      isActive: true,
      passwordResetToken: null,
      passwordResetExpires: null,
      };


    await updateUser(data);


    const response = createAuthResponse(user);
    console.log(response)


    return res.status(200).json(response);
  } catch (error) {}
}
