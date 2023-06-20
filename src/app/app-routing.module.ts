import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'legal-notice', component:LegalNoticeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
