import Notiflix from 'notiflix';

function ifSomeProblemAlert(error) {
  Notiflix.Notify.failure(`${error.message}Something going wrong `);
}

export { ifSomeProblemAlert };
