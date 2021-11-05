
import { ajax } from 'rxjs/ajax';
import { pluck, switchMap } from 'rxjs/operators';
import { fromEvent } from "rxjs";

const body = document.querySelector('body');
const textInput = document.createElement('input');

body.append(textInput);

// streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
  pluck('target','value'),
  switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log)