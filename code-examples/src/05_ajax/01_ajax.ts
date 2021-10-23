import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const manejarError = (err: AjaxError) => {
    console.error('error', err.message);
    return of([]);
}


ajax(url).pipe(
    pluck('response'),
    catchError(manejarError)
)
.subscribe({
    next: users => console.log('next', users),
    complete: () => console.log('complete'),
});