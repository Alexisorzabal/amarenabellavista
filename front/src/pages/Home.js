
import React from "react";
import '../styles/home.css'


const Home = (props) => {
  return (
    <div class="holder">
<div className="containerAcerca">
<h2 className="acerca">Bienvenidos a Amarena, </h2>
      <p className="infoAcerca"> El paraíso de los sabores helados. En nuestra heladería, te invitamos a sumergirte en un mundo de deleite y frescura, donde cada sorbo es una experiencia única y cada cucharada es un viaje a la felicidad. Nuestro compromiso es claro: crear helados que no solo cautiven tu paladar, sino que también despierten emociones y recuerdos. Desde los clásicos atemporales hasta las innovadoras creaciones, cada helado que elaboramos es fruto de la pasión por la calidad y la excelencia. Únete a nosotros en este viaje congelado y descubre por qué Amarena es mucho más que una heladería, es un rincón donde los sueños se sirven en conos y tazas.</p>
        </div>
      <div className="container">
        <div className="slider-wrapper">
          <div className="slider">
            <img id="slide-1" src="/img/1.jpg" alt="first" />

            <img id="slide-2" src="/img/2.jpg" alt="second" />
            <img id="slide-3" src="/img/3.jpg"
              alt="three" />
            <div className="slider-nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>

            </div>
          </div>
        </div>
      </div>

      

    </div>

  )
}


export default Home;