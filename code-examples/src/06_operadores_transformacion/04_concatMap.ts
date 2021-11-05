import { concatMap, switchMap } from 'rxjs/operators';
import { fromEvent, interval, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click'); 

click$.pipe(
  concatMap(() => interval$)
)
.subscribe(console.log);