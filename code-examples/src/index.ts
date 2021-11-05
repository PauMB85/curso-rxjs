import { of } from "rxjs";
import {endWith} from 'rxjs/operators';

const numeros$ = of(1,2,3).pipe(
  endWith(4)
).subscribe(console.log)