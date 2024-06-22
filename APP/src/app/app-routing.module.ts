import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inscricao', component: SubscriptionComponent },
  { path: 'sobre-nos', component: AboutUsComponent },
  { path: 'noticias/:id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
