import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

// Ejemplo 1
click$.pipe(
    debounceTime(3000)
)
.subscribe({
    next: val => console.log('next - ejempl1', val),
    complete: () => console.log('complete'),
});

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$.pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged(),
)
.subscribe({
    next: val => console.log('next - ejemplo2', val),
    complete: () => console.log('complete')
});
