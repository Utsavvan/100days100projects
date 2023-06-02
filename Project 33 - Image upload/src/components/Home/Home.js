import React from 'react';
import ex1 from '../../../public/assets/images/ex1.jpg'
import ex2 from '../../../public/assets/images/ex2.jpg'
import ex3 from '../../../public/assets/images/ex3.jpg'
import ex4 from '../../../public/assets/images/ex4.jpg'

import UserForm from '../ImageUpload/ImageUploader';
import ImageList from '../ImageList/ImageList';

const Home = () => {
  return (
   <>
   {/* <img src={ex1} class="img-thumbnail" alt="..."></img>
   <img src={ex2} class="img-thumbnail" alt="..."></img>
   <img src={ex3} class="img-thumbnail" alt="..."></img>
   <img src={ex4} class="img-thumbnail" alt="..."></img> */}

   <UserForm/>
   <ImageList/>
   
   </>
   
  );
};

export default Home;
