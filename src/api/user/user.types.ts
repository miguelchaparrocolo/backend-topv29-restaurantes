import { User as UserModel, Role as RoleModel } from '@prisma/client';

export type User = UserModel;

export type UserWithRoles = User & {
  roles: {
    role: RoleModel;
  }[];
};

