import React from 'react';
import logo from './two-hamsters-eating-strawberry.jpg'; 
// One thing I wanted to figure out what adding this image to the homepage, but I ran out of time
function Home() {
    return (
     <h2> So, why a Hamster? My therapist told me once that in my head sometimes is a raging hamster on a wheel: speedy, angry, and stuck. I hope this site allows you to feel less stuck. </h2>
    );}
function TwoHamstersStrawberry() {
      // Import result is the URL of your image
      return <img src={logo} alt="Logo" />;
    }
    








export default Home; 