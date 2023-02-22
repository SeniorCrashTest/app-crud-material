import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  productConditionList = ['Новый', 'Б/у', 'После ремонта'];
  form = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    productCondition: ['', Validators.required],
    price: ['', Validators.required],
    comment: ['', Validators.required],
    date: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpService, private dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {
		this.http.readData().subscribe (
			res => console.log(res)
		);
	}

  addProduct(): void {
		if(this.form.invalid) return

		this.http.createData(this.form.value).subscribe({
			next: res => {
				console.log(res);
				this.form.reset()
				this.dialogRef.close('create');
			},
			error: err => console.log(err)
		})
	}

}
