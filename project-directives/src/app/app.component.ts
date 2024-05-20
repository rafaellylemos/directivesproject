import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ListenerDirective } from './directives/listener.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(ListenerDirective) 
  listenerDirective!: ListenerDirective;
  botaoHabilitado = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    this.renderer.listen('document', 'click', (event) => {
      if (!this.elementRef.nativeElement.contains(event.target) && this.botaoHabilitado) {
        this.botaoHabilitado = false; 
      }
    });
  }

  ngAfterViewInit() {
    const elementRef = this.listenerDirective.getElementRef();
    this.renderer.listen(elementRef.nativeElement, 'click', () => {
      this.botaoHabilitado = true;
    });
  }

  chamarOnClickDiretiva() {
    this.listenerDirective.onClick();
}
}