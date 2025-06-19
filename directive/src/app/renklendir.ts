import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
})
export class Renklendir {
  // HTML'den gelen [renklendir] input değeri (örnek: <p [renklendir]="'purple'">)
  // @Input() ile birden fazla değer alabiliriz ve bunlardan biri directive’in kendisiyle aynı isimde olabilir. Hatta bu çoğu zaman tercih edilen bir yaklaşımdır.
  @Input('renklendir') color: string | undefined;

  // HTML'den gelen [test] input değeri (örnek: <p [test]="'Zehra'">)
  @Input('test') name: string | undefined;

  // ElementRef ile directive’in uygulandığı DOM elemanına erişim sağlanır
  constructor(private el: ElementRef) {}

  // Kullanıcı mouse ile elementin üzerine geldiğinde çalışır
  @HostListener('mouseenter') mouseEnter() {
    console.log(this.color); // [renklendir] ile gelen renk
    console.log(this.name); // [test] ile gelen metin

    // DOM elemanının yazı rengini kırmızı yapar
    this.el.nativeElement.style = 'color:purple';

    // DOM elemanının içeriğini [test] ile gelen değerle değiştirir
    this.el.nativeElement.innerHTML = this.name;
    console.log('Mouse elementin üzerine geldi');
  }

  // Kullanıcı mouse ile elementten ayrıldığında çalışır
  @HostListener('mouseleave') mouseLeave() {
    // Rengi siyah yapar (eski haline getirir)
    this.el.nativeElement.style = 'color:black';

    console.log('Mouse elementin üzerinden ayrıldı');
  }
}
