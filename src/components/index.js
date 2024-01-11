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
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupTypeImage = document.querySelector('.popup_type_image');

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

const formElementNewCard = document.forms['new-place'];
const formElementProfile = document.forms['edit-profile'];

const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
const jobInput = popupEditProfile.querySelector('.popup__input_type_description');
const nameCardInput = formElementNewCard.querySelector('.popup__input_type_card-name');
const linkCardInput = formElementNewCard.querySelector('.popup__input_type_url');
const imagePopup = popupTypeImage.querySelector('.popup__image');
const captionPopup = popupTypeImage.querySelector('.popup__caption');


//Function Image Click handler
const handleCardClick = (linkValue, descriptionValue) => {
  imagePopup.src = linkValue;
  imagePopup.alt = descriptionValue;
  captionPopup.textContent = descriptionValue;
  openModal(popupTypeImage);
}

//Uploading the array of cards to the page
initialCards.forEach(item => {cardsContainer.append(createCard(cardTemplate, item.link, item.name, deleteCard, likeCard, handleCardClick));});

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
  evt.preventDefault();
  cardsContainer.prepend(createCard(cardTemplate, linkCardInput.value, nameCardInput.value, deleteCard, likeCard, handleCardClick));
  evt.target.reset();
  closeModal();
}

//Event handlers of NewCard form
buttonAddCard.addEventListener('click', () => {
  openModal(popupNewCard);
})

formElementNewCard.addEventListener('submit', handleFormNewCardSubmit);
