import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dignissim dolor. Cras eu erat in nisi congue fringilla at quis massa. Proin a velit et turpis sagittis euismod ac id magna. Etiam ullamcorper, nulla eu luctus molestie, ante augue rutrum sapien, vel interdum augue elit sodales felis. Phasellus finibus augue tortor. Nunc ornare pretium porttitor. Phasellus ac ullamcorper elit, et fermentum est. Nullam sed velit sed ipsum dictum tristique.
<br/><br/>
Duis et dapibus magna. Aliquam facilisis eros ligula, ac hendrerit urna tempus rhoncus. Aliquam erat volutpat. Integer hendrerit volutpat eleifend. Nulla lacus dolor, ultrices sed fringilla id, aliquam et est. Suspendisse non placerat lectus. Nam sed neque tempus, vulputate ante eget, lacinia dui.
<br/><br/>
Maecenas at mi turpis. Nullam ut nisi in nulla vehicula malesuada egestas euismod nisl. Vestibulum ullamcorper dolor quis nunc tincidunt rhoncus. Praesent dapibus lectus mauris, eu mollis mauris posuere quis. In tristique urna quis viverra malesuada. Vivamus ut nisi ac nibh tempus rhoncus. Praesent finibus orci nec odio luctus finibus.
<br/><br/>
Cras tempus sagittis ullamcorper. Ut ipsum dui, blandit eget urna eu, elementum consectetur tellus. Sed consequat ornare leo sed fringilla. Duis congue vulputate consequat. Mauris tempor semper tortor, in consequat lectus posuere sed. Vestibulum pulvinar arcu fringilla pharetra gravida. Morbi rutrum fermentum tortor, in aliquet ligula pellentesque eu. Nulla augue dui, venenatis id risus sed, fermentum tincidunt justo. In at finibus nunc.
<br/><br/>
Sed non ullamcorper augue, a lacinia lectus. In sollicitudin elit at risus rutrum fringilla. Donec vehicula purus eget ante ultrices ultrices. Vivamus ornare iaculis quam vel hendrerit. Nulla non elit est. Praesent tincidunt turpis consectetur massa fermentum, vel pulvinar urna dapibus. Phasellus euismod ornare dolor ac semper. Sed leo ex, tristique sed augue aliquam, dignissim tempor arcu. In aliquam eu lorem tincidunt vestibulum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dignissim dolor. Cras eu erat in nisi congue fringilla at quis massa. Proin a velit et turpis sagittis euismod ac id magna. Etiam ullamcorper, nulla eu luctus molestie, ante augue rutrum sapien, vel interdum augue elit sodales felis. Phasellus finibus augue tortor. Nunc ornare pretium porttitor. Phasellus ac ullamcorper elit, et fermentum est. Nullam sed velit sed ipsum dictum tristique.
<br/><br/>
Duis et dapibus magna. Aliquam facilisis eros ligula, ac hendrerit urna tempus rhoncus. Aliquam erat volutpat. Integer hendrerit volutpat eleifend. Nulla lacus dolor, ultrices sed fringilla id, aliquam et est. Suspendisse non placerat lectus. Nam sed neque tempus, vulputate ante eget, lacinia dui.
<br/><br/>
Maecenas at mi turpis. Nullam ut nisi in nulla vehicula malesuada egestas euismod nisl. Vestibulum ullamcorper dolor quis nunc tincidunt rhoncus. Praesent dapibus lectus mauris, eu mollis mauris posuere quis. In tristique urna quis viverra malesuada. Vivamus ut nisi ac nibh tempus rhoncus. Praesent finibus orci nec odio luctus finibus.
<br/><br/>
Cras tempus sagittis ullamcorper. Ut ipsum dui, blandit eget urna eu, elementum consectetur tellus. Sed consequat ornare leo sed fringilla. Duis congue vulputate consequat. Mauris tempor semper tortor, in consequat lectus posuere sed. Vestibulum pulvinar arcu fringilla pharetra gravida. Morbi rutrum fermentum tortor, in aliquet ligula pellentesque eu. Nulla augue dui, venenatis id risus sed, fermentum tincidunt justo. In at finibus nunc.
<br/><br/>
Sed non ullamcorper augue, a lacinia lectus. In sollicitudin elit at risus rutrum fringilla. Donec vehicula purus eget ante ultrices ultrices. Vivamus ornare iaculis quam vel hendrerit. Nulla non elit est. Praesent tincidunt turpis consectetur massa fermentum, vel pulvinar urna dapibus. Phasellus euismod ornare dolor ac semper. Sed leo ex, tristique sed augue aliquam, dignissim tempor arcu. In aliquam eu lorem tincidunt vestibulum.
`;

const body = document.querySelector('body');
body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');

body.append(progressBar);

// Calculo % scroll
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}


// Nos suscribimos al scroll de mi HTML
// Streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap( console.log )
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
})