var foerderike_steps = [
    {   "id": "hallo", 
        "fragetyp": "auswahl_single",
        "text": "Hallo, ich bin Förderike. Ich möchte Ihnen helfen, den von Ihnen benötigte Kredit schnellstmöglich zur Auszahlung zu bringen. Es ist sinnvoll, dass Sie bereits vor dem Termin mit Ihrer Bank einen Großteil der relevanten Dokumente zusammenstellen. Soll ich Ihnen bei der Identifikation der wesentlichen Unterlagen für Ihren Kreditantrag behilflich sein und Ihnen die nächsten Schritte auf dem Weg zu Ihrem Förderkredit erläutern?",
        "mögliche antworten": ["Ich bin bereit.", "Ich habe kein Interesse."],
        "weiter zu": {"Ich bin bereit.": "legal", "Ich habe kein Interesse.": "exit"},
    },
        
        
        {"id": "exit",
        "fragetyp": "info",
        "text": "Sollten Sie doch meine Unterstützung brauchen, können Sie gerne zurück kommen.",
        "mögliche antworten": ["zurück zu wir-bleiben-liqui.de"]},
        
        
        {"id": "legal",
        "fragetyp": "auswahl_single",
        "text": "Ist Ihr Unternehmen eine Personen- oder Kapitalgesellschaft?",
        "hinweis": "Sie sind eine Kapitalgesellschaft, wenn Sie die Rechtsform einer GmbH, UG, AG oder KGaA innehaben.Andernfalls sind Sie den Personengesellschaften zuzuordnen.",
        "mögliche antworten": ["Kapitalgesellschaft", "Personengesellschaft"],
        "weiter zu": {"Kapitalgesellschaft": "documents_corporation", "Personengesellschaft": "documents_partnership"}},
        
        
        {"id": "documents_corporation",
        "fragetyp": "auswahl_multiple",
        "text": "Anbei finden Sie eine Liste wichtiger Dokumente, die für die Beantragung eines Darlehens über Ihre Bank vorbereitet werden sollten. Welche dieser Dokumente liegen Ihnen bereits vor? ",
        "mögliche antworten": ["Aktuellster Jahresabschluss", "BWA des letzten Geschäftsjahres (inkl. abgestimmter Summen- und Saldenliste)", "BWA des aktuellen Geschäftsjahres", "Handelsregisterauszug", "Gesellschafterliste", "Selbstauskunft der geschäftsführenden Gesellschafter", "Maßnahmenplan", "Liquiditätsplanung"],
        "weiter zu": "wer_macht_was_buchhaltung"
        },
        
        
        {"id": "documents_partnership",
        "fragetyp": "auswahl_multiple",
        "text": "Anbei finden Sie eine Liste wichtiger Dokumente, die für die Beantragung eines Darlehens über Ihre Bank vorbereitet werden sollten. Welche dieser Dokumente liegen Ihnen bereits vor? ",
        "mögliche antworten": ["Aktuellster Jahresabschluss", "BWA des letzten Geschäftsjahres (inkl. abgestimmter Summen- und Saldenliste)", "BWA des aktuellen Geschäftsjahres", "Gesellschafterliste", "Selbstauskunft der geschäftsführenden Gesellschafter", "Maßnahmenplan", "Liquiditätsplanung", "Letzter vorhandener Steuerbescheid und -erklärung", "Entnahmenliste", "Entnahmeplanung"],
        "weiter zu": "wer_macht_was_buchhaltung"
    },
];