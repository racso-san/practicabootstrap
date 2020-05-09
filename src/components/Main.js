import React from 'react';
import styled from '@emotion/styled';

const Principal = styled.main`
    background-color: red;
    padding: 20px;
    margin-bottom: 20px;
`;

const Aside = styled.aside`
    background-color: gray;
    padding: 100px;
    margin-bottom: 20px;
`;

const Main = () => {
    return ( 
        <section className="row">

            <Principal className="col-12 col-md-8">
                    <h1>Main</h1>
                        <p>React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto
                        diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en 
                        una sola página. Es mantenido por Facebook y la comunidad de software libre. Han participado en el proyecto 
                        más de mil desarrolladores diferentes. 1​
                        React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el 
                        tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de 
                        usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC 
                        (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado 
                        con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de 
                        la interfaz de usuario) de una aplicación web.
                        </p>
            </Principal>

            <Aside className="col-12 col-md-4 align-self-center">         
                <h3>Aside</h3>                                     
            </Aside>                

        </section>                  
     );
}
 
export default Main;