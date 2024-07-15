import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modale-edit',
  templateUrl: './modale-edit.component.html',
  styleUrls: ['./modale-edit.component.scss']
})
export class ModaleEditComponent implements OnInit {
  @Input() travelPackage: any;
  editPackageForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
    // Inizializzazione della proprietà nel costruttore
    this.editPackageForm = this.fb.group({
      id: [''],
      travelPackageName: [''],
      winery: [''],
      startDate: [''],
      endDate: [''],
      price: [''],
      imageUrl: ['']
    });
  }

  ngOnInit(): void {
    if (this.travelPackage) {
      this.editPackageForm.patchValue(this.travelPackage);
    }
  }

  saveChanges() {
    this.activeModal.close(this.editPackageForm.value);
  }

  closeModal() {
    this.activeModal.dismiss();
  }
}
