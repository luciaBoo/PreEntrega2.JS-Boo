let catalogo = [
  { nombre: 'Aritos', precio: 800},
  { nombre: 'Collar', precio: 4500},
  { nombre: 'Anillo', precio: 2800},
  { nombre: 'Tobillera', precio: 1400},
  { nombre: 'Pulsera', precio: 2200}
];

let carrito = [];
let total = 0;

class Joya {
  constructor(nombreI, material, precio) {
    this.nombre = nombreI,
    this.material = material,
    this.precio = precio
  }
}
const joya1 = new Joya("Aritos", "Acero", 800)
const joya2 = new Joya("Collar", "Oro", 4500)
const joya3 = new Joya("Anillo", "Plata", 2800)
const joya4 = new Joya("Tobillera", "Acero", 1400)
const joya5 = new Joya("Pulsera", "Plata", 2200)
const estanteria = []
estanteria.push(joya1, joya2, joya3, joya4, joya5)

// Bienvenida del usuario, ingresa nombre
alert('¡BIENVENIDO A LA TIENDA!');
let nombre = prompt('Ingrese su nombre:')
alert('Hola ' + nombre + '! Por favor continúe y elija una opcion:');

//Menu
function mostrarMenu() {
  console.log("=== Menú ===");
  console.log("1. Agregar producto al carrito");
  console.log("2. Ver carrito");
  console.log("3. Consultar catálogo");
  console.log("4. Buscar por material");
  console.log("5. Finalizar compra");
  console.log("0. Salir del menu");

let opcion;
do {
  opcion = parseInt(prompt(`Ingrese una opción del -Menú- mostrado en consola:`))
  switch (opcion) {
    case 1:
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
    case 2:
      let carritoOpcion = ' CARRITO DE COMPRAS: ';
      for (let i = 0; i < carrito.length; i++) {
        carritoOpcion += `${i + 1}. ${carrito[i].nombre} - $${carrito[i].precio} `;
      }
      carritoOpcion += ` TOTAL: $${total}`;
      alert(carritoOpcion);
      break;
    case 3:
      let catalogoOpcion = ' CATÁLOGO DE PRODUCTOS: ';
      for (let i = 0; i < catalogo.length; i++) {
        catalogoOpcion += `${i + 1}. ${catalogo[i].nombre} - $${catalogo[i].precio} `;
      }
      alert(catalogoOpcion);
      break;
    case 4:
      buscarPorMaterial(estanteria)
      mostrarMenu();
      break;
    case 5:
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
    case 0:
      alert(`Gracias por su visita! Vuelva pronto`)
      salirMenu = true
      break
    default:
      alert("Opción no válida, ingrese alguna presente en el menu")
      break
  }
} while (opcion !== 0 && opcion !== 4);
}
mostrarMenu();

function buscarPorMaterial(arr) {
  let materialBusqueda = prompt("Ingrese el material de la joya que está buscando. Disponibles: Oro, plata, acero");
  let busqueda = arr.filter((Joya) => Joya.material.toLowerCase() === materialBusqueda.toLowerCase());
  
  if (busqueda.length === 0) {
    console.log(`Para el material ${materialBusqueda} no hay coincidencias en nuestro catálogo`);
  } else {
    verCatalogo(busqueda);
  }
}
function verCatalogo(array){
  console.log(`Nuestro catalogo es: `)
  for(let Joya of array){
     console.log(Joya.nombre, Joya.material, Joya.precio)
  }
}
