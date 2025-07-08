import { RouterLink, RouterOutlet } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  imports: [RouterOutlet, RouterLink],
  templateUrl: './tutorial.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// Component export kısmı
export default class Tutorial {} // Default export - import('../tutorial/tutorial') için gerekldir


