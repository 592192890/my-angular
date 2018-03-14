import {LoginComponent} from './login/login.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { ModuleWithProviders } from '@angular/core';

import { Routes , RouterModule} from '@angular/router';

const appRouter: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'user-detail',
        component: UserDetailComponent
    }
];
const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);
export default routing;