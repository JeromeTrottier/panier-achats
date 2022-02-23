import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

// Remarquer la destructuration d'objet
export default function Entete({panier}) {
   console.log('Le panier (Entete) : ', panier);
   console.log('Le tableau des valeurs du panier : ', Object.values(panier))

    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
            
            <Badge badgeContent={Object.values(panier).reduce((acc, article) => acc + article.qte, 0)} color="success">
                <ShoppingCartSharpIcon/>
            </Badge>
            <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}