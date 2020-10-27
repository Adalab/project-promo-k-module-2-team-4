'use strict';

function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(data);
}

function showURL(result) {
  const linkShare = document.querySelector('.link--share');
  if (result.success) {
    linkShare.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    linkShare.innerHTML = 'ERROR:' + result.error;
  }
}
