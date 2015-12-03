import fetch from 'isomorphic-fetch';

export function customPost(url, body) {
  return request('post', url, body)
   .then(function(response) {
     return response.json();
   });
}

export function customGet(url) {
  return request('get', url, null)
  .then(function(response) {
    return response.json();
  });
}

function request (method, url, body) {
  let options = {
    method: method,
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  if(body) {
    options.body = JSON.stringify(body);
  }
  return fetch(url, options).then(checkStatus);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
