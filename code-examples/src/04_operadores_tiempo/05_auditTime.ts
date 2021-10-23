import { fromEvent } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({x}) => x),
    tap(val => console.log('tap', val)),
    auditTime(2000)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
})