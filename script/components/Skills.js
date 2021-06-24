class Skill {
  constructor(intitule, weight) {
    this.intitule = intitule;
    this.weight = weight;
  }
}

const PersonalSkills = [
  new Skill("communication", 90),
  new Skill("collaboration", 90),
  new Skill("créativité", 70),
  new Skill("sens de l'organisation", 90),
  new Skill("débrouillard", 90),
  new Skill("français", 90),
  new Skill("anglais", 70),
  new Skill("allemand", 70),
];

const ProfessionalSkills = [
  new Skill("java", 80),
  new Skill(".net", 70),
  new Skill("c++", 50),
  new Skill("javascript", 70),
  new Skill("ecmascript", 50),
  new Skill("css", 70),
  new Skill("responsive design", 50),
  new Skill("html", 70),
  new Skill("mysql", 70),
  new Skill("photoshop", 50),
  new Skill("Wordpress", 70),
];

const mySkills = new Map();
mySkills.set("professionalSkills", ProfessionalSkills);
mySkills.set("personalSkills", PersonalSkills);

export default mySkills;
