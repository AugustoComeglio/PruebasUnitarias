//EJEMPLO JEST
/*
function Suma(a,b) {
    return a + b;
}
module.exports = Suma;
*/

class Producto {
    constructor(nombre,marca,codigo,descripcion,categoria,precio,stock){
        this.nombre = nombre;
        this.marca = marca;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }  
    getPrecio() {
        return this.precio 
    }

}

class Carrito {
    constructor(){
        this.detalle = undefined;
        this.total = undefined;
        this.productos = [];
    }
    get getDetalle(){
        return this.detalle;
    }
    set setDetalle(d){
        this.detalle = d;
    }
    get getTotal(){
        return this.total;
    }
    set setTotal(t){
        this.total = t;
    }
    get getPuductos(){
        return this.productos;
    }
    agregarProducto(producto){
        this.productos.push(producto);
    } 
}

class Categoria {
    constructor(nombreCategoria){
        this.nombreCategoria=nombreCategoria;
        this.productos = [];
    }

    get getNombreCategoria(){
       return this.nombreCategoria;
    }

    set setNombreCategoria(nombreCategoria){
        this.nombreCategoria= nombreCategoria;
    }

    asociarProducto(producto){
       this.productos.push(producto);
    }

}

//Prueba 1 Augusto
const producto1 = new Producto("Cubo rubik","Moyu","abc123","Cubo rubik 3x3x3","Entretenimiento",1360);
const precio = producto1.getPrecio();
//Prueba 2 Augusto
const producto2 = new Producto("Mouse gaming","Red Dragon","cba321","Mouse para gamers","Tecnologia",5893);
const carrito1 = new Carrito();
carrito1.agregarProducto(producto2);
const cantidadCarrito = carrito1.productos.length;

// Prueba Santi
const producto3 = new Producto("SmartPhone Motog20", "Motorola", "#4536ts", "Celular inteligente", "Tecnología", 21000);
const categoria = new Categoria("SmartPhones");
categoria.asociarProducto(producto3);
const cantidadCategoria= categoria.productos.length;
//Prueba 2 Santi
const longitudNombre = producto3.nombre.length;

// Prueba Gonzalo
const productGonza = new Producto("Iphone 13 Pro Max", "Apple", "#131313", "Celular inteligente", "Tecnología", 120000, 10);
const actualStock = productGonza.stock;
const decrementStock = (stock, numberItems) => {
    return (stock - numberItems);
}
const incrementStock = (stock, numberItems) => {
    return (stock + numberItems);
}


//Objeto que contiene los datos a probar
 const functions = {
    precio,
    cantidadCarrito,
    cantidadCategoria,
    longitudNombre,
    actualStock,
    decrementStock,
    incrementStock
}

module.exports=functions;