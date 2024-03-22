// Example comments

const comments = [
  {
    user: "Valmiki",
    avatar: "./images/comments__bubble-avatar-1.png",
    comment:
      "I feel like work is overwhelming me, I make an effort, but I feel like I don't give enough and I reach very extreme levels of exhaustion. How do I deal with that? 🙏",
  },
  {
    user: "Marvin",
    avatar: "./images/comments__bubble-avatar-2.png",
    comment:
      "I'm worried because at work they already told us that remote is over and I don't want that to happen. Being around people 😐 exhausts me and I don't know how to handle it.",
  },
  {
    user: "Anonymous",
    avatar: "./images/comments__bubble-avatar-3.png",
    comment:
      "I sometimes find myself distrusting days when everything is going well for me. I feel like it's going to be ruined at any moment, and it's very annoying to live like this. Does anyone else feel this way? 🤡",
  },
  {
    user: "Anonymous",
    avatar: "./images/comments__bubble-avatar-4.png",
    comment:
      "I'm going through a grieving process 😔 due to the loss of a family member. I never thought attachment to a person would be this tough. I wish it were easier.",
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
    title: "Darío Silva",
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
    title: "Fabio Hernan",
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
    title: "Bárbara Chen",
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
