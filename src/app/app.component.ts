import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { SideMenu } from './side-menu/side-menu';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideMenu, Footer],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss',
})
export class App { }
