const a = 3;
let g = "Test";
var x = 3;

// Dans le cas ou l'on évalue uniquement le contenu 
if(a == g && g ==x && x == a)
{
    console.log("Les trois variables sont identiques");
}
if((a == g && a!= x) || (a == x && g != x) || (g ==x && a != x))
{
    console.log("Deux des variables sont identiques");
}
if(a != g && g != x && x != a)
{
    console.log("toutes les variables sont différentes");
}

// Dans le cas ou l'on évalue le contenu et le type
if(a === g && g ==x && x === a)
{
    console.log("Les trois variables sont identiques");
}
if((a === g && a!== x) || (a === x && g !== x) || (g === x && a !== x))
{
    console.log("Deux des variables sont identiques");
}
if(a !== g && g !== x && x !== a)
{
    console.log("toutes les variables sont différentes");
}
