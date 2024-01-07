export const deleteCard = e => {
  const deletedItem = e.target.closest('.card');
  deletedItem.remove();
}

export default function createCard(template, linkValue, descriptionValue, onDelete) {
  const cardElement = template.querySelector('.card').cloneNode(true);
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
