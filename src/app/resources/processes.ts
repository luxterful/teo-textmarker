import groups from "./groups";

export default [
  {
    title: "Aufnahme Übereignung ans Tierheim (Tierübereignungsvertrag)",
    groups: [
      groups.animal,
      groups.contact("Pfleger", "Pfleger"),
      groups.shelter,
      groups.admissions_general,
      groups.contact("Halter", "Halter (ehemaliger)"),
    ],
  },
  {
    title: "Entlassung durch Vermittlung (Tiervermittlungs-Schutzvertrag)",
    groups: [
      groups.contact("Pfleger", "Pfleger"),
      groups.animal,

      groups.shelter,
      groups.discharge_general,
      groups.contact("Halter", "Halter (neuer)"),
    ],
  },
];
