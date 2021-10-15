import { range } from 'rxjs';

/**
 * NOTA: recordar que el método range tiene como argumentos
 * start --> valor por defecto es 0 (posición inicial)
 * count --> numero de veces que va emitir
 */
const src$ = range(1,5);
//const src$ = range(-5,10);
src$.subscribe(console.log);