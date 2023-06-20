import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/modules/home/services/recipes.service';
import { saveAs } from 'file-saver';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  login: boolean = false;
  constructor(
    private recipeService: RecipesService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(auth => {
      this.login = auth;
    })
  }

  exportRecipes(): void {
    this.recipeService.exportRecipes().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/zip' });
        saveAs(blob, 'recipes.zip');
      },
      (error) => {
        console.log('Erro ao exportar as receitas', error);
        // Tratar o erro de acordo com as necessidades
      }
    );
  }

}
