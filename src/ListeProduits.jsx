import './ListeProduits.scss';
import Produit from './Produit.jsx';
import {collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from 'react';
import { bdFirestore as bd} from './firebase/init';

export default function ListeProduits({etatPanier}){


  // Variable d'état des produits
  const [produits, setProduits] = useState([]);

  // Obtenir les produits de la collection Firestore 
  // Avec un tableau vide, la fonction ne s'effectue qu'une seule fois
  useEffect(function() {
    // Obtenir tous les documents de la collection 'magasin-produits'
    getDocs(collection(bd, 'maggen-produits')).then(
      qs => {
        setProduits(qs.docs.map(
          doc => ({id: doc.id, ...doc.data()})
        ));
      }
    );
  }, []);

  return (
      <section className="ListeProduits">
          <h2>Nos produits</h2>
          <div className="produits">
              {produits.map(produit => <Produit key={produit.id}  etatPanier={etatPanier} nom={produit.nom} prix={produit.prix} pid={produit.id}/>)}
          </div>
      </section>
  ); 
}