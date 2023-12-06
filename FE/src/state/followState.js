import { atom } from 'recoil';

export const followState = atom({
  key: 'followState',
  default: null,
});

export const followStateLoading = atom({
  key: 'followStateLoading',
  default: false,
});

