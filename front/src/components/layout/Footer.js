import React from 'react'
import '../../styles/footer.css'

export const Footer = (props) => {
  return (
    <div>
    <section className="contact">
  
  <address>
    Dirección: Av. Tte. Gral. Ricchieri 607, Bella Vista, Provincia de Buenos
    Aires
    <br />
    <br />
    Teléfono: 011 4666-8868
    <br />
    <br />
    <br />
    <a href="https://www.pedidosya.com.ar/restaurantes/san-miguel/heladeria-amarena-menu?search=amarena" className="cta">
      <span>Pedidos Ya</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </svg>
    </a>
    <a href="https://www.instagram.com/heladeria.amarena/" className="cta">
      <span>Instagram</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </svg>
    </a>
  </address>
</section>

    <footer>
      <h3>Creado Por Alexis Orzabal 2023</h3>
      </footer>
      </div>
  )
}
export default Footer;