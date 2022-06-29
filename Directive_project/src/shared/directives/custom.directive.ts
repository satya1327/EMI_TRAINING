import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective implements OnInit {
  @HostBinding('style.backgroundColor') bgColor!: string ;
  @HostBinding('style.fontSize') bgfont: string = '';

  constructor(private el: ElementRef) {}
  ngOnInit() {}
  @HostListener('mouseenter') onmouseover() {
    this.bgfont = '25px';
    this.bgColor = 'blue';
  }
  @HostListener('mouseleave') onmouseleave() {
    this.bgfont = '';
    this.bgColor = 'Transparent';
  }
  @HostListener('dblclick') onmouseclick() {
    this.bgColor = 'red';
  }
}
