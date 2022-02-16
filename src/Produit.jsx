import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props){
    let panier = props.panier
    let qte = 0;
    let setPanier = props.setPanier;
    if (panier[props.pid]) {
        qte = panier[props.pid].qte;
    }

    function ajouterAuPanier(){
        panier[props.pid] = {
            prix: props.prix,
            qte: 1
        };
        console.log('Ajouter au panier', panier)
        //Mettre a jour le badge du bouton 

        //Mettre a jour le badge du panier dans entete

        //Notifier React que le panier a changé
        setPanier({...panier});
    }

    return (
        <article className="Produit">
            <img src={"images-produits/" + props.pid + ".jpeg"} alt={props.nom}/>
            <div className="titre">{props.nom}</div>
            <div className="prix">{props.prix}</div>
            <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier}/>
        </article>
    );
}