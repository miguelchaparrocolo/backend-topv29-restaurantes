import { User as UserModel, Role as RoleModel } from '@prisma/client';


export type User = UserModel;
export interface UserWithRoles extends UserModel {
 roles: RoleModel[];
}

