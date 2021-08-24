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
  new Skill("git", 70),
  new Skill("gitHub", 70),
  new Skill("javascript", 70),
  new Skill("ecmascript", 50),
  new Skill("css", 70),
  new Skill("responsive design", 50),
  new Skill("html", 70),
  new Skill("mysql", 70),
  new Skill("photoshop", 50),
  new Skill("Wordpress", 70),
];

const OutilsDeveloppement = [
  new Skill("VS Code", 90),
  new Skill("Visual Studio", 90),
  new Skill("IntelliJ", 90),
  new Skill("Eclipse", 90),
  new Skill("NetBeans", 60),
  new Skill("VMWare", 60),
  new Skill("Notepad ++", 80),
  new Skill("CodeBlocks", 50),
  new Skill("OpenModelSphere", 50),
  new Skill("Microsoft SQL Management Studio ", 80),
  new Skill("Visual Paradigm", 60),
  new Skill("SAP", 50),
  new Skill("Pycharm", 60),
  new Skill("Windows XP/7/10", 100),
  new Skill("Linux", 60),
  new Skill("Windows Server", 50),
  new Skill("MS Office ", 80),
];

const mySkills = new Map();
mySkills.set("professionalSkills", ProfessionalSkills);
mySkills.set("personalSkills", PersonalSkills);
mySkills.set("outilsDevellopement", OutilsDeveloppement);

export default mySkills;
