let catalogo = [
    { nombre: 'Aritos', precio: 500 },
    { nombre: 'Collar', precio: 820 },
    { nombre: 'Anillo', precio: 760 },
    { nombre: 'Pulsera', precio: 250 }
  ];
  
  let carrito = [];
  let total = 0;
  
alert('¡BIENVENIDO A LA TIENDA!');
let nombre = prompt('Ingrese su nombre:')
alert('Hola ' + nombre + '! Por favor continúe y elija una opcion:');
  
let opcion;
  
do {
    opcion = parseInt(prompt(
    'MENU:   1. Ver catálogo     2. Agregar producto al carrito     3. Ver carrito   4. Pagar'));

    switch (opcion) {
      case 1:
        let catalogoOpcion = ' CATÁLOGO DE PRODUCTOS: ';
        for (let i = 0; i < catalogo.length; i++) {
          catalogoOpcion += `${i + 1}. ${catalogo[i].nombre} - $${catalogo[i].precio} `;
        }
        alert(catalogoOpcion);
        break;
      case 2:
        let productoIngresado = parseInt(prompt('Ingrese el número del producto que desea agregar al carrito:'));
        if (productoIngresado >= 1 && productoIngresado <= catalogo.length) {
          let producto = catalogo[productoIngresado - 1];
          carrito.push(producto);
          total += producto.precio;
          alert(`+1  +"${producto.nombre}" agregado al carrito.`);
        } else {
          alert('Opción inválida. Inténtalo de nuevo.');
        }
        break;
      case 3:
        let carritoOpcion = ' CARRITO DE COMPRAS: ';
        for (let i = 0; i < carrito.length; i++) {
          carritoOpcion += `${i + 1}. ${carrito[i].nombre} - $${carrito[i].precio} `;
        }
        carritoOpcion += ` TOTAL: $${total}`;
        alert(carritoOpcion);
        break;
      case 4:
        let metodoPago = prompt('Seleccione la opción de método de pago: 1 (efectivo) 2 (tarjeta)');
        if (metodoPago === '1') {
          let descuento = total * 0.1;
          let totalPagar = total - descuento;
          alert(`Total a pagar (en efectivo):  Descuento (10%): $${descuento} Total a pagar: $${totalPagar}`);
          alert('Gracias por su compra! Vuelva pronto');
          console.log(`El cliente finalizo su compra. Ingreso: $${totalPagar}`);
        } else if (metodoPago === '2') {
          let recargo = total * 0.1;
          let totalPagar = total + recargo;
          alert(`Total a pagar (con tarjeta): Recargo (10%): $${recargo} Total a pagar: $${totalPagar}`);
          alert('Gracias por su compra! Vuelva pronto');
          console.log(`El cliente finalizo su compra. Ingreso: $${totalPagar}`);
        } else {
          alert('Método de pago inválido. Inténtalo de nuevo.');
        }
        break;
      default:
        alert('Opción inválida. Inténtalo de nuevo.');
        break;
    }
  } while (opcion !== 0 && opcion !== 4);
