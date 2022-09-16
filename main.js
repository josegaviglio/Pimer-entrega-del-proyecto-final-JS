let producto = "";

const harina = {
    nombre: "harina",
    precio: 90
}

const coca = {
    nombre: "coca",
    precio: 190
}

const detergente = {
    nombre: "detergente",
    precio: 120
}

const pan = {
    nombre: "pan",
    precio: 80
}

const listadoProductos = [harina, coca, detergente, pan];
let productosSeleccionados = [];

function selectProduct() {
    producto = prompt("Bienvenido al mercado pepero \n\nSeleccione un producto:\n1) Harina \n2) Coca\n3) Detergente\n4) Pan\n Ingrese 0 para salir")
}

do {
    selectProduct()
    if((parseInt(producto) - 1) >= 0){
        productosSeleccionados.push(listadoProductos[parseInt(producto) - 1])
    }

}
while (producto != 0)

function calculateTotal() {
    let total = 0;

    for (let i = 0; i < productosSeleccionados.length; i++) {
        total += productosSeleccionados[i].precio;
    }

    // for (let i = 0; i < productosSeleccionados.length; i++) {
    //     total += productosSeleccionados[i].precio;
    // }
     console.log(`El precio total de la compra es de: ${total} `);
}

calculateTotal();