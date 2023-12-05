// @todo: Темплейт карточки
const cardList = document.querySelector('.places__list');

const deleteCard = e => {
  const deletedItem = e.target.closest('.places__item');
  deletedItem.remove();
}

function addCards(linkValue, descriptionValue) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = linkValue;
  cardElement.querySelector('.card__image').alt = descriptionValue;
  cardElement.querySelector('.card__description').textContent = descriptionValue;
  deleteButton.addEventListener('click', e => {
    deleteCard(e);
  });

  cardList.append(cardElement);
};

initialCards.forEach(item => {addCards(item.link, item.name)});

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
