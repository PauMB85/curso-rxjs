import { ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'paumb'
});

obs$.subscribe({
    next: data => console.log('next', data),
    complete: () => console.log('complete'),
});