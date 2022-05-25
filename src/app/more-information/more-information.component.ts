import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.css']
})
export class MoreInformationComponent implements OnInit {

  @Input() arrayGeneral: any = [];
  @Input() arrayQualitative: any = [];
  @Input() arrayQuantitative: any = [];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
