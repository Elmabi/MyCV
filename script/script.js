import Data from "./components/Data.js";
import mySkills from "./components/Skills.js";
import WorkExperience from "./components/WorkExperience.js";
import Education from "./components/Education.js";

const contentNoLink = (image, title, description) => `
    <img class="logo" src=${image} alt="">
    <span class="bold">${title}</span>
    <span> ${description}</span>
`;

const contentWithLink = (image, title, description) => `
    <img class="logo" src=${image} alt="">
    <span class="bold">${title}</span>
    <a href="https://${description}" target="_blank"> ${description}</a>
`;

const mesInformations = Data.map((info) => {
  let li = document.createElement("li");
  li.classList.add("margin-bottom");
  if (
    info.title !== "WEB-SITE: " &&
    info.title !== "LINKEDIN: " &&
    info.title !== "GITHUB: "
  ) {
    li.innerHTML = contentNoLink(info.image, info.title, info.description);
    return li;
  }

  li.innerHTML = contentWithLink(info.image, info.title, info.description);
  return li;
});

const conteneurInformation = document.querySelector(
  ".content-left .informations"
);
mesInformations.forEach((info) => conteneurInformation.append(info));

// COMPETENCES PERSONNELLES
const conteneurPersonalSkills = document.querySelector(
  ".content-left .personal-skills"
);

const contentPersonalSkills = (intitule, width) => `
<span class="personal-skills-title"> ${intitule} </span>
<div class="skillbar-container">
    <div class="skillbar" style="width: ${width}%; border-radius: 15px;">100</div>
</div>
`;

mySkills.get("personalSkills").forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("margin-bottom");
  div.innerHTML = contentPersonalSkills(item.intitule, item.weight);
  conteneurPersonalSkills.append(div);
});

// EXPERIENCE PROFESSIONEL

const contentWorkExperience = (employe, job, description, link) => `
<li>
  <a class="bold" href=${link} target="_blank"> ${employe}</a>
  <span style="color: #414141;"> / ${job}</span>
</li>
<p>${description}</p>
`;
WorkExperience.forEach((item) => {
  const conteneurWorkExperience = document.createElement("ul");
  conteneurWorkExperience.classList.add("work-experience-title");
  conteneurWorkExperience.innerHTML = contentWorkExperience(
    item.employee,
    item.job,
    item.description,
    item.link
  );

  document.querySelector(".work-experience").append(conteneurWorkExperience);
});

// COMPETENCES PROFESSIONNELLES
const conteneurProfessionalSkills = document.querySelector(
  ".content-professional-skills"
);

const contentProfessionalSkills = (intitule, width) => `
<span class="personal-skills-title"> ${intitule} </span>
<div class="skillbar-container">
    <div class="skillbar" style="width: ${width}%; border-radius: 15px;">100</div>
</div>
`;

mySkills.get("professionalSkills").forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("margin-bottom");
  div.innerHTML = contentProfessionalSkills(item.intitule, item.weight);
  conteneurProfessionalSkills.append(div);
});

// OUTILS DEVELLOPEMENT
const conteneurOutilsDev = document.querySelector(".content-dev-tools");

const contentOutilsDev = (intitule, width) => `
<span class="personal-skills-title"> ${intitule} </span>
<div class="skillbar-container">
    <div class="skillbar" style="width: ${width}%; border-radius: 15px;">100</div>
</div>
`;

mySkills.get("outilsDevellopement").forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("margin-bottom");
  div.innerHTML = contentOutilsDev(item.intitule, item.weight);
  conteneurOutilsDev.append(div);
});

// EDUCATION

const contentEducation = (diplome, year, description) => `
<li>
  <span class="bold""> ${diplome}</span>
  <span style="color: #414141;"> / ${year}</span>
</li>
<p>${description}</p>
`;

Education.forEach((item) => {
  const conteneurEducation = document.createElement("ul");
  conteneurEducation.classList.add("work-experience-title");
  conteneurEducation.innerHTML = contentEducation(
    item.diplome,
    item.year,
    item.description
  );

  document.querySelector(".education").append(conteneurEducation);
});

//Button Scroll - up
let btnScrollUp = document.querySelector(".btn_scroll_up");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    btnScrollUp.style.display = "block";
  } else {
    btnScrollUp.style.display = "none";
  }
});
btnScrollUp.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
