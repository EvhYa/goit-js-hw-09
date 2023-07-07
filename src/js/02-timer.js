import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
const startCountdownBtn = document.querySelector('[data-start]');
const countDays = document.querySelector('[data-days]');
const countHours = document.querySelector('[data-hours]');
const countMinutes = document.querySelector('[data-minutes]');
const countSeconds = document.querySelector('[data-seconds]');

startCountdownBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      startCountdownBtn.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    //   console.log(selectedDates[0] > Date.now());
  },
};

const fp = flatpickr(dateInput, options);

startCountdownBtn.addEventListener('click', handlerClick);

function handlerClick() {
  startCountdownBtn.disabled = true;
  dateInput.disabled = true;

  const selectedDate = fp.selectedDates[0];

  const timerId = setInterval(() => {
    const countdownValueMs = selectedDate.getTime() - Date.now();
    const countdown = convertMs(countdownValueMs);
    countDays.textContent = addLeadingZero(countdown.days);
    countHours.textContent = addLeadingZero(countdown.hours);
    countMinutes.textContent = addLeadingZero(countdown.minutes);
    countSeconds.textContent = addLeadingZero(countdown.seconds);
    // console.log('tick counter');
    if (countdownValueMs <= 0) {
      clearInterval(timerId);
      Notiflix.Notify.success('EXPIRED');
      countDays.textContent = '00';
      countHours.textContent = '00';
      countMinutes.textContent = '00';
      countSeconds.textContent = '00';
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}
