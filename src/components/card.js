export const deleteCard = e => {
  const deletedItem = e.target.closest('.card');
  deletedItem.remove();
}

export const likeCard = e => {
  e.target.classList.toggle('card__like-button_is-active');
}

export default function createCard(template, linkValue, descriptionValue, onDelete, onLike) {
  const cardElement = template.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const imageCard = cardElement.querySelector('.card__image');
  const titleCard = cardElement.querySelector('.card__title');

  imageCard.src = linkValue;
  imageCard.alt = descriptionValue;
  titleCard.textContent = descriptionValue;
  deleteButton.addEventListener('click', onDelete);
  likeButton.addEventListener('click', onLike);

  return cardElement;
};
