import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisabledDirectiveDirective {

 @HostBinding('attr.disabled') attrDisabled = false;

}
