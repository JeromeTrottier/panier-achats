import './ListeProduits.scss';
import Produit from './Produit.jsx';
import lesProduits from './data/produits.json';

export default function ListeProduits({etatPanier}){
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {lesProduits.map(produit => <Produit key={produit.id}  etatPanier={etatPanier} nom={produit.nom} prix={produit.prix} pid={produit.id}/>)}
            </div>
        </section>
    ); 
}