alert("Buenas, bienvenido a mi primer pre entrega!!!")

let nombre = prompt("¿Cual es tu nombre?")

console.log (nombre)

let edad = prompt("¿Cuantos años tienes?")
console.log(edad)

while (edad < 18) {
    alert("Lo siento, debes ser mayor de edad para continuar.")
    break;
} if (edad >= 18) {
    alert("Bienvenido, " + nombre + "!. Puedes continuar.");

    
    const PrecioRemeras = 2500;
    const PrecioPantalones = 3000;
    const PrecioZapatillas = 4000;

    // Array para almacenar los productos seleccionados por el usuario
    let carritoDeCompras = [];
    let totalCompra = 0;

    alert(" " + nombre + " ¿Que producto deseas comprar?");

    let seguirComprando = true;
    while (seguirComprando) {
        let productoSeleccionado = prompt(
            "Selecciona un producto  \n1. Remeras - por $" + PrecioRemeras +
            " \n2. Pantalones - por $" + PrecioPantalones +
            " \n3. Zapatillas - por $" + PrecioZapatillas +
            "\n Escribe 'FIN' para ver tu carrito"
        );

        if (productoSeleccionado.toUpperCase() == 'FIN') {
            seguirComprando = false;
            break;
        }

        let precioProducto = 0;
        let nombreProducto = "";

        switch (productoSeleccionado) {
            case "1":
                nombreProducto = "Remeras";
                precioProducto = PrecioRemeras;
                break;
            case "2":
                nombreProducto = "Pantalones";
                precioProducto = PrecioPantalones;
                break;
            case "3":
                nombreProducto = "Zapatillas";
                precioProducto = PrecioZapatillas;
                break;
            case "4":
                if (carritoDeCompras.length > 0) {
                    let resumenCarrito = "Tu carrito de compras contiene:\n";
                    carritoDeCompras.forEach((item, index) => {
                        resumenCarrito += (index + 1) + ". " + item.nombre + ": $" + item.precio + "\n";
                    });
                    resumenCarrito += "Total a pagar: $" + totalCompra;
                    alert(resumenCarrito);
                } else {
                    alert("Tu carrito de compras esta vacio.");
                }
                continue;
            default:
                alert("Producto no valido. Por favor, selecciona 1, 2 o 3, o escribe 'FIN'.");
                continue;
        }

        alert("Agregaste " + nombreProducto + " al carrito por $" + precioProducto + ".");
        carritoDeCompras.push({ nombre: nombreProducto, precio: precioProducto });
        totalCompra += precioProducto;

        let confirmacion = confirm('¿Quiere seguir comprando?');
        if (!confirmacion) {
            seguirComprando = false;
        }
    }

    if (carritoDeCompras.length > 0) {
        let resumen = "Gracias por tu compra, " + nombre + "!\n";
        resumen += "Detalle de tu carrito:\n";

        
        carritoDeCompras.forEach((item, index) => {
            resumen += (index + 1) + ". " + item.nombre + ": $" + item.precio + "\n";
        });

        resumen += "---------------------------\n";
        resumen += "Total a pagar: $" + totalCompra + "\n";

        alert(resumen);
    } else {
        alert("No has seleccionado ningun producto. Esperamos que vuelvas pronto!");
    }
}