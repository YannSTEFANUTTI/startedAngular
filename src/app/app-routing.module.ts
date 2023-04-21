import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormTemplatesDrivenComponent } from './form-templates-driven/form-templates-driven.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DirectivesQuestComponent } from './directives-quest/directives-quest.component';
import { ComposantsComponent } from './composants/composants.component';
import { DeveloperComponent } from './developer/developer.component';
import { DirectivesCoursComponent } from './directives-cours/directives-cours.component';
import { OnomatopiasComponent } from './onomatopias/onomatopias.component';

const routes: Routes = [
  { path: "user", component: UserProfileComponent },
  { path: "components", component: ComposantsComponent },
  { path: "directives-cours", component: DirectivesCoursComponent },
  { path: "directives-challenge", component: DirectivesQuestComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "form-templates-driven", component: FormTemplatesDrivenComponent },
  { path: "input-cours", component: KitchenComponent },
  { path: "developer", component: DeveloperComponent },
  { path: "onomatopias", component: OnomatopiasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
