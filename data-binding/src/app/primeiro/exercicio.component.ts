import { Component } from "@angular/core";

@Component({
    selector: 'exercicio-component',
    template: '<p>Olá, Mundo!</p>',
    styles: ['./exercicios.component.scss']
})

export class exercicioComponent {
    dado: string = 'Olá, Mundo!'
}

/*botaoClicado(){
    alert('Click Click')
}*/