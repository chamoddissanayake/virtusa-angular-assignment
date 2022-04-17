import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import { TitleComponent } from './components/title/title.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TitleComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    BannerComponent
  ],
    exports: [
        CommonModule,
        FormsModule,
        TitleComponent,
        HeaderComponent,
        FooterComponent,
        ErrorComponent,
        BannerComponent
    ]
})
export class SharedModule {
  static forRoot() : ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [
        // UserService,
      ]
    };
  }
}
