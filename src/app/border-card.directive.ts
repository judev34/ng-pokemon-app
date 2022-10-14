import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = 'transparent';
  private defaultColor: string = '#8dc7ad';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);

  }

  @Input('pokemonBorderCard')
  borderColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${{height}} + px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `2px solid ${color}`;
  }

}
