import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinctUntilChanged()
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
        nombre: 'Megaman'
    },
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
        nombre: 'X'
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
    distinctUntilChanged((previo, actual) => previo.nombre === actual.nombre)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
});