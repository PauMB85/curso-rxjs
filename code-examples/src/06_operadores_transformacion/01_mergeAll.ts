
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, mergeMap, pluck } from 'rxjs/operators';
import { fromEvent, Observable } from "rxjs";
import { GithubUser, GithubUsersResp } from '../interfaces/github-user.interface';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderedList = document.createElement('ol');

body.append(textInput, orderedList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  orderedList.innerHTML = '';

  for( const usuario of usuarios) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = usuario.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';

    li.append(img);
    li.append(usuario.login + ' ');
    li.append(anchor);

    orderedList.append(li)
  }
}

// streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  //pluck<KeyboardEvent, string>('target','value'),
  map<KeyboardEvent, string>(event => event.target['value']),
  map<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
  mergeAll(),
  map<any, GithubUser[]>(resp => resp.items)
).subscribe(mostrarUsuarios);