

import throttle from 'lodash.throttle';
// или var throttle = require('lodash.throttle');

const STOROGE_KEY = "feedback-form-state";


const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
// сохраним поля обьектом, используем атрибут name.
const formData = {}

populateFormEl();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInput,500));

function onInput(event) {
    formData[event.target.name] = event.target.value;
  localStorage.setItem(STOROGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget;
    const email = formElements.email.value;
    const message = formElements.message.value;

      if (email === '' || message === '') {
    return;
      }
      // очищаем форму после отправки (reset-сброс всех полей)
    event.currentTarget.reset();
      // очищаем хранилище
    localStorage.removeItem(STOROGE_KEY)

  console.log('email:', email);
  console.log('message:', message);
}

// если в хранилище что-то есть - заполняем поля
function populateFormEl() {
    const savedInfo = localStorage.getItem(STOROGE_KEY);
    const parsedSavedInfo = JSON.parse(savedInfo);
    if (parsedSavedInfo) {
      inputEl.value = parsedSavedInfo.email;
      textareaEl.value = parsedSavedInfo.message;

}
}


