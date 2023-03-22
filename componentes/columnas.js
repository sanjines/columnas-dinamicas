/* 
  El código proporcionado es un módulo JavaScript que permite expandir y colapsar columnas en una página web, al hacer clic en ellas.Aquí la explicaion de cada parte del código:

  const columna = document.querySelectorAll('.columna');
  Selecciona todos los elementos del DOM con la clase.columna y los almacena en la constante columna.;

  let columnaActiva = 1;
  Define una variable llamada columnaActiva que almacena el índice de la columna activa(expandida).Inicialmente, se establece en 1.;

  const expandirCol = () => { ... };
  Define una función llamada expandirCol que se encarga de agregar un evento de clic a cada elemento de la constante columna.Cuando se hace clic en un elemento, se llama a la función estadoCol con el índice del elemento.;

  const estadoCol = (index) => { ... };
  Define una función llamada estadoCol que toma un argumento index.Esta función se encarga de expandir la columna clickeada y colapsar la columna previamente expandida.Primero, se elimina la clase js - expandirCol de la columna activa actual y luego se agrega la misma clase a la columna clickeada.Finalmente, se actualiza el valor de columnaActiva con el índice de la columna clickeada.;

  export default expandirCol;
  Exporta la función expandirCol como exportación predeterminada del módulo, permitiendo que otros módulos importen y utilicen esta función.

  En resumen, este módulo JavaScript permite expandir y colapsar columnas en una página web al hacer clic en ellas.La función expandirCol agrega eventos de clic a los elementos de columna, y la función estadoCol se encarga de cambiar el estado de las columnas(expandida o colapsada).
*/
const columna = document.querySelectorAll('.columna');
let columnaActiva = 1;

const expandirCol = () => {

  columna.forEach((item, index) => {
    item.addEventListener('click', () => {
      estadoCol(index);
    });
  });
};

// CAMBIAR EL ESTADO DE LAS COLUMNAS
const estadoCol = (index) => {
  columna[columnaActiva].classList.remove('js-expandirCol');
  console.log([columnaActiva]);
  columna[index].classList.add('js-expandirCol');
  columnaActiva = index;
};

export default expandirCol;