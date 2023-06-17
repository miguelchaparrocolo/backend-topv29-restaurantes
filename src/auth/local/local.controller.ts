import { Request, Response, NextFunction } from 'express';

import { getUserByEmail } from '../../api/user/user.service';
import { comparePassword } from '../utils/bcrypt';
import { signToken } from '../auth.service';

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
      fullName: `${user.firstName} ${user.lastName}`,
      avatar: user.avatar,
      roles: user.roles.map(({ role }) => ({
        id: role.id,
        name: role.name,
      })),

    };
    console.log(profile)

    return res.json({ token, profile });
  } catch (error) {
    console.log(error)
  }
}
