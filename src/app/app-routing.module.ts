import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { ScoreManagerComponent } from './components/score-manager/score-manager.component';

const routes: Routes = [
	{
		path: '',
		component: EmptyPageComponent
	},
	{
		path: 'gerenciar-partituras',
		component: ScoreManagerComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
