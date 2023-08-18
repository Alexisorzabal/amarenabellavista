
import React from "react";
import '../styles/home.css'
import '../styles/eventos.css'
import '../styles/nosotros.css'

const Home = (props) => {
  return (
      <div class = "holder">

          <div class="container">
            <div class="slider-wrapper">
              <div class="slider">
                <img id="slide-1" src="/img/DALL·E 2023-04-22 17.28.26.png" alt="first"/>
                  
                  <img id="slide-2" src="/img/DALL·E 2023-04-22 17.28.35.webp" alt="second"/>
                    <img id="slide-3" src="/img/DALL·E 2023-04-22 17.28.47 - ice cream, real light, bloom, cone, pink, ice cream shop  .png"
                      alt="three"/>
                      <div class="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>

                      </div>
                </div>
           </div>
            </div>
            
                <h2 class="acerca">Acerca de Amarena</h2>
                <p class="infoAcerca">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus unde
                  excepturi assumenda repudiandae hic perferendis ab, aspernatur veritatis esse totam optio fuga
                  reprehenderit, natus est et dolor repellat ut!</p>
                <div class="acercade">

                  <h2 class="acerca">Acerca de Amarena</h2>
                  <p class="infoAcerca">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus unde
                    excepturi assumenda repudiandae hic perferendis ab, aspernatur veritatis esse totam optio fuga
                    reprehenderit, natus est et dolor repellat ut!</p>
                  <div class="containeracerca">
                    <div class="imgacerca">
                      <img src="https://placehold.co/600x400" alt="helado"/>

                    </div>
                    <div class="imgacerca">
                      <img src="https://placehold.co/600x400" alt="helado"/>


                    </div>
                    <div class="imgacerca">
                      <img src="https://placehold.co/600x400" alt="helado"/>
                    </div>
                  </div>
                </div>
                </div>
                
  )
}


export default Home;