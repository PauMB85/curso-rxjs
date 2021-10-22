import { fromEvent, range } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

//Ejemplo 1
/*range(1,5).pipe(
  map<number, number>(val => val * 10)
)
.subscribe(console.log);*/


//Ejemplo 2 - map vs pluck
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
  map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
  pluck('key')
);

keyupCode$.subscribe( code => console.log('map', code));
keyupPluck$.subscribe( code => console.log('pluck', code));