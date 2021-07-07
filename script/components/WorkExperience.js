class WorkExperience {
  constructor(employee, job, description, link) {
    this.employee = employee;
    this.job = job;
    this.description = description;
    this.link = link;
  }
}

let descriptionPerlease = [
  "Prospection et ﬁdélisation de nouveaux clients potentiels. ",
  "Analyser et comprendre les problèmes ou les besoins des clients et leur proposer une solution adaptée.",
  "Promouvoir l'offre de services de l'entreprise. ",
  "Participer aux actions de mailing et au suivi des collaborateurs chez les clients. ",
  "Accompagner les clients jusqu'aux service souhaités et répondre à leurs questions sur les différents problèmes rencontrés. ",
  "Être toujours au courant des dernières tendances, aﬁn de pouvoir conseiller parfaitement les clients.",
];

let descriptionBlackFashion = [
  "Créer des aﬃches et photos avec Adobe Photoshop pour le site web de l'entreprise. ",
  "Mise en ligne de nouveaux contenus à travers Wordpress.",
  "Ajouter de nouvelles fonctionnalités à travers des plugins. ",
  "Assistance à la maintenance du site web de l'entreprise. ",
  "Détection et correction des problèmes du site. ",
];

let descriptionNumelec = [
  "Veiller à la bonne marche du système d’information et à sa sécurité. ",
  "Réalisation d'interventions techniques et maintenance du matériel informatique.",
  "Elaborer les rapports, manuels et autres documentations sur l'état, l'exploitation et l'entretien des logiciels. ",
  "Recherche de nouveaux clients susceptibles de bénéﬁcier des produits ou services de l'entreprise et optimisation du potentiel de clients dans les régions désignées. ",
  "Travailler sur les services d'assistance après-vente et fournir un soutien technique si nécessaire parfois à travers des appels téléphoniques et/ou courriels. ",
  "Prise en main de l'encadrement des nouveaux commerciaux suite à un manque d'intégration de ceux-ci.",
  "Etablir des oﬀres et des documents commerciaux de présentation des produits de l'entreprise",
];

const workExperiences = [
  new WorkExperience(
    "BF BEAUTY SERVICES",
    "Développeur-WordPress Junior",
    descriptionBlackFashion.join(" "),
    "https://bfbeautyservices.com/"
  ),
  new WorkExperience(
    "PERLEASE",
    "Représentant des ventes",
    descriptionPerlease.join(" "),
    "https://www.perlease.de/"
  ),
  new WorkExperience(
    "NUMELEC-CAMEROUN",
    "Représentant Technico-Commercial",
    descriptionNumelec.join(" "),
    "https://www.numelec.com/"
  ),
];

export default workExperiences;
