import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive ({
    selector: '[appInputBackground]'
})

export class InputBackgroundDirective {
    @Input('bgColor') appInputBackground: string = 'white';
    @Input('tColor') textColor: string = 'black';

    @HostBinding('style.backgroundColor') bgColor: string = '';
    @HostBinding('style.color') color:string = '';

    @HostListener('focus') // quando damos o foco

     onFocus() {
         this.bgColor = this.appInputBackground;
         this.color = this.textColor;
        }

    @HostListener('blur') //quando removemos o foco 

     onBlur() {
        this.bgColor = 'white';
        this.color = 'black';
     }
    }