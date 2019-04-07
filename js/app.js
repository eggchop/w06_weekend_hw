document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-button');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleFormSubmit = function(evt){
  evt.preventDefault();

  const judgement = naughtyOrNice()

  const newListItem = document.createElement('li');
  if (judgement == 'NAUGHTY LIST!'){
  const addColorClass = newListItem.classList.add('set-red')
  }
  newListItem.textContent = `${evt.target.first.value}...${judgement} `

  const newEntryList = document.querySelector('#santa-list');
  newEntryList.appendChild(newListItem);

  evt.target.reset()
};

const handleDeleteAllClick = function (evt) {
  const santaList = document.querySelector('#santa-list');
  santaList.innerHTML = '';
}

//randomly decide if good or bad
function naughtyOrNice() {
  const random = Math.random();
  return random >= 0.5 ? 'NAUGHTY LIST!' : 'NICE LIST!';
}
