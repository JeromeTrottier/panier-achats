import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props){

    const [panier, setPanier] = props.etatPanier;

    let qte = 0;
    if (panier[props.pid]) {
        qte = panier[props.pid].qte;
    }

    function ajouterAuPanier(){
        if(panier[props.pid]){
            panier[props.pid].qte++;
        } else {
            panier[props.pid] = {
                prix: props.prix,
                qte: 1
            };
        }
        console.log('Le panier après ajout;', panier)
        //Mettre a jour le badge du bouton 

        //Mettre a jour le badge du panier dans entete

        //Notifier React que le panier a changé
        //Il faut cloner l'objet panier pour que react detecte que le panier a changé
        // Changé : 

        //Method 1
        // let clonePanier = JSON.parse(JSON.stringify(panier));
        // setPanier(clonePanier);

        //Method 2
        // let clonePanier = Object.assign({}, panier);
        // setPanier(clonePanier);

        //Method 3
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