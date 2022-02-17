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


  // let compteurClic = 0;
  const etatCompteur = useState(0);

  const [compteur, setCompteur] = useState([0]);

  return (
    <div className="App">
      <Entete panier={panier}/>
      <ListeProduits etatPanier={etatPanier}/>
      <div>
        <span>Nombre de clic : {compteur[0]}</span>
        <button onClick={() => setCompteur([compteur[0] + 1])}>Cliquez-moi</button>
      </div>
      <PiedPage />
    </div>
  );
}

export default App;
