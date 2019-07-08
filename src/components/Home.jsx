import React from "react";
import boxart from '../assets/images/UltimateBackground.jpg';

function Home(){
  return (
    <div>
      <style jsx>{`
        img {
          width: 100%;
          object-fit: cover;
        }
      `}</style>
      <img src={boxart}/>
    </div>
  );
}

export default Home;
