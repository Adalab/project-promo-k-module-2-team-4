'use strict';

function sendRequest() {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  const linkShare = document.querySelector('.link--share');
  if (result.success) {
    linkShare.innerHTML =
      '<a class="link--share" href=' +
      result.cardURL +
      '>' +
      result.cardURL +
      '</a>';
  } else {
    linkShare.innerHTML = 'ERROR:' + result.error;
  }
}

function createTwitterLink(result) {
  const buttonTwitter = document.querySelector('.button--share');
  const twitterText = encodeURIComponent(
    '¡He creado mi tarjeta con Montgomery profile cards!'
  );
  const twitterURL = document.querySelector('.link--share').href;
  buttonTwitter.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${twitterURL}`;
}
