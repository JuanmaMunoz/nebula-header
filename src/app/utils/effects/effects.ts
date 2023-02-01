import { animate, style, transition, trigger } from '@angular/animations';

const effectShow = [
  style({ opacity: 0, display: 'block' }),
  animate('150ms', style({ opacity: 1, display: 'block' })),
];

const effectHide = [
  style({ opacity: 1, display: 'block' }),
  animate('150ms', style({ opacity: 0, display: 'none' })),
]

export const showHideStatus = trigger('showHideStatus', [
  transition('false=>true', effectShow),
  transition('true=>false', effectHide),
]);




