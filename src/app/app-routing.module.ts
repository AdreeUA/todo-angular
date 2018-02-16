import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
