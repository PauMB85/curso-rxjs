import { of, from } from 'rxjs';


/**
 * of = toma argumentos y genera una secuencia de valores
 * from = crear un observable desde un array, promesa, otro observable
 */

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
};

//Ej-1
//const source$ = from([1,2,3,4,5]);

//Ej-2
//const source$ = of([1,2,3,4,5]);
//const source$ = of(...[1,2,3,4,5]);

//Ej-3
//const source$ = from('Pau');

//Ej-4
/*const source$ = from(fetch('https://api.github.com/users/paumb85'));
source$.subscribe(async(resp) => {
  console.log(resp);
  const data = await resp.json();
  console.log(data);
});
*/
//Ej-5
//utilizando iteradores, nos permite obtener los valores de forma secuencial
const miGenerador =  function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();
from(miIterable).subscribe(observer);