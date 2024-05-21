import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrl: './element-ref.component.scss'
})
export class ElementRefComponent implements OnInit, AfterViewInit{

  @ViewChild('myDiv') myDivEl!: ElementRef <HTMLDivElement>

  constructor(private readonly _elRef: ElementRef) {}

  ngOnInit() {
   const divEl = this._elRef.nativeElement.querySelector('#myOtherDiv') as HTMLDivElement;

   divEl.textContent = 'Hello Again!';
   divEl.addEventListener('click', () => {
    console.log('cliquei!')
   })

  }

  ngAfterViewInit() {
      this.myDivEl.nativeElement.style.backgroundColor = 'orange';
      this.myDivEl.nativeElement.textContent = 'Outro texto';
      //Esse textContent subscreve o conteúdo do HTML
      this.myDivEl.nativeElement.classList.add('divClass');
      //Aqui, devemos usar classList.add, porque assim a classe estará sendo adicionada. Se usarmos className, o novo nome da classe substituirá todas as outras classes existentes no componente. Por exemplo: Se tivesse class 1 e class2, elas iriam deixar de exitir e o elemento passaria a ter uma unica classe chamda divClas.
  }

  createElement() {
    const novaDiv = document.createElement('div');
    novaDiv.textContent = 'Hello';
    novaDiv.classList.add('bg-red');

    this._elRef.nativeElement.appendChild(novaDiv);
    //O appendChild serve para injetar elementos HTML através do ElementRef(TS) no template HTML. TS -> HTML. Diferente do ViewChild, que é HTML -> TS
  }

}
