import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const slideOpenClosedAnimation = [
  trigger('slideOpenClosed', [
    state('open', style({
      height: '*'
    })),
    state('closed', style({
      height: '0',
    })),
    transition('open => closed', animate('250ms ease-in-out')),
    transition('closed => open', animate('250ms ease-in-out'))
  ])
];