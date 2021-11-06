
/*const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');


combineLatest(
  keyup$.pipe(pluck('type')),
  click$.pipe(pluck('type'))
).subscribe(console.log);*/

import { combineLatest, fromEvent, pluck } from 'rxjs';

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '******';
input2.type = 'password';

document.querySelector('body').append(input1, input2);


//helper
const getItemStream = (elem: HTMLElement) => {
  return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
    pluck('target', 'value')
  )
};

combineLatest(
  getItemStream(input1),
  getItemStream(input2)
).subscribe(console.log)