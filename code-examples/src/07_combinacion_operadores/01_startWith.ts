import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { startWith } from 'rxjs/operators';

of(1,2,3).pipe(
  startWith(0)
).subscribe(console.log)



const loadDiv = document.createElement('div');
loadDiv.classList.add('loading');
loadDiv.innerHTML = 'Cargarndo...';

const body = document.querySelector('body');


// stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
  startWith(true)
)
.subscribe(resp => {
  if(resp === true){
    body.append(loadDiv);
  } else {
    document.querySelector('.loading').remove();
  }

  console.log(resp);
})