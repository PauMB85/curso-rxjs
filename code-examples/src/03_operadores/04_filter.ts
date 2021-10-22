import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

//Ejemplo 1
range(1,10).pipe(
  filter(val => val % 2 === 1)
).subscribe(console.log);

// Ejemplo 2
interface Personaje {
  tipo: string;
  nombre: string;
};

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman'
  },
  {
    tipo: 'heroe',
    nombre: 'Robin'
  },
  {
    tipo: 'villano',
    nombre: 'Joker'
  }
];

from(personajes).pipe(
  filter(personaje => personaje.tipo === 'heroe')
).subscribe(console.log);

//Ejemplo 3
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map(event => event.code),
  filter(key => key === 'Enter')
);

keyup$.subscribe(console.log);