import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addProduct(): void {
    console.log(this.form.value);
  }

}
