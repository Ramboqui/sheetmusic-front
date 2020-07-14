import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

	@Input()
	options: [
		{
			label: string,
			href: string
		}
	];

	constructor(private router: Router) {
		router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				//this.outlet.deactivate();
				this.verifyRouting();
			}
		});
	}

	ngOnInit(): void {
	}

	setRoute(path: string) {
		this.router.navigateByUrl(path);
	}

	verifyRouting() {
		if (this.router.url === '/') {
			document.documentElement.style.setProperty(
				'--header-height',
				(window.innerHeight - 17) + 'px'
			);
			document.documentElement.style.setProperty(
				'--header-width',
				window.innerWidth + 'px'
			);
		} else {
			document.documentElement.style.setProperty(
				'--header-height',
				(window.innerHeight * 0.95) + 'px'
			);
			document.documentElement.style.setProperty(
				'--header-width',
				(window.innerWidth - 17) + 'px'
			);
		}
	}

}
