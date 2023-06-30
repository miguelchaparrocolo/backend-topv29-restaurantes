import {PrismaClient} from '@prisma/client'
import {roleSeeder} from '../src/api/role/role.seeder';
import {userSeeder,userByRoleSeeder} from '../src/api/user/user.seeder';
import {restaurantsSeeder} from '../src/api/restaurant/restaurant.seeder';
import {categorysSeeder} from '../src/api/category/category.seeder';


const prisma = new PrismaClient();

async function main (){
    const createRoles = await prisma.role.createMany({
    data: roleSeeder,
    skipDuplicates: true,
  });

    const createUsers = await prisma.user.createMany({
    data: userSeeder,
    skipDuplicates: true,

    });

    const createUsersByRole = await prisma.userRole.createMany({
        data: userByRoleSeeder,
        skipDuplicates: true,
    });

    const createRestaurants = await prisma.restaurants.createMany({
    data: restaurantsSeeder,
    skipDuplicates :true,
    });

    const createCategorys = await prisma.categories.createMany({
        data: categorysSeeder,
        skipDuplicates :true,
        });



    console.log({ createRoles, createUsers });

}

main()
    .then(async ()=>{
        console.log('Seed complete');
     })
    .catch((e)=>{
        console.error(e);
        process.exit(1);
    })
    .finally(async ()=>{
        await prisma.$disconnect();
    });
