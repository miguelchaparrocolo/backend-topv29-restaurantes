import { hashPasswordSync } from "../../auth/utils/bcrypt"
import { roleSeeder } from '../role/role.seeder';

export const userSeeder = [

{
    id: 'clj0jtfs10000np58rzqzjum7',
    email: 'Miguel@gmail.com',
    firstName: 'Miguel',
    lastName: 'Chaparro',
    password: hashPasswordSync('12345'),
    isActive: true,
    avatar: 'https://picsum.photos/200',

},

{
    id: 'clj0ju2ji0002np58ugqr1q8q',
    email: 'juan.pe@gmail.com',
    firstName: 'Juan',
    lastName: 'Peña',
    password: hashPasswordSync('12345'),
    isActive: true,
    avatar: 'https://picsum.photos/200',

},

{
    id: 'clj0juxji0004np58yvndx56b',
    email: 'guialexander@gmail.com',
    firstName: 'Alex',
    lastName: 'Herrera',
    password: hashPasswordSync('12345'),
    isActive: true,
    avatar: 'https://picsum.photos/200',

},

{
    id: 'testdgpga0000yqh4fderghlo7m',
    email: 'test@gmail.com',
    firstName: 'test',
    lastName: 'test',
    password: hashPasswordSync('12345'),
    isActive: true,
    avatar: 'https://picsum.photos/200',

},

]

export const userByRoleSeeder = [
    // user 1 -> miguel
    {
      userId: userSeeder[0].id,
      roleId: roleSeeder[2].id,
    },
      // user 2 -> Juan
    {
      userId: userSeeder[1].id,
      roleId: roleSeeder[0].id,
    },
    // user 2 -> Alex
    {
      userId: userSeeder[2].id,
      roleId: roleSeeder[1].id,
    },

     // user 3 -> test
     {
        userId: userSeeder[3].id,
        roleId: roleSeeder[3].id,
      },
  ];


