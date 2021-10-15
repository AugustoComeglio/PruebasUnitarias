//EJEMPLO JEST
/*
function Suma(a,b) {
    return a + b;
}
module.exports = Suma;
*/

class Producto {
    constructor(nombre,marca,codigo,descripcion,categoria,precio){
        this.nombre = nombre;
        this.marca = marca;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
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

class Cliente{
    constructor( nombreCliente ){
        this.nombreCliente = nombreCliente;
        this.productoSeleccionado = [];
    }

    get getNombreCliente(){
        return this.nombreCliente;
    }

    set setNombreCliente(nombreCliente){
        this.nombreCliente = nombreCliente;
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

// Prueba 1 Fernando
const productoFer = new Producto("Camiseta de River", "Adidas", "STFG123", "La mejor camiseta de todos los tiempos", "Entretenimiento", 8000);
const productoSeleccionado = productoFer.get
// Prueba 2 Fernando


//Objeto que contiene los datos a probar
 const functions = {
    precio,
    cantidadCarrito,
    cantidadCategoria,
    longitudNombre
}

module.exports=functions;