import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {
    //->Com Attribute binding
    //@HostBinding('attr.style') attrStyle = 'background-color: blue; color:red;';

    //->Com Property binding
    //@HostBinding('style') propStyle = 'background-color: cyan; color:red;'

    //->Com HostBinding
    /*@HostBinding('style') propStyleObj = {
        backgroundColor: 'purple',
        color: 'red',
    }*/

    @HostBinding('style.fontSize') fSize = '30px';
    @HostBinding('style') propStyleObj = {
        backgroundColor: 'purple',
        color: 'red',
    }
}