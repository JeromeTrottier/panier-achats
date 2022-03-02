import './App.scss';
import Entete from './Entete';
import Accueil from './Accueil';
import Histoire from './Histoire';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';


function App() {


  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});
  const panier = etatPanier[0];
  const setPanier = etatPanier[1];
  console.log("L'etat panier : ", etatPanier);

  //console.log("Mon panier suoos la forme d'une chaine JSON : ", JSON.stringify(panier));

  // "Persister" (sauvegarder le panier dans localStorage)
  // Utilise le HOOK useEffect pour exécuter ce code façon controlée

  useEffect(() =>  window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);
  

  return (
    <div className="App">
      <Entete panier={panier}/>

      {/* Routes spécifiques à chaque composant */}
      <Routes>
        <Route path='/' element={<Accueil/>}></Route>
        <Route path='/notre-histoire' element={<Histoire/>}></Route>
        <Route path='/nos-produits' element={<ListeProduits etatPanier={etatPanier}/>}></Route>
      </Routes>
      <PiedPage/>
    </div>
  );
}

export default App;
