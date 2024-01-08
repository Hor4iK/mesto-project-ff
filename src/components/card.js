export const deleteCard = e => {
  const deletedItem = e.target.closest('.card');
  deletedItem.remove();
}

export default function createCard(template, linkValue, descriptionValue, onDelete) {
  const cardElement = template.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const imageCard = cardElement.querySelector('.card__image');
  const titleCard = cardElement.querySelector('.card__title');

  imageCard.src = linkValue;
  imageCard.alt = descriptionValue;
  titleCard.textContent = descriptionValue;
  deleteButton.addEventListener('click', e => {
    onDelete(e);
  });

  return cardElement;
};
