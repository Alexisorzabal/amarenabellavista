import React from 'react';
import '../../styles/novedaditem.css'

const NovedadItem = (props) =>{
const { title, imagen, body } = props;
return (
    <div className="novedades">
        <div className='holdernovedad'>
        <h1>{title}</h1>
        <div className='novedadesimg'>
        <img src={imagen} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: body }} /> 
        <hr />
    </div>
    </div>
);
}
export default NovedadItem;