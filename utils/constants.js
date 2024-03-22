// Example comments

const comments = [
  {
    user: "Valmiki",
    avatar: "./images/comments__bubble-avatar-1.png",
    comment:
      "I feel like work has been so intense lately, I feel like I'm drowning. I contemplate quiting every day. How can I feel more comfortable with my workload? 🙏",
  },
  {
    user: "Marvin",
    avatar: "./images/comments__bubble-avatar-2.png",
    comment:
      "It's so stressful to have to deal with traffic in the morning. My doctor says I've got high blood pressure and I'm worried about bringing the anger at home to my family. How to cope with my anger?",
  },
  {
    user: "Anonymous",
    avatar: "./images/comments__bubble-avatar-3.png",
    comment:
      "I've been so anxious lately, sometimes I walk in a room and feel like I'm suffocating around people.🤡",
  },
  {
    user: "Anonymous",
    avatar: "./images/comments__bubble-avatar-4.png",
    comment:
      "Life has been so hard since I lost my brother 😔. I miss him everyday, sometimes I feel like I cannot deal with the pain.",
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
    title: "Esteban Hernan",
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
    title: "Anna Oda",
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
