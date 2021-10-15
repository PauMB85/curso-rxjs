import { of } from 'rxjs';

const obs$ = of(1, 2, 3, 4, 5, 6);

// método of al ser generico, se puede enviar cualquier tipo
//const obs$ = of([1,2,3], {a:1,b:2}, function(){}, true, Promise.resolve(true))

obs$.subscribe({
  next: next => console.log('next', next),
  error: null,
  complete: () => console.log('Terminamos con la secuencia')
});