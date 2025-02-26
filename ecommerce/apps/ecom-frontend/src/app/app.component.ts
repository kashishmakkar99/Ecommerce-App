import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  standalone: true, // ✅ Add this if using standalone components
  imports: [RouterModule,FontAwesomeModule],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // ✅ Fixed typo (styleUrls instead of styleUrl)
})
export class AppComponent implements OnInit {
  title = 'ecom-frontend';

  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome(): void {
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}

