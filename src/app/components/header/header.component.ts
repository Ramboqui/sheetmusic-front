import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

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

	constructor() { }

	ngOnInit(): void {
	}

}
