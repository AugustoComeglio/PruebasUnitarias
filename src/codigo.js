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
//Prueba 1 Augusto
const producto1 = new Producto("Cubo rubik","Moyu","abc123","Cubo rubik 3x3x3","Entretenimiento",1360);
module.exports = producto1.getPrecio();
//Prueba 2 Augusto
const producto2 = new Producto("Mouse gaming","Red Dragon","cba321","Mouse para gamers","Tecnologia",5893);
const carrito1 = new Carrito();
carrito1.agregarProducto(producto2)
module.exports = carrito1.productos.length;
