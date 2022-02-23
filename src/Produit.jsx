import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit({etatPanier: [panier, setPanier], nom, prix, pid}){

    let qte = 0;
    if (panier[pid]) {
        qte = panier[pid].qte;
    }

    function ajouterAuPanier(){
        if(panier[pid]){
            panier[pid].qte++;
        } else {
            panier[pid] = {
                prix: prix,
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
            <img src={"images-produits/" + pid + ".jpeg"} alt={nom}/>
            <div className="titre">{nom}</div>
            <div className="prix">{prix}</div>
            <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier}/>
        </article>
    );
}