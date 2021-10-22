import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

//Ejemplo 1
/*range(1,5).pipe(
  map<number, number>(val => val * 10)
)
.subscribe(console.log);*/


//Ejemplo 2
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
  map(event => event.code)
)

keyupCode$.subscribe( code => console.log('map', code));