import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { breedSelector, loader, error, catInfoContainer } from './js/refs';
import { getCatsInfoMarkup } from './js/markup';

import { Notify } from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

loader.classList.remove('visually-hidden');
catInfoContainer.classList.add('visually-hidden');
breedSelector.classList.add('visually-hidden');

// ******* Axios *******
fetchBreeds()
  .then(breeds => {
    breedSelector.classList.remove('visually-hidden');
    loader.classList.add('visually-hidden');

    const breedOption = breeds
      .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
      .join('');

    breedSelector.insertAdjacentHTML('afterbegin', breedOption);

    new SlimSelect({
      select: breedSelector,
      settings: {
        placeholderText: 'Choose a breed',
      },
    });
  })
  .catch(error => {
    showError();
    console.log(error);
  });

breedSelector.addEventListener('change', getSelectedCat);

function getSelectedCat(evt) {
  const selectedCatId = evt.currentTarget.value;
  loader.classList.remove('visually-hidden');

  fetchCatByBreed(selectedCatId)
    .then(breedInfo => {
      if (breedInfo.length === 0) {
        return showError();
      }

      catInfoContainer.classList.remove('visually-hidden');
      loader.classList.add('visually-hidden');
      console.log(breedInfo);

      catInfoContainer.innerHTML = getCatsInfoMarkup(breedInfo);
      console.log(breedInfo.length);
    })
    .catch(error => {
      showError();
      console.log(error);
    });
}

function showError() {
  loader.classList.add('visually-hidden');
  catInfoContainer.classList.add('visually-hidden');

  Notify.failure(error.textContent, {
    clickToClose: true,
    timeout: 5000,
    cssAnimationStyle: 'zoom',
    position: 'center-top',
  });
}

///////////////////////////////////////////
// ******* Axios + CatAPI class *******
// ******* Fetch + class CatAPI *******
// import { CatAPI } from './js/cat-api';

// const catApi = new CatAPI();

// catApi
//   .fetchBreeds()
//   .then(breeds => {
//     breedSelector.classList.remove('visually-hidden');
//     loader.classList.add('visually-hidden');

//     const breedOption = breeds
//       .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
//       .join('');

//     breedSelector.insertAdjacentHTML('afterbegin', breedOption);

//     new SlimSelect({
//       select: breedSelector,
//       settings: {
//         placeholderText: 'Choose a breed',
//       },
//     });
//   })
//   .catch(error => {
//     showError();
//     console.log(error);
//   });

// breedSelector.addEventListener('change', getSelectedCat);

// function getSelectedCat(evt) {
//   const selectedCatId = evt.currentTarget.value;
//   loader.classList.remove('visually-hidden');

//   catApi
//     .fetchCatByBreed(selectedCatId)
//     .then(breedInfo => {
//       catInfoContainer.classList.remove('visually-hidden');
//       loader.classList.add('visually-hidden');
//       console.log(breedInfo);

//       catInfoContainer.innerHTML = getCatsInfoMarkup(breedInfo);
//     })
//     .catch(error => {
//       showError();
//       console.log(error);
//     });
// }

// function showError() {
//   loader.classList.add('visually-hidden');
//   catInfoContainer.classList.add('visually-hidden');
//   Notify.failure(error.textContent, {
//     clickToClose: true,
//     timeout: 6000,
//     cssAnimationStyle: 'zoom',
//     position: 'center-top',
//   });
// }
///////////////////////////////////////////
