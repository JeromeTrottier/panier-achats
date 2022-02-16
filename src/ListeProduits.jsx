import './ListeProduits.scss';
import Produit from './Produit.jsx';
import lesProduits from './data/produits.json';

export default function ListeProduits(props){
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {lesProduits.map(produit => <Produit key={produit.id} panier={props.panier} nom={produit.nom} prix={produit.prix} pid={produit.id} setPanier={props.setPanier}/>)}
            </div>
        </section>
    ); 
}