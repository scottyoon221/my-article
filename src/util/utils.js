export const extractContent = s => {
  var span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
};

export const cacheArticle = (article) => {
  localStorage.setItem('article', JSON.stringify(article));
};

export const clearCache = () => {
  localStorage.clear();
};

