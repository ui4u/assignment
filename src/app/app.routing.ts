import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './helpers/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
    { path: '', component: RegisterComponent },
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);