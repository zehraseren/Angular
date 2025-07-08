import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import Layout from './pages/layout/layout';

@Component({
  imports: [Layout],
  templateUrl: './practice.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Practice {}
