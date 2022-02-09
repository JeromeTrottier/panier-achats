import './Produit.css';

export default function Produit(props){
    return (
        <article className="Produit">
            <img src={"images-produits/" + props.pid + ".jpeg"} alt={props.nom}/>
            <div className="titre">{props.nom}</div>
            <div className="prix">${props.prix}</div>
            <button>Ajouter au panier</button>
        </article>
    );
}