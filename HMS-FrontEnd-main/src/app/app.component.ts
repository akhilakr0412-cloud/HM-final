import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HMS-FE';
     constructor(private router: Router) { }

    navClick(divId: string): void {
        const navItems = document
            .getElementsByClassName('nav-item');
        for (let i = 0; i < navItems.length; i++) {
            if (navItems[i].id === 'nav-' + divId) {
                navItems[i].className =
                    `nav-item inline-block p-4 text-blue-600
                     border-b-2 border-blue-600 rounded-t-lg active`;
            } else {
                navItems[i].className =
                    `nav-item inline-block p-4 border-b-2 
                    border-transparent rounded-t-lg 
                    hover:text-gray-600 hover:border-gray-300`;
            }
        }
        this.router.navigate(['/' + divId]);
    }
}
