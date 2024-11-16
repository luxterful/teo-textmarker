export default {
  discharge_adoption: {
    title: "Entlassung Vermittlung",
    fields: [
      {
        id: "TEXTMARKE_Adoption_Schutzgebuehr",
        title: "Schutzgebühr",
      },
    ],
  },
  discharge_security_custody: {
    title: "Entlassung Sicherheitsverwahrung",
    fields: [
      {
        id: "TEXTMARKE_Sicherheitsverwahrung_Nachpruefdatum",
        title: "Nachprüfedatum",
      },
    ],
  },
  // no special fields
  // discharge_boarding: {
  //  fields: []
  // },
  discharge_general: {
    title: "Entlassung allgemein",
    fields: [
      {
        id: "TEXTMARKE_Entlassungsdatum",
        title: "Entlassungsdatum",
      },
      {
        id: "TEXTMARKE_Entlassungsbemerkungen",
        title: "Entlassungsbemerkungen",
      },
      {
        id: "TEXTMARKE_Bezahlbemerkung",
        title: "Bezahlbemerkung",
        hint: "bei Adoption und Tod leer",
      },
    ],
  },
  admissions_boarding: {
    title: "Aufnahme Pension",
    fields: [
      {
        id: "TEXTMARKE_Pension_Enddatum",
        title: "Enddatum",
      },
      {
        id: "TEXTMARKE_Pension_Gesamtkosten",
        title: "Gesamtkosten",
      },
      {
        id: "TEXTMARKE_Pension_DauerTage",
        title: "Dauer",
      },
    ],
  },
  admissions_found: {
    title: "Aufnahme Fundtier",
    fields: [
      {
        id: "TEXTMARKE_Fundtier_Funddatum",
        title: "Funddatum",
      },
      {
        id: "TEXTMARKE_Fundtier_Ort",
        title: "Fundort",
      },
      {
        id: "TEXTMARKE_Fundtier_Postleitzahl",
        title: "Postleitzahl (Fundort)",
      },
      {
        id: "TEXTMARKE_Fundtier_Gemeinde",
        title: "Gemeinde (Fundort)",
      },
      {
        id: "TEXTMARKE_Fundtier_Kreis",
        title: "Kreis (Fundort)",
      },
      {
        id: "TEXTMARKE_Fundtier_Fundstaette",
        title: "Fundstätte",
      },
    ],
  },
  admissions_general: {
    title: "Aufnahme allgemein",
    fields: [
      {
        id: "TEXTMARKE_Aufnahmeart",
        title: "Aufnahmeart",
        hint: "Übereignung, Fundtier, Pension, Sicherheitsverwahrung",
      },
      {
        id: "TEXTMARKE_Fallnummer",
        title: "Fallnummer",
        hint: "bei Mehrfachaufnahme alle Fallnummern",
      },
      {
        id: "TEXTMARKE_Startdatum",
        title: "Startdatum",
      },
      {
        id: "TEXTMARKE_Uebereignungsdatum",
        title: "Übereignungsdatum",
      },
      {
        id: "TEXTMARKE_Uebereignungsbemerkung",
        title: "Übereignungsbemerkung",
      },
      {
        id: "TEXTMARKE_Aufnahmebemerkung",
        title: "Aufnahmebemerkung",
      },
      {
        id: "TEXTMARKE_Pauschale",
        title: "Pauschale",
        hint: "bei Pension leer",
      },
      {
        id: "TEXTMARKE_Tagessatz",
        title: "Tagessatz",
        hint: "bei Übereignung leer",
      },
    ],
  },
  contact: (key: string, title: string) => ({
    title: title,
    fields: [
      {
        id: `TEXTMARKE_${key}_Nummer`,
        title: "Nummer",
      },
      {
        id: `TEXTMARKE_${key}_Art`,
        title: "Kontaktart",
        hint: "natürliche Person / Unternehmen",
      },
      {
        id: `TEXTMARKE_${key}_Unternehmensname`,
        title: "Name des Unternehmens",
      },
      {
        id: `TEXTMARKE_${key}_Abteilung`,
        title: "Abteilung",
      },
      {
        id: `TEXTMARKE_${key}_Position`,
        title: "Position",
      },
      {
        id: `TEXTMARKE_${key}_Kategorien`,
        title: "Kategorien",
      },
      {
        id: `TEXTMARKE_${key}_Nachname`,
        title: "Nachname",
      },
      {
        id: `TEXTMARKE_${key}_Vorname`,
        title: "Vorname",
      },
      {
        id: `TEXTMARKE_${key}_Geschlecht`,
        title: "Geschlecht",
      },
      {
        id: `TEXTMARKE_${key}_Anrede`,
        title: "Anrede",
      },
      {
        id: `TEXTMARKE_${key}_Titel`,
        title: "Titel",
      },
      {
        id: `TEXTMARKE_${key}_Geburtstag`,
        title: "Geburtstag",
      },
      {
        id: `TEXTMARKE_${key}_Strasse`,
        title: "Straße",
      },
      {
        id: `TEXTMARKE_${key}_Postleitzahl`,
        title: "Postleitzahl",
      },
      {
        id: `TEXTMARKE_${key}_Wohnort`,
        title: "Wohnort",
      },
      {
        id: `TEXTMARKE_${key}_Land`,
        title: "Land",
      },
      {
        id: `TEXTMARKE_${key}_Telefonnummer_1`,
        title: "Telefon",
      },
      {
        id: `TEXTMARKE_${key}_Telefonnummer_2`,
        title: "Telefon 2",
      },
      {
        id: `TEXTMARKE_${key}_Handynummer_1`,
        title: "Handy",
      },
      {
        id: `TEXTMARKE_${key}_Handynummer_2`,
        title: "Handy 2",
      },
      {
        id: `TEXTMARKE_${key}_Email_1`,
        title: "Email",
      },
      {
        id: `TEXTMARKE_${key}_Email_2`,
        title: "Email 2",
      },
      {
        id: `TEXTMARKE_${key}_Faxnummer`,
        title: "Faxnummer",
      },
      {
        id: `TEXTMARKE_${key}_Personalausweisnummer`,
        title: "Personalausweisnummer",
      },
      {
        id: `TEXTMARKE_${key}_Briefanrede`,
        title: "Briefanrede",
      },
      {
        id: `TEXTMARKE_${key}_Postfach_Name`,
        title: "Postfach",
      },
      {
        id: `TEXTMARKE_${key}_Postfach_Postleitzahl`,
        title: "Postfach PLZ",
      },
      {
        id: `TEXTMARKE_${key}_Postfach_Ort`,
        title: "Postfach Ort",
      },
      {
        id: `TEXTMARKE_${key}_Internetauftritt`,
        title: "Internetauftritt",
      },
      {
        id: `TEXTMAKRE_${key}_Warnhinweis`,
        title: "Warnhinweis",
      },
    ],
    custom: [
      {
        id: `TEXTMARKE_${key}_EigendefiniertesFeld1`,
        title: "Eigendefiniertes Feld 1",
      },
    ],
  }),
  shelter: {
    title: "Tierheim",
    fields: [
      {
        id: "TEXTMARKE_Tierheimname",
        title: "Tierheimname",
      },
      {
        id: "TEXTMARKE_Geschaeftsfuehrer",
        title: "Geschäftsführer",
      },
    ],
  },
  animal: {
    title: "Tier",
    fields: [
      {
        id: "TEXTMARKE_Tiernummer",
        title: "Tiernummer",
        hint: "bei Mehrfachaufnahme alle Tiernummern",
      },
      {
        id: "TEXTMARKE_Tiername",
        title: "Tiername",
      },
      {
        id: "TEXTMARKE_Tieranzahl",
        title: "Tieranzahl",
      },
      {
        id: "TEXTMARKE_Tierart",
        title: "Tierart",
      },
      {
        id: "TEXTMARKE_Tierrasse",
        title: "Tierrasse",
      },
      {
        id: "TEXTMARKE_Kastration",
        title: "Kastration",
      },
      {
        id: "TEXTMARKE_Tiergeschlecht",
        title: "Geschlecht",
      },
      {
        id: "TEXTMARKE_Tieralter",
        title: "Alter",
      },
      {
        id: "TEXTMARKE_Tiergeburtstag",
        title: "Geburtstag",
      },
      {
        id: "TEXTMARKE_Tiergeburtsort",
        title: "Tiergeburtsort",
      },
      {
        id: "TEXTMARKE_Tierbemerkungen",
        title: "Tierbemerkungen",
      },
      {
        id: "TEXTMARKE_Tierhoehe",
        title: "Tierhöhe",
      },
      {
        id: "TEXTMARKE_Tierlaenge",
        title: "Tierlänge",
      },
      {
        id: "TEXTMARKE_Tiergewicht",
        title: "Tiergewicht",
      },
      {
        id: "TEXTMARKE_Tierfarbe",
        title: "Tierfarbe",
      },
      {
        id: "TEXTMARKE_Tierkennzeichen",
        title: "Tierkennzeichen",
      },
      {
        id: "TEXTMARKE_Tiersteckbrief",
        title: "Steckbrieftext",
      },
      {
        id: "TEXTMARKE_Unterbringung",
        title: "Unterbringung",
      },
      {
        id: "TEXTMARKE_Tierstatus",
        title: "Tierstatus",
      },
      {
        id: "TEXTMARKE_Sekundaerstatus",
        title: "Sekundärer Tierstatus",
      },
      {
        id: "TEXTMARKE_Tiergroesse",
        title: "Größe",
      },
      {
        id: "TEXTMARKE_Lebensabschnitt",
        title: "Lebensabschnitt",
      },
      {
        id: "TEXTMARKE_Tiereigenschaften",
        title: "Tiereigenschaften",
        hint: "als Liste",
      },
    ],
    custom: [
      {
        id: "TEXTMARKE_EigenesFeld1",
        title: "Eigenes Feld 1",
      },
    ],
  },
};
