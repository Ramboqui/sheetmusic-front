import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
	options = [
		{
			label: 'Gerenciar Partituras',
			href: 'gerenciar-partituras',
		},
	];

	mainClass = '';

	constructor(private elementRef: ElementRef, private router: Router) {
		router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				//this.outlet.deactivate();
				this.verifyRouting();
			}
		});
	}

	ngAfterViewInit(): void {
		this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
			'#ffefd4';
	}

	verifyRouting() {
		if (this.router.url === '/') {
			this.mainClass = 'hideMain';
		} else {
			this.mainClass = '';
		}
	}
}
