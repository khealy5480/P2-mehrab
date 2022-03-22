import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"

@Component({
    selector: "app-component",
    template: "<div><p>AppComponent works!</p></div>"
})
export class AppComponent {
    constructor() {}
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {}
}

platformBrowserDynamic().bootstrapModule(AppModule);