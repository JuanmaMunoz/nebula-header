import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropDown } from 'src/app/models/interfaces';
import { showHideStatus } from 'src/app/utils/effects/effects';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [showHideStatus],
})
export class DropdownComponent implements OnInit {
  @Input() show = false;
  @Input() dropDownList: IDropDown[] = [];
  @Output() dropDownActions: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public showHide(): void {
    this.show = !this.show;
  }

  public action(act: string): void {
    this.show = false;
    this.dropDownActions.emit(act);
  }
}
