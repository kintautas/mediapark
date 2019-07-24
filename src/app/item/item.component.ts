import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ValidateNumber } from './number.validator'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() closeEvent = new EventEmitter()
  @Output() addEvent = new EventEmitter()
  constructor(private fb: FormBuilder) { }
  myForm
  ngOnInit() {
    this.myForm = this.fb.group({
      product: new FormControl('', [Validators.required, Validators.minLength(4)]),
      price: new FormControl('', [Validators.required, ValidateNumber]),
      quantity: new FormControl('', [Validators.required, ValidateNumber])
    });
  }

  close() {
    this.closeEvent.emit()
  }
  product;
  price;
  quantity;

  add() {
    var data = {
      product: this.product,
      price: this.price,
      quantity: this.quantity
    }
    this.addEvent.emit(data)
    
  }

  getErrorMessageProduct() {
    if (this.myForm.controls.product.hasError('required')) return 'You must enter a value'
    if (this.myForm.controls.product.hasError('minlength')) return 'Must be at least 4 digits'

  }

  getErrorMessagePrice() {
    if (this.myForm.controls.price.hasError('required')) return 'You must enter a value'
    if (this.myForm.controls.price.errors && !this.myForm.controls.price.errors.validNumber) return 'Must be a number'
  }

  getErrorMessageQuantity() {
    if (this.myForm.controls.quantity.hasError('required')) return 'You must enter a value'
    if (this.myForm.controls.quantity.errors && !this.myForm.controls.quantity.errors.validNumber) return 'Must be a number'
  }

}
