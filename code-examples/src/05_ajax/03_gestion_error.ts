import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';


const url = 'https://httpbin.org/XXXdelay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({})
}



/**
 * opción 1 - gestionar error petición
 */
// getJSON
/*const obsGetJson$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);
obsGetJson$.subscribe({
    next: data => console.log('next - getJSON', data),
});

// ajax
const obsAjax$ = ajax(url).pipe(
    catchError(manejaError)
);
obsAjax$.subscribe({
    next: data => console.log('next - ajax', data),
});*/


/**
 * opción 2 - gestionar error petición en el subscriber
 */
// getJSON
const obsGetJson2$ = ajax.getJSON(url)
obsGetJson2$.subscribe({
    next: data => console.log('next - getJSON', data),
    error: err => console.warn('error - getJSON', err),
    complete: () => console.log('complete - getJSON'),
});

// ajax
const obsAjax2$ = ajax(url)
obsAjax2$.subscribe({
    next: data => console.log('next - ajax', data),
    error: err => console.warn('error - ajax', err),
    complete: () => console.log('complete - ajax'),
});