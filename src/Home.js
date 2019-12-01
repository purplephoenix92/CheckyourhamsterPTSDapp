import React from 'react';
import logo from './two-hamsters-eating-strawberry.jpg'; // Tell Webpack this JS file uses this image

function Home() {
    return (
     <h2> So, why a Hamster? My therapist told me once that in my head sometimes is a raging hamster on a wheel: speedy, angry, and stuck. I hope this site allows you to feel less stuck. </h2>
    );}

    function Header() {
      // Import result is the URL of your image
      return <img src={logo} alt="Logo" />;
    }
    








export default Home; 