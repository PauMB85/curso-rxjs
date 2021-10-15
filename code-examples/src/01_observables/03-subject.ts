import { interval, Observable, Observer, Subject } from 'rxjs';

/**
 * El subscribe tiene 3 parámetros opcionales
 * 1. next
 * 2. error
 * 3. complete
 */
const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.error('error: ', error),
  complete: () => console.info('completado')
};


const intervalos$ = new Observable<number>(subs => {

  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log('bye bye Intervalo');
  }
});


/**
 * Principales características del Subject
 * 1- Casteo multiple, sirve para distribuir la misma información a todos aquellos que están subscritos
 * 2- También es un observer
 * 3. También se puede manejar con Next, error y complete 
 */

const subject$ = new Subject();
const subcription = intervalos$.subscribe(subject$);

//const subs1 = intervalos$.subscribe(rnd => console.log('sub1 - ', rnd));
//const subs2 = intervalos$.subscribe(rnd => console.log('sub2 - ', rnd));

/**
 * de esta forma, los dos subscribers reciben la misma información.
 */ 
//const subs1 = subject$.subscribe(rnd => console.log('sub1 - ', rnd));
//const subs2 = subject$.subscribe(rnd => console.log('sub2 - ', rnd));

/**
 * como se ha comentado previamente, tb pueden manegar un observer, el cual se ejecuta de la siguiente forma
 */
 const subs1 = subject$.subscribe(observer);
 const subs2 = subject$.subscribe(observer);


/**
 * Como se ha comentado un Subject tb es un observable, por lo tanto, tiene los métodos
 * de Next, Error y Complete.
 * Para comprobarlo, se creará un timeout, donde se incluirá un dato y se lanzará un complete.
 */

setTimeout(() => {
  subject$.next(10);
  subject$.complete(); // este complete no finalizar el intervalo$, se sigue ejecutando, solo lanza el método complete del observer

  // con el unsubcribe finalizaremos el intervalo
  subcription.unsubscribe();
}, 3500);

/**
 * NOTA: Cuando el dato es producido por el propio observable, es considerado un 'Cold Observable',
 * pero cuando el dato se produce desde fuera del observable se denomina 'Hot Observable'
 */
