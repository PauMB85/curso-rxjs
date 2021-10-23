import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) => acc + cur;

// Reducer
from(numeros).pipe(
    reduce(totalAcumulador, 0)
)
.subscribe(console.log);

// Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
)
.subscribe(console.log);

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
};

const user:Usuario[] = [
    {id: 'pau', autenticado: false, token: null},
    {id: 'pau', autenticado: true, token: 'ABC'},
    {id: 'pau', autenticado: true, token: 'ABC123'}
];

// Este observable simula que se ejecuta cada una de las peticiones del usuario
const stateAccUser = (acc: Usuario, cur: Usuario) => {
    return {...acc, ...cur}
}
const state$ = from(user).pipe(
    scan(stateAccUser, {edad: 36})
);

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log);