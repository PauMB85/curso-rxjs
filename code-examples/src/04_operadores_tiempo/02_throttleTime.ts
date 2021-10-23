import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

// Ejemplo 1
click$.pipe(
    throttleTime(3000)
)
.subscribe({
    next: val => console.log('next - ejempl1', val),
    complete: () => console.log('complete'),
});

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
// esta configuración es como usar el debounceTime
input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target','value'),
    distinctUntilChanged(),
)
.subscribe({
    next: val => console.log('next - ejemplo2', val),
    complete: () => console.log('complete')
});
