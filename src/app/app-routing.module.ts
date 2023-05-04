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
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { KittenRacineComponent } from './kitten-racine/kitten-racine.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailList02Component } from './cocktail-list02/cocktail-list02.component';
import { ButtonRacineComponent } from './button-racine/button-racine.component';
import { TimerComponent } from './timer/timer.component';

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
  { path: "kittens", component: KittenRacineComponent },
  { path: "article-list", component: ArticleListComponent },
  { path: "article/:id", component: ArticleDetailComponent },
  { path: "cocktail", component: CocktailListComponent },
  { path: "cocktail-two", component: CocktailList02Component },
  { path: "button", component: ButtonRacineComponent },
  { path: "timer", component: TimerComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
