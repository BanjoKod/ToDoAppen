https://teams.microsoft.com/l/meetingrecap?driveId=b%21kTCIWUyaIEeof2mfgeKCM-EAmquQgQtFpLYEdzCT6g8iasw_Q5FWTbADlsV3gRoO&driveItemId=01BNRDC5RG7X2B7KYPJJCZVCTV6VVQOZW7&sitePath=https%3A%2F%2Ffunet-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2F3ggyhmu26_hogmad_folkuniversitetet_nu%2FIQAm_fQfqw9KRZqKdfVrB2bfAe4UpL-YNFG3_ql1X5sfiy4&fileUrl=https%3A%2F%2Ffunet-my.sharepoint.com%2Fpersonal%2F3ggyhmu26_hogmad_folkuniversitetet_nu%2FDocuments%2FInspelningar%2FMeeting+with+Adam+H%C3%B6gman+MU26-20261009_172506-Meeting+Recording.mp4%3Fweb%3D1&threadId=19%3Ameeting_OTFlOWFlY2QtMzM5Mi00ZmEzLTg2NjItYTcwNmI5NjUxMGYx%40thread.v2&organizerId=e22bbc1b-0521-42c4-9fbf-3f85e388df65&tenantId=a4d3b9bf-2082-4eee-ab79-fd407faef1e5&callId=b3cf86a6-9fa8-455b-ac42-7648337d8df0&threadType=Meeting&meetingType=MeetNow&subType=RecapSharingLink_RecapCore&recapType=Recording

Skriv i README.md
Besvara följande delar kort med egna ord i ditt repo:

1. Frågor om koden (ca 2–4 meningar per fråga)
    1.1 State-hantering: Hur håller din app reda på vilka uppgifter som finns och om de är klara? Vad händer med gränssnittet när datan uppdateras?
        -  via useState lagrar appen informationen om vad som finns angivet samt uppdaterar detta baserat på vad jag klickar på, t.ex. när jag bockar i rutan för "klar" via webbläsaren.

    1.2 Oföränderlighet (Immutability): Varför får man inte ändra en befintlig array direkt med t.ex. .push() i React? Hur gör du istället när du lägger till eller tar bort en uppgift?
        - Eftersom react behöver kunna se vad som ändras för att kunna uppdatera det, använder man "push" så ändras det som finns direkt utan att lösa in tidigare informationen.


2. Kodgranskning
    Nedan är en funktion från en annan utvecklares lösning. Klistra inte in den i din app, utan förklara i din README vad som är felaktigt med koden i ett React-sammanhang och hur du skulle skriva om den för att den ska bli korrekt:
        - Den sektionen ändrar direkt vad som finns i den redan angivna arrayen och i react bör man undvika detta då det skapar mer problem än nödvändigt. Den ändrar det som fanns från början och gör pga det svårt att felsöka.

function addTodo(todos, text) {
  todos.push(text);
  return todos;
}
🔗 Koddetektiven - Läs denna innan du gör din kodgranskning.


3. Problemlösning & Reflektion (3–5 meningar)
    Hur gjorde du när du körde fast eller stötte på ett problem? Om du använde verktyg som AI, Google eller React-dokumentationen: ge ett konkret exempel på hur du tog hjälp för att förstå och lösa problemet själv.
        - Vad jag gör/ har gjort är att först stirra mig blind på själva koden och leta efter rader där jag skrivit , istället för ; eller () istället för [] eller motsvarande. Hittar jag inte dessa så har jag dels försökt leta rätt via inspektera och som sista utväg klistrat in koden i AI och bett om hjälp att se VAR bland alla tecken det blev fel. 9/10 gånger är det ett minimalt stavfel eller fel tecken som orsakar att det inte fungerar. 

        Är det rakt av fel i koden så ber jag om en förklaring till varför man inte ska skriva så som jag gjorde så att jag förstår och kan göra rätt i framtida koder.