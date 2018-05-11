import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";

import { ArticleRouting } from "./article.routing";
import { EditArticleComponent } from "./edit-article.component";
import { ListArticlesComponent } from "~/module/article/list-articles.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptUIDataFormModule,
        NativeScriptLocalizeModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIListViewModule,
        ArticleRouting,
        TNSFontIconModule.forRoot({
            fa: "./fonts/font-awesome.css"
        })
    ],
    declarations: [ListArticlesComponent, EditArticleComponent],
    exports: [ListArticlesComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ArticleModule {}