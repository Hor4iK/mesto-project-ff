//Imports
import { initialCards } from "./cards";
import { deleteCard } from "./card";
import createCard from "./card";
import openModal from "./modal";
import "../pages/index.css";


// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

const popupNewCard = document.querySelector('.popup_type_new-card');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupTypeImage = document.querySelector('.popup_type_image');

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');


//Uploading the array of cards to the page
initialCards.forEach(item => {cardsContainer.append(createCard(cardTemplate, item.link, item.name, deleteCard));});

//Event handlers of modal windows
buttonEditProfile.addEventListener('click', () => {
  openModal(popupEditProfile);
});
buttonAddCard.addEventListener('click', () => {
  openModal(popupNewCard);
})
cardsContainer.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('card__image')) {
    const imageCard = evt.target;
    const imagePopup = popupTypeImage.querySelector('.popup__image');
    const captionPopup = popupTypeImage.querySelector('.popup__caption');

    imagePopup.src = imageCard.src;
    imagePopup.alt = imageCard.alt;
    captionPopup.textContent = imageCard.alt;
    openModal(popupTypeImage);
  }
})




