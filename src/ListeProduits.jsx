import './ListeProduits.css';
import './Produit.jsx';

export default function ListeProduits(){
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div>
                <Produit />
                <article>Produit 2</article>
                <article>Produit 3</article>
                <article>Produit 4</article>
                <article>Produit 5</article>
            </div>
        </section>
    ); 
}