import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements AfterViewInit {
    fruitList = [
      'Banana',
      'Maçã',
      'Pêra',
      'Morango',
      'Laranja'
    ]
  
    @ViewChildren('minhaDiv')
     fruitListEl!: QueryList<ElementRef<HTMLDivElement>>;
    fruits: string | undefined | null;
  
     ngAfterViewInit(){
      this.fruitListEl.forEach((el: ElementRef<HTMLDivElement>) => {
        console.log(el.nativeElement.textContent);
      });
  
      const firstFruit = this.fruitListEl.toArray()[0].nativeElement.textContent;
      console.log(firstFruit);
      this.fruits = firstFruit;
    }
  
    randomFruit: string | undefined;
  
    constructor() {}
  
    changeFruit() {
      const randomIndex = Math.floor(Math.random() * this.fruitList.length);
      this.randomFruit = this.fruitList[randomIndex];
    }
}