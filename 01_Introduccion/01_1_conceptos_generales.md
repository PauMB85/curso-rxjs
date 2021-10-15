# Conceptos generales

## ¿Cuándo usar RX?

Se puede utilizar:
* Eventos en la interfaz de usuario.
* Cuando es necesario notificar sobre cambios en un objeto.
* Comunicacion por sockets.
* Cuando necesitamos trabajar con flujos de información (Streams).

## Piezas fundamentales de la programación reactiva

* Observables.
* Subscribers.
* Operators.

### Observables

* Es la pieza fundamental de la progración reactiva, ya que es la fuenta de información.
* Pueden emitir multiples valores, sólo uno o incluso ninguno.
* También pueden emitir errores.
* Además, pueden ser infinitos o finitos.
* Pueden ser síncronos o asíncronos.

### Subscribers

* Se subscriben a un observable, es decir, estar pendiente de lo que realiza el observable.
* Consumen / observan la data del observable.
* Pueden recibir los errores y eventos del observable.
* Desconocen todo lo que se encuentra detás del observable.

### Operators

* Usados para transformar Observables (map, group, scan, ...).
* Usados para filtrar observables (filter, distinct, skip, debounce, ...).
* Usados para combinar observables.
* Usados para crear nuevos observables.

## Beneficios de la progración reactiva

* Evitar __Callback Hell__.
* Trabajar de forma simple tareas síncronas y asíncronas.
* Uso de operadores para reducir y simplificar el trabajo.
* Es fácil transformar los flujos (Stream) de información.
* Código más limpio y fácil de leer.
* Fácil de implementar.
* Fácil anexar precedimientos sin alterar el producto final.