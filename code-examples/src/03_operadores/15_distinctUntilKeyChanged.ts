import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';


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
    distinctUntilKeyChanged('nombre')
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
});