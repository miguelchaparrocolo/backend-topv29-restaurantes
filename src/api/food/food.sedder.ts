import {restaurantsSeeder} from '../restaurant/restaurant.seeder';

export  const foodsSeeder = [

    {
        id: '0',
        name: 'Enchiladas',
        price: '17000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/1.1_wy8fyy.jpg',
        rate: '4.0',
    },

    {
        id: '1',
        name: 'Tacos',
        price: '15000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/1.2_kcjaak.jpg',
        rate: '4.7',
    },

    {
        id: '2',
        name: 'Elotes',
        price: '7500',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086361/clod_restaurants/1.3_segpuw.png',
        rate: '4.8',
    },


    {
        id: '3',
        name: 'Big Burguer',
        price: '22000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688137238/clod_restaurants/2.1_uc4c9e.png',
        rate: '4.5',
    },

    {
        id: '4',
        name: 'Royal Burguer',
        price: '32000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086360/clod_restaurants/2.2_cz4sqz.jpg',
        rate: '4.7',
    },

    {
        id: '5',
        name: 'Darker Burguer',
        price: '35000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086360/clod_restaurants/2.3_hasntx.jpg',
        rate: '5.0',
    },


    {
        id: '6',
        name: 'Naruto Sushi Rolls',
        price: '22000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688137137/clod_restaurants/3.1_kgcrb3.png',
        rate: '4.2',
    },

    {
        id: '7',
        name: 'Naruti Sushi Lounge',
        price: '32000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086360/clod_restaurants/3.2_arnbxz.jpg',
        rate: '5.0',
    },


    {
        id: '8',
        name: 'Sasuke Ramen',
        price: '25000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086360/clod_restaurants/3.3_wwjqjw.jpg',
        rate: '4.7',
    },


    {
        id: '9',
        name: 'Eggs and Bacon',
        price: '15000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086360/clod_restaurants/4.1_d6jkrh.jpg',
        rate: '4.4',
    },

    {
        id: '10',
        name: 'Continental Breakfast',
        price: '20000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086357/clod_restaurants/4.2_lpzspr.jpg',
        rate: '4.2',
    },


    {
        id: '11',
        name: 'Coffee and Toast',
        price: '15000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/4.3_uxliiv.jpg',
        rate: '4.5',
    },

    {
        id: '12',
        name: 'Monza Pizza',
        price: '25500',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/5.1_anltqb.jpg',
        rate: '3.8',
    },


    {
        id: '13',
        name: 'Ferrari Pasta',
        price: '45000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688137375/clod_restaurants/5.2_skglt7.jpg',
        rate: '4.0',
    },

    {
        id: '14',
        name: 'Enzo Automovile lasagna',
        price: '45000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/5.3_msxslw.jpg',
        rate: '4.8',
    },

    {
        id: '15',
        name: 'schnelle Würstchen',
        price: '7500',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/6.1_kllrpz.jpg',
        rate: '5.0',
    },

    {
        id: '16',
        name: 'Red ferrari Grutze',
        price: '37000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/6.2_oxhcyp.jpg',
        rate: '4.9',
    },


    {
        id: '17',
        name: 'Currywurst',
        price: '18000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086359/clod_restaurants/6.3_zh117v.jpg',
        rate: '4.2',
    },

    {
        id: '18',
        name: 'cacerola de huevo',
        price: '1500',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/7.1_rzwxzz.jpg',
        rate: '5.0',
    },

    {
        id: '19',
        name: 'buñuelos y empanadas',
        price: '1000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086358/clod_restaurants/7.2_mgtlhm.jpg',
        rate: '4.9',
    },


    {
        id: '20',
        name: 'Arepa de huevo',
        price: '12000',
        image: 'https://res.cloudinary.com/dqrtsgiru/image/upload/v1688086357/clod_restaurants/7.3_xzkglp.jpg',
        rate: '4.5',
    },


]

/*export const restaurantsByFoods = [
    // restaurant 0 ->
    {
    foodId: foodsSeeder[0].id,
    restaurantsId : restaurantsSeeder[0].id,

    },
    // restaurant 0 ->
    {
    foodId: foodsSeeder[1].id,
    restaurantsId : restaurantsSeeder[0].id,
    },
    // restaurant 0 ->
    {
    foodId: foodsSeeder[2].id,
    restaurantsId : restaurantsSeeder[0].id,

    },


  ];*/
