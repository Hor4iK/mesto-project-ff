// @todo: Темплейт карточки
const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

const deleteCard = e => {
  const deletedItem = e.target.closest('.card');
  deletedItem.remove();
}

function createCard(linkValue, descriptionValue, onDelete) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const imageCard = cardElement.querySelector('.card__image');
  
  imageCard.src = linkValue;
  imageCard.alt = descriptionValue;
  cardElement.querySelector('.card__title').textContent = descriptionValue;
  deleteButton.addEventListener('click', e => {
    onDelete(e);
  });

  return cardElement;
};

initialCards.forEach(item => {cardsContainer.append(createCard(item.link, item.name, deleteCard));});

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
