import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

// observables

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes skip')),
    skip(2),
    tap(() => console.log('tap después skip')),
);

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
});
