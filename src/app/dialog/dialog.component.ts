import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements	OnInit {

	productConditionList = ['Новый', 'Б/у', 'После ремонта']

	constructor() {}

	ngOnInit(): void {

	}
}
