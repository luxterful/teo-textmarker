import groups from "./groups";

export default [
  {
    title: "Aufnahme Übereignung ans Tierheim (Tierübereignungsvertrag)",
    groups: [
      groups.animal("Tier"),
      groups.contact("Pfleger", "Pfleger"),
      groups.shelter("Tierheim"),
      groups.admissions_general("Aufnahme allgemein"),
      groups.contact("Halter (ehemaliger)", "Halter"),
    ],
  },
  {
    title: "Entlassung durch Vermittlung (Tiervermittlungs-Schutzvertrag)",
    groups: [
      groups.animal("Tier"),
      groups.contact("Pfleger", "Pfleger"),
      groups.shelter("Tierheim"),
      groups.discharge_general("Entlassung allgemein"),
      groups.discharge_adoption("Entlassung Vermittlung"),
      groups.contact("Halter (neuer)", "Halter"),
      groups.contact("Zahler (neuer)", "Zahler"),
      groups.admissions_general("Aufnahme allgemein"),
      groups.admissions_boarding(
        "Aufnahme Pension (falls vorhanden, sonst leer)"
      ),
      groups.admissions_found(
        "Aufnahme Fundtier (falls vorhanden, sonst leer)"
      ),
      groups.contact("Überbringer", "Ueberbringer"),
    ],
  },
  {
    title: "Aufnahmevertrag Pension (Tierpflegevertrag)",
    groups: [
      groups.animal("Tier"),
      groups.contact("Pfleger", "Pfleger"),
      groups.shelter("Tierheim"),
      groups.admissions_general("Aufnahme allgemein"),
      groups.admissions_boarding("Aufnahme Pension"),
      groups.contact("Halter", "Halter"),
    ],
  },
  {
    title: "Entlassung Pension (Rückgabe Pension)",
    groups: [
      groups.animal("Tier"),
      groups.contact("Pfleger", "Pfleger"),
      groups.shelter("Tierheim"),
      groups.admissions_general("Aufnahme allgemein"),
      groups.admissions_boarding("Aufnahme Pension"),
      groups.contact("Halter", "Halter"),
      groups.discharge_general("Entlassung allgemein"),
      groups.discharge_boarding("Entlassung Pension"),
    ],
  },
  {
    title: "Aufnahmevertrag Fundtier (Fundabgabevertrag)",
    groups: [
      groups.animal("Tier"),
      groups.contact("Pfleger", "Pfleger"),
      groups.shelter("Tierheim"),
      groups.admissions_general("Aufnahme allgemein"),
      groups.admissions_found("Aufnahme Fundtier"),
      groups.contact("Überbringer", "Ueberbringer"),
    ],
  },
  {
    title: "Entlassung Fundtier (Fundrückgabevertrag)",
    groups: [
      groups.animal("Tier"),
      groups.contact("Pfleger", "Pfleger"),
      groups.shelter("Tierheim"),
      groups.admissions_general("Aufnahme allgemein"),
      groups.admissions_found("Aufnahme Fundtier"),
      groups.contact("Überbringer", "Ueberbringer"),
      groups.contact("Zahler", "Zahler"),
      groups.discharge_general("Entlassung allgemein"),
    ],
  },
  {
    title:
      "Aufnahmevertrag Sicherheitsverwahrung (Einweisungsvereinbarung Abgabe durch Behörde)",
    groups: [
      groups.animal("Tier"),
      groups.contact("Pfleger", "Pfleger"),
      groups.shelter("Tierheim"),
      groups.admissions_general("Aufnahme allgemein"),
      groups.contact("Überbringer", "Ueberbringer"),
      groups.contact("Halter", "Halter"),
    ],
  },
  {
    title:
      "Entlassung Sicherheitsverwahrung (Sicherheitsverwahrungsrückgabevertrag)",
    groups: [
      groups.animal("Tier"),
      groups.contact("Pfleger", "Pfleger"),
      groups.shelter("Tierheim"),
      groups.admissions_general("Aufnahme allgemein"),
      groups.contact("Überbringer", "Ueberbringer"),
      groups.contact("Halter", "Halter"),
      groups.contact("Zahler", "Zahler"),
      groups.contact(
        "Nachpruefer (falls vorhanden, sonst leer)",
        "Nachpruefer"
      ),
      groups.discharge_general("Entlassung allgemein"),
      groups.discharge_security_custody("Entlassung Sicherheitsverwahrung"),
    ],
  },
  {
    title: "Tod (Bestätigung Ableben)",
    groups: [
      groups.animal("Tier"),
      groups.contact("Pfleger (falls vorhanden, sonst leer)", "Pfleger"),
      groups.shelter("Tierheim"),
      groups.discharge_general("Entlassung allgemein"),
      groups.admissions_general("Aufnahme allgemein"),
      groups.admissions_boarding(
        "Aufnahme Pension (falls vorhanden, sonst leer)"
      ),
      groups.admissions_found(
        "Aufnahme Fundtier (falls vorhanden, sonst leer)"
      ),
      groups.contact("Halter (falls vorhanden, sonst leer)", "Halter"),

      groups.contact(
        "Ueberbringer (falls vorhanden, sonst leer)",
        "Ueberbringer"
      ),
    ],
  },
];
