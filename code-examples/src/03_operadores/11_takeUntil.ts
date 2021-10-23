import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

// observables

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click');

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
});


