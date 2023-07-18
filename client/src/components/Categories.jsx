import React from 'react';

import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='p-8' id='categories'>
      <div className='grid gap-2 md:grid-cols-3 mb-2'>
        <Categorie
          name='Clothes'
          image='https://img.freepik.com/free-photo/cheerful-happy-woman-enjoying-shopping-summer-sale-she-is-carrying-shopping-bags-walking_74952-3018.jpg?size=626&ext=jpg'
        />
        <Categorie
          name='Shoes'
          image='https://img.freepik.com/free-photo/shoes_1203-8153.jpg?size=626&ext=jpg&ga=GA1.1.1382615764.1689400629&semt=sph'
        />
        <Categorie
          name='Electronics'
          image='https://img.freepik.com/premium-photo/home-appliances-isolated-white-background_410312-270.jpg?size=626&ext=jpg&ga=GA1.1.1382615764.1689400629&semt=sph'
        />
      </div>
      <div className='grid gap-2 md:grid-cols-2'>
        <Categorie
          name='Furniture'
          image='https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?size=626&ext=jpg&ga=GA1.2.1382615764.1689400629&semt=sph'
        />
        <Categorie
          name='Others'
          image='https://api.lorem.space/image?w=640&h=480&r=1848'
        />
      </div>
    </section>
  );
};

export default Categories;
