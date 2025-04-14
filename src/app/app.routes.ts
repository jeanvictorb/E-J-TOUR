import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { PacoteFromComponent } from './components/pacotes/pacote-from/pacote-from.component';
import { PasseioFromComponent } from './components/passeio/passeio-from/passeio-from.component';
import { IndexComponent } from './components/layout/index/index.component';

export const routes: Routes = [
    {path: '', redirectTo: 'principal', pathMatch: 'full'},
    {path: "principal", component: PrincipalComponent, children: [
        {path: 'index', component: IndexComponent},
        {path: 'pacotes', component: PacoteFromComponent},
        {path: 'passeio', component: PasseioFromComponent}

    ]},

];
