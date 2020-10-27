'use strict';

const inputList = document.querySelectorAll('.js-input');

let data = {
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  palette: 1,
  photo: '',
};

const saveField = function (event) {
  data[event.currentTarget.name] = event.currentTarget.value;
  render();
  setLocalStorage();
  sendRequest();
  showURL(true);
  createTwitterLink(true);
};

for (const input of inputList) {
  input.addEventListener('keyup', saveField);
}

const render = function () {
  document.querySelector('.js-cardName').innerHTML =
    data.name || 'Lisa Simpson';
  document.querySelector('.js-cardPosition').innerHTML =
    data.job || 'Saxophonist';
  document.querySelector('.js-cardEmail').href = 'mailto:' + data.email;
  document.querySelector('.js-cardPhone').href = 'tel:' + data.phone;
  document.querySelector('.js-cardLinkedin').href =
    'https://www.linkedin.com/in/' + data.linkedin;
  document.querySelector('.js-cardGithub').href =
    'https://www.github.com/' + data.github;
};

const buttonShare = document.querySelector('.js-button--create');
const twitterContainer = document.querySelector('.js-twitterContainer');
const shareTwitter = document.querySelector('.js-section__link--share');

function showLinkSection() {
  twitterContainer.classList.remove('hidden');
  shareTwitter.classList.remove('hidden--border');
  buttonShare.classList.add('change-button');
}

buttonShare.addEventListener('click', showLinkSection);
