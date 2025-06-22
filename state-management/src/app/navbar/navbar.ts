import { Common } from '../common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  // Service'i constructor üzerinden inject eder public olarak inject edildiği için HTML tarafında doğrudan erişilebilir (örnek: {{ common.num }})
  constructor(public common: Common) {}
}
