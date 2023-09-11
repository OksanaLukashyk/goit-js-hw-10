export function getCatsInfoMarkup(arr) {
  return arr
    .map(
      item => `<div class="imgCont"><img class="cat-img" src="${item.url}" alt="${item.breeds[0].name}" width="320"><img class="cat-img-shadow" src="${item.url}" alt="${item.breeds[0].name}" width="320"></div>
      <div class="breedInfoTextCont"><h2 class="breed-name">${item.breeds[0].name}</h2>
      <p class="breed-descr">${item.breeds[0].description}</p><p class="breed-temp"><span class="breed-temp-header">Temperament:</span> ${item.breeds[0].temperament}</p></div>`
    )
    .join('');
}
