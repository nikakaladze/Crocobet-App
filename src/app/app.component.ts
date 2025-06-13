import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header.component';
import { SideMenu } from './side-menu/side-menu';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideMenu, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
})
export class App { }
