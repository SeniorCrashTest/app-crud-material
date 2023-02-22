import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private dialog: MatDialog, private http: HttpService) {}
	

	openDialog() {
		this.dialog.open(DialogComponent, {
			width: '30%'
		})
	}

	ngOnInit(): void {
		this.fetchData()
	}

	private fetchData(): void {
		this.http.readData().subscribe({
			next: res => {
				console.log(res)
			},
			error: err => console.log(err)
		})
	}
}
