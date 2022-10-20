import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = 'transparent';
  private defaultColor: string = '#8dc7ad';
  private defaultHeight: number = 180;

  /**
   * The constructor function is a special function that is called when an object is created from a
   * class
   * @param {ElementRef} el - ElementRef - this is a reference to the element that the directive is
   * attached to.
   */
  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);

  }

  /* This is a decorator that is listening for the input of the pokemonBorderCard. */
  @Input('pokemonBorderCard')
  borderColor!: string;

  /* This is a decorator that is listening for the mouseenter event and when it happens it will call
    the onMouseEnter function. */
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  /* This is a decorator that is listening for the mouseleave event and when it happens it will call
  the onMouseLeave function. */
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  /**
   * The function takes a number as an argument and sets the height of the element to that number
   * @param {number} height - number - The height of the element in pixels.
   */
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height} + px`;
  }

  /**
   * Set the border of the element to 2px solid and the color passed in.
   * @param {string} color - string - The color of the border.
   */
  setBorder(color: string) {
    this.el.nativeElement.style.border = `2px solid ${color}`;
  }

}
