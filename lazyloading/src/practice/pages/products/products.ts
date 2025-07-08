import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './products.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Products {

}
