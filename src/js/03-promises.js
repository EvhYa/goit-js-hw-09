import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = form[0];
const step = form[1];
const amount = form[2];
// const submitBtn = form[3];

form.addEventListener('submit', onSubmit);

function createPromise({ position, delay }) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((res, rej) => {
    if (shouldResolve) {
      // Fulfill
      res({ position, delay });
    } else {
      // Reject
      rej({ position, delay });
    }
  });
  return promise;
}

function onSubmit(evt) {
  evt.preventDefault();
  // console.log('click');
  // console.log(delay.value);
  // console.log(step.value);
  for (let i = 1; i <= amount.value; i += 1) {
    setTimeout(() => {
      const params = {
        position: i,
        delay: Number(delay.value) + (i - 1) * Number(step.value),
      };
      // console.log(params);
      // createPromise(params);
      // console.log(createPromise(params));
      createPromise(params)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }, Number(delay.value) + (i - 1) * Number(step.value));
  }
}
