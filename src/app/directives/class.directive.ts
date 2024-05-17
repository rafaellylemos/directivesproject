import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appClass]'
})

export class ClassDirective {
    //@HostBinding('attr.class') attrClass = 'meu-texto';

    //@HostBinding('className') className = 'meu-size';

    @HostBinding('class') classObj = {
        'meu-texto': true,
        'meu-size': true
    };

    //Opte por utilizar o 'class'

    //OBS.: O elemento pode receber essa diretiva que a gente constroi e a diretiva do Angular (ex.: ngIf, ngFor) ao mesmo tempo, mas são conceitos diferentes.

}