import { initialCards } from "./cards";
import { deleteCard } from "./card";
import createCard from "./card";
import "../pages/index.css";
const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;


initialCards.forEach(item => {cardsContainer.append(createCard(cardTemplate, item.link, item.name, deleteCard));});

// @todo: DOM узлы


