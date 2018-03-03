import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CommNamePage } from '../comm-name/comm-name';
import { UpcomingevtPage } from '../upcomingevt/upcomingevt';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CommNamePage;
  tab3Root= UpcomingevtPage;
  constructor() {

  }
}