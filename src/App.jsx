import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import { useEffect, useState } from 'react';


function App() {


  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});
  const panier = etatPanier[0];
  const setPanier = etatPanier[1];
  console.log("L'etat panier : ", etatPanier)


  // let compteurClic = 0;
  const etatCompteur = useState(0);

  const [compteur, setCompteur] = useState([0]);

  //console.log("Mon panier suoos la forme d'une chaine JSON : ", JSON.stringify(panier));

  // "Persister" (sauvegarder le panier dans localStorage)
  // Utilise le HOOK useEffect pour exécuter ce code façon controlée

  useEffect(() =>  window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);
  

  return (
    <div className="App">
      <Entete panier={panier}/>
      <ListeProduits etatPanier={etatPanier}/>
      <div>
        <span>Nombre de clic : {compteur[0]}</span>
        <button onClick={() => setCompteur([compteur[0] + 1])}>Cliquez-moi</button>
      </div>
      <PiedPage/>
    </div>
  );
}

export default App;
