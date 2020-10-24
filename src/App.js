import React, { } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import  CategoriasProvider  from './context/CategoriasContext';
import RecetaProvider from './context/RecetasContext';
import ModelProvider from './context/ModalContext';

function App() {
  return (
   <CategoriasProvider>
     <RecetaProvider>
        <ModelProvider>
          <Header />

          <div className='container mt-5'>
            <div className='row'>
                <Formulario />  
            </div>

            <ListaRecetas />
          </div>
        
        </ModelProvider>
     </RecetaProvider>
   </CategoriasProvider>
  );
}

export default App;
