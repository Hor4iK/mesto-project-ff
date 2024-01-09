//Imports
import { initialCards } from "./cards";
import { deleteCard, likeCard } from "./card";
import createCard from "./card";
import { openModal, closeModal} from "./modal";
import "../pages/index.css";


// @todo: DOM nodes
const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const popupNewCard = document.querySelector('.popup_type_new-card');
const formElementNewCard = popupNewCard.querySelector('.popup__form')
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupTypeImage = document.querySelector('.popup_type_image');

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

//Fields of the profile form in DOM
const formElementProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
const jobInput = popupEditProfile.querySelector('.popup__input_type_description');


//Uploading the array of cards to the page
initialCards.forEach(item => {cardsContainer.append(createCard(cardTemplate, item.link, item.name, deleteCard, likeCard));});

//Function to submit the form of editing a profile
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal();
}

//Event handlers of Profile form
buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupEditProfile);
});

formElementProfile.addEventListener('submit', handleFormProfileSubmit);

//Function to submit the form of creating a new card
function handleFormNewCardSubmit(evt) {
  const nameCardInput = formElementNewCard.querySelector('.popup__input_type_card-name');
  const linkCardInput = formElementNewCard.querySelector('.popup__input_type_url');

  evt.preventDefault();
  cardsContainer.prepend(createCard(cardTemplate, linkCardInput.value, nameCardInput.value, deleteCard, likeCard));
  nameCardInput.value = "";
  linkCardInput.value = "";
  closeModal();
}

//Event handlers of NewCard form
buttonAddCard.addEventListener('click', () => {
  openModal(popupNewCard);
})

formElementNewCard.addEventListener('submit', handleFormNewCardSubmit);

//Event handler of Image openings
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
