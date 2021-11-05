import { of } from "rxjs";
import {startWith} from 'rxjs/operators';

of(1,2,3).pipe(
  startWith(0)
).subscribe(console.log)