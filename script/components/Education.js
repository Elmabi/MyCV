class Education {
  constructor(diplome, year, description) {
    this.diplome = diplome;
    this.year = year;
    this.description = description;
  }
}

const educations = [
  new Education(
    "AEC PROGRAMMATION ORIENTÉ OBJET ET TECHNOLOGIE WEB",
    "10.2020 - 12.2021",
    "Collège de Rosemont - Montréal"
  ),
  new Education(
    "LICENCE EN INFORMATIQUE APPLIQUÉE",
    "09.2017 - 07.2020",
    "Université technique des sciences appliquées - Allemagne/Lemgo"
  ),
  new Education(
    "LICENCE EN MARKETING OPERATIONNEL",
    "09.2012 - 03.2014",
    "Université de Douala - Cameroun"
  ),
  new Education(
    "BTS en Action Commerciale",
    "09.2010 - 09.2012",
    "Institut Supérieurs Professeurs Réunis - Cameroun"
  ),
];

export default educations;
