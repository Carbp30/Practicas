alert ("Bienvenido a la heladeria");

//ingreso de datos por navegador
dinero1 = prompt ("Ingrese cuanto dinero tienes a: ");
dinero2 = prompt ("Ingrese cuanto dinero tienes b: ");
dinero3 = prompt ("Ingrese cuanto dinero tienes c: ");

//convierte a entero los datos ingresados
dinero1= parseFloat(dinero1);
dinero2= parseFloat(dinero2);
dinero3= parseFloat(dinero3);

/* comprobaciones para a con su respectivo cambio
si dinero es mayor que 0.6 y menor que 1 */
if (dinero1 >=0.6 && dinero1 < 1 ) {
    alert("a te recomiendo el helado de agua");
    alert("y te sobran " + (dinero1 - 0.6));
}

//si dinero es menor igual que 1 y menor que 1.6
else if (dinero1 >= 1 && dinero1 < 1.6  ) {
    alert("a te recomiendo el helado de crema");
    alert("y te sobran " + (dinero1 - 1));
}

//si dinero es mayor igual a 1.6 y menor que 1.7
else if (dinero1 >= 1.6 && dinero1 < 1.7  ) {
    alert("a te recomiendo el helado de heladix");
    alert("y te sobran " + (dinero1 - 1.6));
}

//si dinero es mayor igual que 1.7 y menor que 1.8
else if (dinero1 >= 1.7 && dinero1 < 1.8  ) {
    alert("a te recomiendo el helado de heladovich");
    alert("y te sobran " + (dinero1-1.7));
}

//si dinero es mayor igual que 1.8 y menor igual que 2.9
else if (dinero1 >= 1.8 && dinero1 <= 2.9  ) {
    alert("a te recomiendo el helado de helardo");
    alert("y te sobran " + (dinero1-1.8));
}

//si dinero es mayor igual que 2.9
else if (dinero1 >=2.9  ) {
    alert("a te recomiendo el potecito de helado con confites o el pote de 1/4 KG");
    alert("y te sobran " + (dinero1 - 2.9));
}

//si no se cumple ninguna de las 2 anteriores
else {
    alert("a lo siento no te alcanza para ningun helado");
}


/* comprobaciones para b con su respectivo cambio
si dinero es mayor que 0.6 y menor que 1 */
if (dinero2 >=0.6 && dinero2 < 1 ) {
    alert("b te recomiendo el helado de agua");
    alert("y te sobran " + (dinero2 - 0.6));
}

//si dinero es menor igual que 1 y menor que 1.6
else if (dinero2 >= 1 && dinero2 < 1.6  ) {
    alert("b te recomiendo el helado de crema");
    alert("y te sobran " + (dinero2 - 1.6));
}

//si dinero es mayor igual a 1.6 y menor que 1.7
else if (dinero2 >= 1.6 && dinero2 < 1.7  ) {
    alert("b te recomiendo el helado de heladix");
    alert("y te sobran " + (dinero2 - 1.6));
}

//si dinero es mayor igual que 1.7 y menor que 1.8
else if (dinero2 >= 1.7 && dinero2 < 1.8  ) {
    alert("b te recomiendo el helado de heladovich");
    alert("y te sobran " + (dinero2 - 1.7));
}

//si dinero es mayor igual que 1.8 y menor igual que 2.9
else if (dinero2 >= 1.8 && dinero2 <= 2.9  ) {
    alert("b te recomiendo el helado de helardo");
    alert("y te sobran " + (dinero2 - 1.8));
}

//si dinero es mayor igual que 2.9
else if (dinero2 >=2.9  ) {
    alert("b te recomiendo el potecito de helado con confites o el pote de 1/4 KG");
    alert("y te sobran " + (dinero2 - 2.9));
}

//si no se cumple ninguna de las 2 anteriores
else {
    alert("b lo siento no te alcanza para ningun helado");
}

/* comprobaciones para c con su respectivo cambio
si dinero es mayor que 0.6 y menor que 1 */
if (dinero3 >=0.6 && dinero3 < 1 ) {
    alert("c te recomiendo el helado de agua");
    alert("y te sobran " + (dinero3 - 0.6));
}

//si dinero es menor igual que 1 y menor que 1.6
else if (dinero3 >= 1 && dinero3 < 1.6  ) {
    alert("c te recomiendo el helado de crema");
    alert("y te sobran " + (dinero3 - 1.6));
}

//si dinero es mayor igual a 1.6 y menor que 1.7
else if (dinero3 >= 1.6 && dinero3 < 1.7  ) {
    alert("c te recomiendo el helado de heladix");
    alert("y te sobran " + (dinero3 - 1.6));
}

//si dinero es mayor igual que 1.7 y menor que 1.8
else if (dinero3 >= 1.7 && dinero3 < 1.8  ) {
    alert("c te recomiendo el helado de heladovich");
    alert("y te sobran " + (dinero3 - 1.7));
}

//si dinero es mayor igual que 1.8 y menor igual que 2.9
else if (dinero3 >= 1.8 && dinero3 <= 2.9  ) {
    alert("c te recomiendo el helado de helardo");
    alert("y te sobran " + (dinero3 - 1.8));
}

//si dinero es mayor igual que 2.9
else if (dinero3 >=2.9  ) {
    alert("c te recomiendo el potecito de helado con confites o el pote de 1/4 KG");
    alert("y te sobran " + (dinero3 - 2.9));
}

//si no se cumple ninguna de las 2 anteriores
else {
    alert("c lo siento no te alcanza para ningun helado");
}