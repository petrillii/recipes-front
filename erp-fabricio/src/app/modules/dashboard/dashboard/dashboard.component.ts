import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isManager: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserRole().subscribe(role => {
      if (role === 'manager') {
        this.isManager = true;
      } else {
        this.isManager = false;
        // Redirecionar ou mostrar uma mensagem de erro caso o usuário não seja um gerente
      }
    });
  }
}
