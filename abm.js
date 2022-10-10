class Cliente {
  constructor(nombre, apellido, dni, direccion, cel) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.direccion = direccion;
    this.cel = cel;
  }
}

const clientePablo = new Cliente(
  "Pablo",
  "Ganin",
  27557134,
  "maipu 173",
  3491501470
);
const clienteTamara = new Cliente(
  "Tamara",
  "Bossio",
  30003324,
  "9 de julio 1024",
  3491457215
);
const clienteGuillermo = new Cliente(
  "Guillermo",
  "Ganin",
  12345678,
  "illia 669",
  3491234879
);
const clienteHayde = new Cliente(
  "Hayde",
  "Windey",
  12345678,
  "maipu 173",
  3491452136
);

const arrayCliente = [];

arrayCliente.push(clientePablo);
arrayCliente.push(clienteTamara);
arrayCliente.push(clienteGuillermo);
arrayCliente.push(clienteHayde);

console.log(arrayCliente);

//Opciones

function menu() {
  alert("ABM Sat Multimarcas");
  let opcion = parseInt(
    prompt(
      "Ingrese una opción: \n 1) Alta de cliente \n 2) Baja de cliente \n 3) Modificación de cliente \n 4) Consulta de cliente \n 5) Salir"
    )
  );
  return opcion;
}

//Alta

function altaCliente() {
  let nombre = prompt("Ingrese el nombre del cliente: ");
  let apellido = prompt("Ingrese el apellido del cliente: ");
  let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
  let direccion = prompt("Ingrese la Dirrecion: ");
  let cel = parseInt(prompt("Ingrese Nº de Cel: "));
  let cliente = new Clientes(nombre, apellido, dni, direccion, cel);
  arrayCliente.push(cliente);
  console.log(arrayCliente);
}

//Baja

function bajaCliente() {
  let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
  let cliente = arrayCliente.find((cliente) => cliente.dni === dni);
  let indice = arrayCliente.indexOf(cliente);
  arrayCliente.splice(indice, 1);
  console.log(arrayCliente);
}

//Modificacion de Cleinte

function modificacionCliente() {
  let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
  let cliente = arrayCliente.find((cliente) => cliente.dni === dni);
  let indice = arrayCliente.indexOf(cliente);
  let nombre = prompt("Ingrese el nombre del cliente: ");
  let apellido = prompt("Ingrese el apellido del cliente: ");
  let direccion = prompt("Ingrese su Direccion: ");
  let cel = parseInt(prompt("Ingrese Nº de Cel: "));
  let clienteModificado = new Clientes(nombre, apellido, dni, direccion, cel);
  arrayCliente.splice(indice, 1, clienteModificado);
  console.log(arrayCliente);
}

//cliente

function consultaCliente() {
  let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
  let cliente = arrayCliente.find((cliente) => cliente.dni === dni);
  console.log(cliente);
}

//Salida

function salir() {
  alert("Saliendo del ABM Sat Multimarcas");
}

//Ejecucion

let opcion = menu();
switch (opcion) {
  case 1:
    altaCliente();
    break;
  case 2:
    bajaCliente();
    break;
  case 3:
    modificacionCliente();
    break;
  case 4:
    consultaCliente();
    break;
  case 5:
    salir();
    break;
  default:
    alert("No es correcto!");
    break;
}
