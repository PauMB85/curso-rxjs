import { Observable, Observer } from 'rxjs';

/**
 * El subscribe tiene 3 parámetros opcionales
 * 1. next
 * 2. error
 * 3. complete
 */
const observer: Observer<any> = {
  next: value => console.log('siguiente [next] ', value),
  error: error => console.error('error [obs]: ', error),
  complete: () => console.info('completado [obs]')
};


const obs$ = new Observable<string>( subs => {

  subs.next('Hola');
  subs.next('Mundo');


  subs.complete();

  subs.next('Hola');
});

obs$.subscribe( observer );