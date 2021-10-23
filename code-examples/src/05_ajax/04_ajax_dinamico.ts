import { ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1';


// opcion 1
ajax.post(url, {
    id: 1,
    nombre: 'pau'
},{
    'mi-token': 'mi nuevo token'
}).subscribe(console.log);


//opción 2 --> de esta forma podemos enviar un DELETE con body
ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'mi nuevo token'
    },
    body: {
        id: 1,
        nombre: 'pau' 
    }
}).subscribe(console.log);