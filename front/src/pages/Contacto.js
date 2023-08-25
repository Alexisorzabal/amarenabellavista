
import '../styles/contacto.css'
import React, { useState } from 'react';
import axios from 'axios';
const Contacto = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }
  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await
      axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }


  return (

    <main className='holdercontacto'>
      <section className="story">
        <h2 className="contacto">Contacto</h2>
        <div className='contactotext'>
          ¡Visítanos en nuestra ubicación o contáctanos para hacer un pedido especial!
        </div>
      </section>
      <body className='contenedorcontact'>

        <div className='contactmap'>
          <p className="googlemaps">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52601.900623636466!2d-58.77970966658414!3d-34.512547494806526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbc4c85634659%3A0xfa1dcf18ced43773!2sHelader%C3%ADa%20Amarena!5e0!3m2!1ses!2sar!4v1692719881540!5m2!1ses!2sar"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </p>
        </div>
        <div className='rapido'>
          <h2>Contacto Rápido</h2>
          <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
            <p>
              <label for="nombre">Nombre</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
            </p>

            <p>
              <label for="email">Email</label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </p>
            <p>
              <label for="telefono">Telefono</label>
              <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
            </p>
            <p>
              <label for="mensaje"> Mensaje</label>
              <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
            </p>
            <p class="acciones"><input type="submit"
              value="Enviar" />
            </p>
          </form>
          {sending ? <p>Enviando...</p> : null}
          {msg ? <p> {msg}</p> : null}

        </div>


      </body>

    </main>
  )
}
export default Contacto;
