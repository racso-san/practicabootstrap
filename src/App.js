import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Seccion from './components/Seccion';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div className="container">
     <Header/>
     <Main/>
     <Seccion/>
     <Footer/>
   </div>
  );
}

export default App;
