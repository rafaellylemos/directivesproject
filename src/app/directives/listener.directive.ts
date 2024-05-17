import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appListener]',
})

export class ListenerDirective {

    constructor(private elementRef: ElementRef) {}

    getElementRef(): ElementRef {
        return this.elementRef;
      }

    @HostListener('click')
    onClick(){
        console.log('CLICOU!');
        this.elementRef.nativeElement;
    }

    @HostListener('keyup', ['$event', '"Meu Argumento"'])
    onKeyUp(event: KeyboardEvent, param2: string) {
        //console.log('DIGITOU!', event)

        console.log(param2);
        const fullText = (event.target as HTMLInputElement).value
        console.log(fullText);

        //OBS: o hostlistener pode receber dois argumentos...nesse caso acima, ele recebeu o event e o meu argumento. Ai, para acessar o event pelo onkeyup, eu declaro ele (event: keyboarEvent). E para acessar o meu argumento, eu tambem declaro ele (param2: string). Litralmente, cada um acessa a sua posicao respectiva. Mas eu coloquei esse exemplo ai somente para sabermos que esse cenario é possivel, porque é muito dificil voce utilizar mais de um argumento no HL.
    }

}