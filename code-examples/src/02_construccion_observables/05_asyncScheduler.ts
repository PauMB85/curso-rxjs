import { asyncScheduler } from 'rxjs';

/**
 * asyncScheduler como un setTimeout
 * setTimeout(() => {}, 2000)
 * asyncScheduler.schedule(funcion, tiempo, state)
 */

const saludar = () => console.log('Hola Mundo');
const saludarNombre = nombre => console.log(`Hola ${nombre}`);

asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludarNombre, 2000, 'Pau'); // el tercer parámetro tb puede ser un objeto

/**
 * asyncScheduler como un setInterval
 * setInterval(() => {}, 2000)
 * asyncScheduler.schedule(funcion(state), tiempo, state)
 * NOTA: La función no puede ser de tipo flecha
 * para que funcione se tiene que volver a llamar al schedule
 */

 const subs = asyncScheduler.schedule(function (state) {
   console.log('state', state);
   this.schedule(state+1, 1000);
 }, 3000, 0);

 //Cancelación con setTimeout
/*setTimeout(() => {
  subs.unsubscribe();
},10000);*/

//Cancelación con asyncScheduler
asyncScheduler.schedule(() => subs.unsubscribe(), 10000);

