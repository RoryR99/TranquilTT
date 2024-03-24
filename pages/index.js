// API to get stories from MongoDB Atlas
import api from "../utils/api.js";

// Class imports

import navbarMenu from "../components/navbarMenu.js";
import Comment from "../components/Comment.js";
import CollapsibleCard from "../components/CollapsibleCard.js";
import Section from "../components/Section.js";

// Constants imports

import {
  comments,
  professionals,
  commentSelectors,
  collapsibleCardSelectors,
  commentTemplate,
  collapsibleCardTemplate,
  commentsContainer,
  professionalsContainer,
  navbarSelector,
} from "./../utils/constants.js";

// Navbar logic

const navbar = new navbarMenu(navbarSelector);

navbar.setEventListeners();

// Comments render & logic

// REVISE API
/* api.getStories().then((data) => {
  const commentList = new Section(
    {
      items: data,
      renderer: (item) => {
        commentList.addItem(createComment(item));
      },
    },
    commentsContainer
  );

  commentList.renderItems();
}); */

const commentList = new Section(
  {
    items: comments,
    renderer: (item) => {
      commentList.prependItem(createComment(item));
    },
  },
  commentsContainer
);

const createComment = (commentData) => {
  // if (checkCommentsLength) {
  const newComment = new Comment(commentData, commentTemplate);
  const commentElement = newComment.generateComment(commentSelectors);
  return commentElement;
  // }
};

const moodForm = document.querySelector(".popup");

moodForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const commentUser = document.querySelector("#checkmark").checked
    ? "Anonymous"
    : document.querySelector("#name").value;
  const commentMsg = document.querySelector("#comment").value;
  const commentData = {
    user: commentUser,
    avatar: "./images/comments__bubble-avatar-1.png",
    comment: commentMsg,
  };
  commentList.prependItem(createComment(commentData));
});

// const checkCommentsLength = () => {
//   const commentsArray = document.querySelectorAll(".comments__bubble");
//   return commentsArray.length < 4 ? true : false;
// };

commentList.renderItems();

// CollapsibleCards render & logic

const collapsibleCardList = new Section(
  {
    items: professionals,
    renderer: (item) => {
      collapsibleCardList.addItem(createCollapsibleCard(item));
    },
  },
  professionalsContainer
);

const createCollapsibleCard = (cardData) => {
  const newCard = new CollapsibleCard(cardData, collapsibleCardTemplate);
  const cardElement = newCard.generateCard(collapsibleCardSelectors);
  return cardElement;
};

collapsibleCardList.renderItems();

// Variable initialization
const shareStoryButton = document.querySelector(".moods__card-button");
const storyPopupCloseButton = document.querySelector(".popup__close");

// Function to open the popup
shareStoryButton.addEventListener("click", () => {
  document.querySelector(".popup").classList.add("popup_active");
  document
    .querySelector(".navbar__container")
    .classList.add("navbar__container_inactive");
});

// Function to close the popup
storyPopupCloseButton.addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("popup_active");
  document
    .querySelector(".navbar__container")
    .classList.remove("navbar__container_inactive");
});

// Mood buttons logic
const moodEstupendoButton = document.querySelector(".moods__button_estupendo");
const moodTristeButton = document.querySelector(".moods__button_triste");
const moodOkayButton = document.querySelector(".moods__button_okay");
const moodPreocupadoButton = document.querySelector(
  ".moods__button_preocupado"
);
const moodEstresadoButton = document.querySelector(".moods__button_estresado");
const moodCansadoButton = document.querySelector(".moods__button_cansado");

const moodCard = document.querySelector(".moods__card");
const moodCardTitle = document.querySelector(".moods__subtitle");
const moodArgument1 = document.querySelector(".moods__list_1");
const moodArgument2 = document.querySelector(".moods__list_2");
const moodArgument3 = document.querySelector(".moods__list_3");

moodEstupendoButton.addEventListener("click", () => {
  moodEstupendoButton.classList.toggle("moods__button_estupendo_active");
  moodCard.classList.toggle("moods__button_estupendo_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "Excellent! 🙂";
  moodArgument1.textContent = "That's Great!";
  moodArgument2.textContent = "Enjoy the moment!";
  moodArgument3.textContent = "Happiness is an emotion like any other and has its function, and you can express it.";

  checkClassList();
});

moodTristeButton.addEventListener("click", () => {
  moodTristeButton.classList.toggle("moods__button_triste_active");
  moodCard.classList.toggle("moods__button_triste_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "It's normal to feel this way!";
  moodArgument1.textContent = "Feeling sad may only be temporary, keep your head up!";
  moodArgument2.textContent = "A little positivity can change your life!";
  moodArgument3.textContent = "Sadness is like any other and has its function, and you can express how you feel.";

  checkClassList();
});

moodOkayButton.addEventListener("click", () => {
  moodOkayButton.classList.toggle("moods__button_okay_active");
  moodCard.classList.toggle("moods__button_okay_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "It's okay! 🙂";
  moodArgument1.textContent = "It's normal to feel this way!";
  moodArgument2.textContent = "Feeling just okay is a gentle reminder of the peace within life's simple joys.";
  moodArgument3.textContent = "Feeling just okay is an understated acknowledgment of life's gentle equilibrium, worthy of recognition in its own right.";

  checkClassList();
});

moodPreocupadoButton.addEventListener("click", () => {
  moodPreocupadoButton.classList.toggle("moods__button_preocupado_active");
  moodCard.classList.toggle("moods__button_preocupado_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "It's normal to feel this way 😞";
  moodArgument1.textContent = "Worrying can serve as a signal, prompting us to take precautionary measures and plan ahead.";
  moodArgument2.textContent = "Excessive worry can lead to mental distress, affecting our well-being and decision-making abilities.";
  moodArgument3.textContent = "Worry is a natural emotion with its purpose; expressing it is valid and necessary.";

  checkClassList();
});

moodEstresadoButton.addEventListener("click", () => {
  moodEstresadoButton.classList.toggle("moods__button_estresado_active");
  moodCard.classList.toggle("moods__button_estresado_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "Feeling this way is normal 😞";
  moodArgument1.textContent = "Stressed, a sign of overwhelm, reminds us to pause and recalibrate.";
  moodArgument2.textContent = "In the chaos of stress, self-care becomes paramount for resilience.";
  moodArgument3.textContent = "Stressed minds seek solace; finding moments of peace amid turmoil is essential.";

  checkClassList();
});

moodCansadoButton.addEventListener("click", () => {
  moodCansadoButton.classList.toggle("moods__button_cansado_active");
  moodCard.classList.toggle("moods__button_cansado_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "It's normal to feel this way 😞";
  moodArgument1.textContent = "Remember to prioritize rest; your body and mind need time to recharge.";
  moodArgument2.textContent = "Don't hesitate to ask for help or delegate tasks when you're feeling exhausted.";
  moodArgument3.textContent = "Practice self-compassion; it's okay to take breaks and listen to your body's need for rest.




";

  checkClassList();
});

// reset text on button click
const resetText = () => {
  moodCardTitle.textContent = "How are you?";
moodArgument1.textContent = "Share your story with others.";
moodArgument2.textContent = "Read stories from other users and leave a comment.";
moodArgument3.textContent = "It's important for you to know that you're not alone in this.";
};

function checkClassList() {
  if (moodCard.classList.contains("moods__card_active")) {
  } else {
    resetText();
  }
}

// open professional help modal
const agendarCitaButton = document.querySelectorAll(
  ".collapsible-card__button"
);
const citaModal = document.querySelector(".popup_professionals");

agendarCitaButton.forEach((button) => {
  button.addEventListener("click", () => {
    citaModal.classList.toggle("popup_professionals_active");
  });
});

// close professional help modal
const closeCitaModal = document.querySelector(".popup__close_professionals");

closeCitaModal.addEventListener("click", () => {
  citaModal.classList.remove("popup_professionals_active");
});
