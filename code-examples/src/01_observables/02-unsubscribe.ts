import { interval, Observable, Observer } from 'rxjs';

/**
 * El subscribe tiene 3 parámetros opcionales
 * 1. next
 * 2. error
 * 3. complete
 */
const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado: ')
};

/**
 * El observable puede devolver un callback, que nos puede servir, en este caso para finalizar el setInterval y, por 
 * lo tanto, dejar de transmitir.
 * 
 * NOTAs: 
 * rxjs, tb nos proporciona las herramientas necesarias para poder hacerlo sin la necesidad del callback
 * 
 * Cada vez que se ejecuta el método complete, se dispará la función que tenemos en el callback del Observable, en nuestro caso limpia el intervalo
 * además, el método unsubscribe no se disparará, ya que se lanzo el complete
 *
 */
const intervalos$ = new Observable<number>(subscriber => {
  
  //crear un contador => 1,2,3,4,...
  let counter = 0;
  const interval = setInterval(() => {
    // cada segundo
    counter++;
    subscriber.next(counter);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('intervalo destruido')
  }
});

const subscription1 = intervalos$.subscribe( observer );
const subscription2 = intervalos$.subscribe( observer );
const subscription3 = intervalos$.subscribe( observer );

/**
 * Cada vez que se ejecuta el método unsubscribe, este lanza el método callback y luego pasa a la siguiente instrucción.
 */
setTimeout(() => {
  subscription1.unsubscribe();
  subscription3.unsubscribe();
  subscription2.unsubscribe();
  
  console.log('Completado timeout');

}, 6000);

/**
 * NOTAS:
 * Cada vez que se subscribe a un observable, se inicia desde el principio el código de 'intervalos$' (ya que se crea una nueva instancia)
 * aunque se puede iniciar también desde el punto en el cual se encuentra, no empieza desde cero.
 */


