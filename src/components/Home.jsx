import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle ,AiFillYoutube ,AiFillInstagram ,AiFillAmazonCircle} from "react-icons/ai"

export default function Home() {
  return (
   <>
    <div className="home" id='home'>
        <main>
            <h1>TechStar</h1>
            <p>Lorem ipsum dolor!</p>
        </main>
    </div>

    <div className="home2">
    <img src={vg} alt="Graphics" />
     <div>
        <p>
     Lorem sum dolor sit amet consectetur, adipisicing elit. Repellat tempore nihil voluptate velit similique ipsum, 
     earum vero expedita dolores odit
      iure magni ea atque voluptas unde modi adipisci consectetur reprehenderit commodi esse.
        </p>
     </div>
    </div>

    <div className="home3" id="about">
        <div>
        <h1>Who we are?</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, asperiores at ad incidunt commodi sapiente omnis sed deserunt, cumque 
            laborum aliquam voluptates rem inventore, aperiam eum facilis! Odit, perspiciatis. Quidem sed
             officiis corrupti impedit reiciendis.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde perferendis reprehenderit voluptatibus amet suscipit necessitatibus sunt non,
              veniam voluptates? Deserunt!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus recusandae consectetur esse sapiente officia 
              in sed fuga nulla ratione.
        </p>
        </div>
    </div>


    <div className="home5">
        <div>
        <h1>WhY are We!!!!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, asperiores at ad incidunt commodi sapiente omnis sed deserunt, cumque 
            laborum aliquam voluptates rem inventore, aperiam eum facilis! Odit, perspiciatis. Quidem sed
             officiis corrupti impedit reiciendis.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde perferendis reprehenderit voluptatibus amet suscipit necessitatibus sunt non,
              veniam voluptates? Deserunt!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus recusandae consectetur esse sapiente officia 
              in sed fuga nulla ratione.
        </p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
         <h1>Brands</h1>
         
        <article>
            <div 
            style={{
                animationDelay:"0.3s",
            }}>
                  <AiFillGoogleCircle />
                  <p>Google</p>
            </div>

            <div 
              style={{
                animationDelay:"0.5s",
            }}>
                  <AiFillAmazonCircle />
                  <p>Amazon</p>
            </div>

            <div style={{
                animationDelay:"0.7s",
            }}>
                  <AiFillYoutube />
                  <p>Youtube</p>
            </div>

            <div style={{
                animationDelay:"1s",
            }}>
                 <AiFillInstagram />
                  <p>Instagram</p>
            </div>
        
        </article>
       </div>
    </div>
   </>
  );
};
