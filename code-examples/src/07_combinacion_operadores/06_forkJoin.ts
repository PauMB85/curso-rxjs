import { forkJoin, interval, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, delay, take } from 'rxjs/operators';


const numeros$ = of(1,2,3);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a','b','c','d').pipe(delay(3500));


/*forkJoin(
  numeros$,
  interval$,
  letras$
).subscribe(console.log);*/

/*forkJoin({
  num: numeros$,
  interv: interval$,
  letra: letras$
}).subscribe(console.log);*/

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'paumb85';

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repo1234`).pipe(
    catchError(err => of([]))
  ),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
}).pipe(
  catchError(err => of(err))
).subscribe(console.log);