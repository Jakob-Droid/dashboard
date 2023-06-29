import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardShowcaseComponent } from './dashboard-showcase/dashboard-showcase.component';
import { RichTextEditorShowcaseComponent } from './rich-text-editor-showcase/rich-text-editor-showcase.component';

const routes: Routes = [
    {
        path: 'showcase',
        children: [
            { path: 'dashboard', component: DashboardShowcaseComponent },
            { path: 'richtext', component: RichTextEditorShowcaseComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
