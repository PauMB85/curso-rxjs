import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
};


interval(1000).pipe(
    take(4),
    tap(console.log),
    reduce(totalReducer, 0)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});