import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import { useState } from 'react';

function App() {
  const etatPanier = useState({});
  const panier = etatPanier[0];
  const setPanier = etatPanier[1];
  console.log("L'etat panier : ", etatPanier)


  return (
    <div className="App">
      <Entete panier={panier}/>
      <ListeProduits panier={panier} setPanier={setPanier}/>
      <PiedPage />
    </div>
  );
}

export default App;
