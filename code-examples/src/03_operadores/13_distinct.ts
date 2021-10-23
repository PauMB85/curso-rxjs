import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinct()
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
});

interface Personaje {
    nombre: string;
};

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'X'
    },
];

const personajes$ = from(personajes);
personajes$.pipe(
    distinct( personaje => personaje.nombre)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
});