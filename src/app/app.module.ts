import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './Components/Atoms/button/button.component';
import { ButtonDemoComponent } from './Demos/Atoms/button-demo/button-demo.component';
import { TextComponent } from './Components/Atoms/text/text.component';
import { TextDemoComponent } from './Demos/Atoms/text-demo/text-demo.component';
import { InputComponent } from './Components/Atoms/input/input.component';
import { InputFieldComponent } from './Components/Molecules/input-field/input-field.component';
import { CheckboxFieldComponent } from './Components/Molecules/checkbox-field/checkbox-field.component';
import { LoginFormComponent } from './Components/Organisms/login-form/login-form.component';
import { SignupFormComponent } from './Components/Organisms/signup-form/signup-form.component';
import { AccordianpanelComponent } from './Components/Molecules/accordianpanel/accordianpanel.component';
import { AccordianComponent } from './Components/Atoms/accordian/accordian.component';
import { AccordianDemoComponent } from './Demos/Organisms/accordian-demo/accordian-demo.component';
import { BreadcrumbComponent } from './Components/Molecules/breadcrumb/breadcrumb.component';
import { BreadcrumbDemoComponent } from './Demos/Molecules/breadcrumb-demo/breadcrumb-demo.component';
import { InputfieldDemoComponent } from './Demos/Molecules/inputfield-demo/inputfield-demo.component';
import { TabmenuComponent } from './Components/Molecules/tabmenu/tabmenu.component';
import { TabMenudemoComponent } from './Demos/Molecules/tab-menudemo/tab-menudemo.component';
import { AtomDemoComponent } from './Demos/Atoms/atom-demo/atom-demo.component';
import { MoleculesDemoComponent } from './Demos/Molecules/molecules-demo/molecules-demo.component';
import { OrganismsDemoComponent } from './Demos/Organisms/organisms-demo/organisms-demo.component';
import { CheckboxdemoComponent } from './Demos/Molecules/checkboxdemo/checkboxdemo.component';
import { CardComponent } from './Components/Atoms/card/card.component';
import { CarddemoComponent } from './Demos/Molecules/carddemo/carddemo.component';
import { MenuComponent } from './Components/Molecules/menu/menu.component';
import { MenudemoComponent } from './Demos/Molecules/menudemo/menudemo.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonDemoComponent,
    TextComponent,
    TextDemoComponent,
    InputComponent,
    InputFieldComponent,
    CheckboxFieldComponent,
    LoginFormComponent,
    SignupFormComponent,
    AccordianpanelComponent,
    AccordianComponent,
    AccordianDemoComponent,
    BreadcrumbComponent,
    BreadcrumbDemoComponent,
    InputfieldDemoComponent,
    TabmenuComponent,
    TabMenudemoComponent,
    AtomDemoComponent,
    MoleculesDemoComponent,
    OrganismsDemoComponent,
    CheckboxdemoComponent,
    CardComponent,
    CarddemoComponent,
    MenuComponent,
    MenudemoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule , FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
