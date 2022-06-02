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
  @HostBinding('style"') bghtml: string = 'hello';
  constructor(private el: ElementRef, private render: Renderer2) {}
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
