const searchArticle = (url, successCB, errorCB) => {
  return fetch(url)
    .then(response => {
      if (response.status >= 200 && response.status <= 299) {
          return Promise.resolve(response.json())
        } else {
          return Promise.reject(new Error(`Request rejected with status ${response.status}`))
        }
    })
    .then(successCB)
    .catch(errorCB)
}

export default searchArticle;

