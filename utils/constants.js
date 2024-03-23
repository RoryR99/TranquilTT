// Example comments

const comments = [
  {
    user: "Reshma",
    avatar: "./images/comments__bubble-avatar-1.png",
    comment:
      "I feel like work is overwhelming me, I make an effort, but I feel like I don't give enough and I reach very extreme levels of exhaustion. How do I deal with that? 🙏",
  },
  {
    user: "Marlon",
    avatar: "./images/comments__bubble-avatar-2.png",
    comment:
      "I'm worried because at work they already told us that remote is over and I don't want that to happen. Being around people 😐 exhausts me and I don't know how to handle it.",
  },
  {
    user: "Anonymous",
    avatar: "./images/comments__bubble-avatar-3.png",
    comment:
      "I often struggle with a sense of unease when everything seems to be going well. It's as if I'm waiting for the other shoe to drop, and it's incredibly frustrating to live with this constant sense of impending doom. I wonder if anyone else experiences similar feelings? 🤡",
  },
  {
    user: "Anonymous",
    avatar: "./images/comments__bubble-avatar-4.png",
    comment:
      "I'm experiencing a grieving process 😔 following the loss of a family member. I never anticipated that the emotional attachment to someone would be this challenging. I wish the journey through this pain were less daunting, especially considering I can't confide in anyone at work about it.",
  },
];

const commentSelectors = {
  userElement: ".comments__bubble-name",
  avatarElement: ".comments__bubble-avatar",
  commentElement: ".comments__bubble-comment",
};

// Example Professionals

const professionals = [
  {
    image: "./images/professionals_Roxy.png",
    title: "Maxine Stone",
    subtitle: "View Profile",
    cta: "REQUEST AN APPOINTMENT",
    color: "#B49BFF",
    data:
      "<p>I specialize in:</p>" +
      "<ul>" +
      "<li>Clinical Psychology</li>" +
      "<li>Neuropsychology</li>" +
      "<li>Comparative Psychology</li>" +
      "</ul>"
  },
  {
    image: "./images/professionals_Dario.png",
    title: "Darius Singh",
    subtitle: "View Profile",
    cta: "REQUEST AN APPOINTMENT",
    color: "#E9E0C9",
    data:
      "<p>I specialize in:</p>" +
      "<ul>" +
      "<li>Business Psychology</li>" +
      "<li>Forensic Psychology</li>" +
      "<li>Gerontological Psychology</li>" +
      "</ul>"
  },
 {
    image: "./images/professionals_Fabio.png",
    title: "Matthew Gopaul",
    subtitle: "View Profile",
    cta: "REQUEST AN APPOINTMENT",
    color: "#C5E588",
    data:
      "<p>I specialize in:</p>" +
      "<ul>" +
      "<li>Couples Psychology</li>" +
      "<li>Family Psychology</li>" +
      "<li>Developmental Psychology</li>" +
      "</ul>"
},
 {
    image: "./images/professionals_Barbara.png",
    title: "Barbra Brown",
    subtitle: "View Profile",
    cta: "REQUEST AN APPOINTMENT",
    color: "#F59292",
    data:
      "<p>I specialize in:</p>" +
      "<ul>" +
      "<li>Educational Psychology</li>" +
      "<li>Family Psychology</li>" +
      "<li>Developmental Psychology</li>" +
      "</ul>"
},
];

const collapsibleCardSelectors = {
  imageElement: ".collapsible-card__img",
  titleElement: ".collapsible-card__title",
  subtitleElement: ".collapsible-card__subtitle",
  dataElement: ".collapsible-card__data",
  buttonElement: ".collapsible-card__button",
};

// Templates


const commentTemplate = document
  .querySelector("#template_comments")
  .content.querySelector(".comments__bubble");

const collapsibleCardTemplate = document
  .querySelector("#template_collapsible-card")
  .content.querySelector(".collapsible-card");

// Variable initialization & Selectors
const commentsContainer = document.querySelector(".comments__container");
const professionalsContainer = document.querySelector(
  ".professionals__elements"
);
const navbarSelector = ".navbar";

export {

  comments,
  professionals,
  commentSelectors,
  collapsibleCardSelectors,
  professionalsContainer,
  commentTemplate,
  collapsibleCardTemplate,
  commentsContainer,
  navbarSelector,
};
