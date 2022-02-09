import './ListeProduits.css';
import Produit from './Produit.jsx';
import lesProduits from './data/produits.json';

export default function ListeProduits(){
    console.log('La variable lesProduits : ', lesProduits);

    // //Method 1 : Programmation imperative avec boucle for ou foreach
    // let composantsProduits = [];
    // //Parcourir le tableau lesProduits et generer un composant Produit pour chaque element
    // for (let i = 0; i < lesProduits.length; i++) {
    //     composantsProduits.push(<Produit nom={lesProduits[i].nom} prix={lesProduits[i].prix} pid={lesProduits[i].id}/>);
    // }

    let notes = [50.667, 46.90, 74.0, 89.98];

    // let notesArrondies = notes.map(function(uneNote){
    //     return uneNote.toFixed(1)-0;
    // })

    let notesArrondies = notes.map(uneNote => uneNote.toFixed(1)-0);

    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {/* METHOD 1 : {composantsProduits} */}


                {lesProduits.map(produit => <Produit nom={produit.nom} prix={produit.prix} pid={produit.id}/>)}


                {/* <Produit nom="T-shirt sport GapFit recyclé" prix="13.95" pid="prd0001"/>
                <Produit nom="T-shirt sport GapFit" prix="22.49" pid="prd0002"/>
                <Produit nom="T-shirt qui donne du style" prix="49.95" pid="prd0003"/>
                <Produit nom="T-shirt cool" prix="10.95" pid="prd0004"/> */}
            </div>
        </section>
    ); 
}