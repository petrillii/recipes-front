import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isManager: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }
}
