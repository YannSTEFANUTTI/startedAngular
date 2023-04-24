import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesQuestComponent } from './directives-quest/directives-quest.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormTemplatesDrivenComponent } from './form-templates-driven/form-templates-driven.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MagicOvenComponent } from './magic-oven/magic-oven.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { ComposantsComponent } from './composants/composants.component';
import { DirectivesCoursComponent } from './directives-cours/directives-cours.component';
import { OnomatopiasComponent } from './onomatopias/onomatopias.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { KittenListComponent } from './kitten-list/kitten-list.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { KittenRacineComponent } from './kitten-racine/kitten-racine.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    DirectivesQuestComponent,
    MenuComponent,
    SignUpComponent,
    FormTemplatesDrivenComponent,
    KitchenComponent,
    MagicOvenComponent,
    DeveloperComponent,
    SkillComponent,
    ComposantsComponent,
    DirectivesCoursComponent,
    OnomatopiasComponent,
    CreateOnomatopiaComponent,
    KittenListComponent,
    CreateKittenComponent,
    UserKittenComponent,
    KittenRacineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
