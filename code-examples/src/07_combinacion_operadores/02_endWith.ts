import { of } from "rxjs";
import {endWith} from 'rxjs/operators';

of(1,2,3).pipe(
  endWith(4)
).subscribe(console.log)