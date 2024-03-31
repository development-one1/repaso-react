import React, { useState } from 'react'

export const PrimerComponente = () => {

    // Variables: 

    // let nombre = 'Andres';
    // let web = 'andres.com'

    let cursos = [
        "React Full Stack con Mongo db y IA",
        "Angular con Mongo db y IA",
        "Web responsive desde 0",
    ];

    const [nombre, setNombre] = useState("Maria la del barrio");

    const cambiarNombre = (nuevoNombre) => {
            setNombre(nuevoNombre);
    }

  return (
    <div>
        <h2>Mi primer componente</h2>
        <p>Este es mi primer componente</p>
         <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}> { nombre }</strong></p>
        {/* <p>Mi web es: { web }</p> */}

        <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='cambiar nombre'/>

        &nbsp;
        <button onClick={ e => cambiarNombre("ANDRES FELIPE")}>Cambiar</button>
        &nbsp;
        <h2>cursos:</h2>
        <ul>
            {
                cursos.map( (curso, indice) => {
                    return (
                        <li key={indice}>{ curso }</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
