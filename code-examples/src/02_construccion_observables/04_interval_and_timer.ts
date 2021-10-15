import { interval, timer } from 'rxjs';

/**
 * Creamos un observer
 */

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('complete'),
};

const interval$ = interval(1000);
const timer$ = timer(2000);
const timerInterval$ = timer(2000, 1000);

const ahoraMas5Segundos = new Date();
ahoraMas5Segundos.setSeconds(ahoraMas5Segundos.getSeconds() + 5);
const timerDate$ = timer(ahoraMas5Segundos);

console.log('Inicio');

/**
 * NOTA: cuando se lanza el observable interval$, nunca se ejecutará el método complete porque nunca se llega a completar
 */
//interval$.subscribe(observer);
//timer$.subscribe(observer);
//timerInterval$.subscribe(observer);
timerDate$.subscribe(observer);
console.log('Fin');