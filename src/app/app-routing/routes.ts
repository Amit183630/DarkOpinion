import { Routes } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from "../home/home.component";
import { ContactComponent } from "../contact/contact.component";
import { AboutComponent } from "../about/about.component";
import { ProfileComponent } from "../profile/profile.component";
import { DarkSocietyComponent } from "../dark-society/dark-society.component";
export const routes:Routes=[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'profile',component:ProfileComponent},
    {path:'contact',component:ContactComponent},
    {path:'darksociety',component:DarkSocietyComponent},
    {path:'',redirectTo:'/home',pathMatch:'full' }
];