import React from 'react';
import styled from '@emotion/styled';

const Bloque = styled.div`
    background-color: lightblue;
    padding: 10px;
    margin-bottom: 20px;
`;

const Seccion = () => {
    return ( 
        <section className="row justify-content-between">

            <Bloque className="col-12 col-sm-4 col-md-3">
                <p>
                    React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el 
                    tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de 
                    usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC 
                </p>
            </Bloque>

            <Bloque className="col-12 col-sm-4 col-md-3">
                <p>
                    React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el 
                    tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de 
                    usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC     
                </p>
            </Bloque>

            <Bloque className="col-12 col-sm-4 col-md-3">
                <p>
                    React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el 
                    tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de 
                    usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC       
                </p>
            </Bloque>

        </section>
     );
}
 
export default Seccion;