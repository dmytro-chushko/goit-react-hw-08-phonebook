import { Notify } from 'notiflix';

export const fetchErrorHendler = error => {
  switch (error) {
    case 400:
      Notify.failure('Wrong email or password');
      break;
    case 500:
      Notify.failure('Something wrong, please try later');
      break;
    case 'FETCH_ERROR':
      Notify.failure('Chek your connection to the internet');
      break;
    default:
  }
};
