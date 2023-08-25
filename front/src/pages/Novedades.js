import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/novedades.css'

const Novedades = (props) => {
  const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);
    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades'); setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);
  return (
    
    <main className="holder contacto">
      <div className="holderform">
      <section className="holder">
           
            {loading ? (
                <p>cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} 
                    imagen={item.imagen} 
                    body={item.cuerpo} />)
            )}
        </section>
      
      </div>
    </main>

  );
}
export default Novedades;