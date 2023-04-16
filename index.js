const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];




 // Las pizzas que tengan un id impar.
 console.log("Pizzas con ID impares:");

 const buscarId = pizzas.filter((pizza) => {  
    return pizza.id % 2 !== 0; 
 });

 buscarId.forEach(i => { 
  console.log(i.nombre);
 });
 console.log("");
 console.log("---");
 console.log("");



 // Responder: ¿Hay alguna pizza que valga menos de $600?
 console.log("Hay alguna zapi que salga menos de $600 pe?");
 let cantidad = 0;

 const buscarPrecio = pizzas.filter((pizza) => {  
  return pizza.precio < 600;
 });

 buscarPrecio.forEach(i => { 
  console.log(`La ${i.nombre} tiene un valor de $${i.precio}`);
  console.log("");
  cantidad++;
 });

 console.log(`Hay ${cantidad} pizza(s) que sale menos de $600`);
 console.log("");
 console.log("---");
 console.log("");


 // El nombre de cada pizza con su respectivo precio.
 console.log("Estas son nuestras pizzas:")
 

 pizzas.forEach(nombrePizza => { 
  console.log(`Nombre: ${nombrePizza.nombre}`);
  console.log(`Precio: $${nombrePizza.precio}`);
  console.log("");
 });

 console.log("---");
 console.log("");


 // Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

 console.log("Estos son los ingredientes de nuestras pizzas:")

 pizzas.forEach(ingredientesPizzas => { 
  console.log(`Nombre: ${ingredientesPizzas.nombre}`);
  console.log(`Ingredientes:`);
  for (i=0; i < ingredientesPizzas.ingredientes.length; i++) {
    console.log(ingredientesPizzas.ingredientes[i]);
  }
  console.log("");
 });

 console.log("---");