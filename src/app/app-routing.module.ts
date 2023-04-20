import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormTemplatesDrivenComponent } from './form-templates-driven/form-templates-driven.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DirectivesQuestComponent } from './directives-quest/directives-quest.component';
import { ComposantsComponent } from './composants/composants.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: "user", component: UserProfileComponent },
  { path: "components", component: ComposantsComponent },
  { path: "directives", component: DirectivesQuestComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "form-templates-driven", component: FormTemplatesDrivenComponent },
  { path: "input-cours", component: KitchenComponent },
  { path: "developer", component: DeveloperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
