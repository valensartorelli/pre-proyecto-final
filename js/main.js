// Crear un array de producto para almacenar objetos
const arrayProductos = [];

// Creamos una clase o constructor para crear objetos y Combinamos el array con los objetos creados
class Producto {
    constructor(nombre, color, talle, marca, sku, precio) {
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.marca = marca;
        this.sku = sku;
        this.precio = precio;
    }
}

const producto1 = new Producto ('Buzo con capucha', 'Rojo', 'M', 'Adidas', 'SS22', 9000);
arrayProductos.push(producto1)
const producto2 = new Producto ('Jogging', 'Negro', 'L', 'Nike', 'SS23', 8500);
arrayProductos.push(producto2)
const producto3 = new Producto ('Zapatillas deportivas', 'Blanco', 'S', 'Puma', 'SS24', 12000);
arrayProductos.push(producto3)
const producto4 = new Producto ('Remera algodon', 'Negro', 'XL', 'Adidas', 'SS25', 1600);
arrayProductos.push(producto4)
const producto5 = new Producto ('Remera Star Wars', 'Negro', 'XS', 'Nike', 'SS26', 1900);
arrayProductos.push(producto5)
const producto6 = new Producto ('Remera estampada', 'Blanco', 'S', 'Adidas', 'SS27', 1750);
arrayProductos.push(producto6)
const producto7 = new Producto ('Buzo Mickey', 'Rojo', 'L', 'Adidas', 'SS28', 15000);
arrayProductos.push(producto7)
const producto8 = new Producto ('Buzo logo rosa', 'Negro', 'XL', 'Adidas', 'SS29', 12400);
arrayProductos.push(producto8)

console.log(arrayProductos);

console.log('Estos son los productos que tenemos');
for(let produ of arrayProductos) {
    console.log(produ.nombre);
}

let hayStock = false
let producto = prompt('Que producto queres comprar? (del slide de productos que podrian interesarte)' )
for(let produ of arrayProductos) {
    if(producto == produ.nombre){
        hayStock = true;
        alert('El precio es $' + produ.precio)
    }
}
if (hayStock != true) { 
    alert('Este modelo no lo tenemos')
}

let cantidadProducto = parseInt(prompt("Ingrese la cantidad que quiere comprar"))

let precioProducto = 0;
let precioTotal = 0;

function total () {
    if (producto == "Buzo con capucha" || producto == "buzo con capucha") {
        precioProducto = 9000;
    } else if (producto == "Jogging" || producto == "jogging") { 
        precioProducto = 8500;
    } else if (producto == "Zapatillas deportivas" || producto == "zapatillas deportivas") {
        precioProducto = 12000; 
    } else if (producto == "Remera algodon" || producto == "remera algodon") {
        precioProducto = 1600; 
    } else if (producto == "Remera Star Wars" || producto == "remera Star Wars") {
        precioProducto = 1900; 
    } else if (producto == "Remera estampada" || producto == "remera estampada") {
        precioProducto = 1750; 
    } else if (producto == "Buzo Mickey" || producto == "buzo mickey") {
        precioProducto = 15000; 
    } else if (producto == "Buzo logo rosa" || producto == "buzo logo rosa") {
        precioProducto = 12400; 
    } 

    precioTotal = precioProducto * cantidadProducto;
    return precioTotal;
}

let totalFinal = total();

alert("El total de " + cantidadProducto + " " + producto + " es de $" + totalFinal)

let productoComprado = arrayProductos.find(item => item.nombre == producto)
console.log("El producto comprado es: " + productoComprado.nombre);


let indice = arrayProductos.indexOf(productoComprado)
console.log('El indice del producto es: ' + indice);
console.log('El producto eliminado es: ' + arrayProductos[indice].nombre);
arrayProductos.splice(indice, 1);

let productosRestantes = arrayProductos.map(item => item.nombre)
console.log('Estos son los productos restantes: ' + productosRestantes);