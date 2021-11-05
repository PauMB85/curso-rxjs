import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, tap, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';

// utils
const peticionLogin = (userPass) => {
  return ajax.post('https://reqres.in/api/login?delay=2', userPass).pipe(
    pluck('response','token'),
    catchError(err => of('ERROR'))
  )
}

// formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPwd = document.createElement('input');
const btnSubmit = document.createElement('button');

// email
inputEmail.value = 'eve.holt@reqres.in';
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';

//pwd
inputPwd.value = 'cityslicka';
inputPwd.type = 'password';
inputPwd.placeholder = 'Passwrod';

//btn submit
btnSubmit.innerHTML = 'Login';

form.append(inputEmail, inputPwd, btnSubmit);
document.querySelector('body').append(form);

//Streams
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit').pipe(
  tap( event => event.preventDefault()),
  map( event => ({
    email: event.target[0].value,
    password: event.target[1].value 
  })),
  //mergeMap(peticionLogin)
  //switchMap(peticionLogin)
  exhaustMap(peticionLogin)
);

submitForm$.subscribe(token => {
  console.log(token);
});