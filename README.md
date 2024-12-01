# Personal Portfolio Website

## 📝 Summary

This project is a personal portfolio website designed to showcase my **education**, **work experience**, and **projects** in an engaging and interactive manner. It features a responsive design, dynamic content loading, and interactive visual elements like a rotating logo and smooth scrolling.

---

## ✨ Key Features

- **Dynamic CV Section**  
  - Education and work experience data are loaded dynamically from a JSON file, allowing for easy updates.

- **Smooth Scrolling and Logo Animation**  
  - Smooth navigation between sections with a rotating logo that enhances user interaction.

- **Responsive Design**  
  - Fully optimized for desktop, tablet, and mobile devices.

- **Interactive Modal**  
  - Displays CV documents (images and PDFs) with navigational controls.

- **Custom Contact Form**  
  - A popup form for users to send messages.

---

## ✅ Strengths

- **Scalability**: Dynamic content loading allows for easy updates without altering the code structure.
- **Engaging Design**: Inspired by mid-century modern aesthetics, the design blends simplicity with functionality.
- **Interactive Features**: Smooth scrolling, modal navigation, and dynamic content improve the user experience.
- **Error Handling**: User-friendly error messages are displayed for JSON fetch failures, ensuring a better user experience during unexpected issues.

---

## ❌ Weaknesses

- **Performance**: The continuous logo rotation and smooth scrolling logic might affect performance on low-end devices.
- **Accessibility**: Some focus trapping and ARIA attributes could improve the site’s inclusivity.

---

## 🛠️ Technologies Used

- **HTML**: Semantic structure for accessibility and SEO.
- **CSS**: Custom styling for a responsive and visually appealing design.
- **JavaScript**: Dynamic data loading, smooth scrolling, and modal functionality.
- **JSON**: Lightweight data format for education and work experience.

---

Svaren på de teoretiska frågorna

1. Vad kan man utveckla med hjälp av JavaScript inom frontend?
   
JavaScript är ett kraftfullt verktyg för att skapa interaktiva och moderna webbplatser. Med hjälp av JavaScript kan man bygga allt från enkla funktioner som dropdown-menyer och bildkaruseller till mer avancerade lösningar som realtidsuppdateringar och dynamiska användargränssnitt. Formulär kan valideras direkt i webbläsaren för att säkerställa att användaren fyller i korrekt information innan den skickas till servern, vilket förbättrar användarupplevelsen.

Ett annat område där JavaScript är centralt är datahantering. Det kan användas för att hämta och visa data från API:er, till exempel väderprognoser eller användarinformation. Genom att kombinera JavaScript med teknologier som Canvas eller SVG kan man också skapa avancerade visualiseringar, som grafer och diagram. I realtidsapplikationer, som chatt-appar eller live-notifikationer, används tekniker som WebSockets för att uppdatera sidan utan att användaren behöver ladda om den. Möjligheterna med JavaScript inom frontend är nästan oändliga och används i allt från enkla hemsidor till stora webbapplikationer.

2. Vad är JSON och hur används det inom frontend?

JSON (JavaScript Object Notation) är ett lätt och smidigt format för att överföra data mellan olika system. Det är enkelt att läsa och skriva både för människor och datorer, vilket gör det till en standard för många webbtjänster och API:er.

Inom frontend används JSON ofta för att hämta data från en server och visa det på en webbsida. Till exempel kan utbildningshistorik och arbetslivserfarenhet sparas i en JSON-fil, som sedan laddas och visas i olika delar av sidan. Detta gör det enkelt att ändra eller uppdatera innehåll utan att behöva ändra koden direkt i HTML.

JSON används också för att lagra användarinställningar lokalt i webbläsaren med hjälp av localStorage eller sessionStorage. Detta kan anpassa användarupplevelsen genom att spara preferenser, som tema eller språkval.

3. Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det?

HTTP (HyperText Transfer Protocol) är grunden för hur data överförs mellan webbläsare och server på webben. Det är viktigt för frontendutvecklare att förstå hur HTTP fungerar, eftersom mycket av det dagliga arbetet handlar om att kommunicera med servrar.

Med HTTP kan man hämta data från en API-tjänst med metoder som GET eller skicka data med POST. Att känna till statuskoder, som 404 (sidan hittas inte) eller 500 (serverfel), hjälper till att snabbt identifiera och lösa problem.

Kunskap om HTTP bidrar också till att förbättra prestanda genom att använda tekniker som caching, vilket gör att webbsidor laddas snabbare. HTTPS, som är en säker version av HTTP, är särskilt viktig för att skydda användardata och kryptera kommunikationen mellan klient och server.

I detta projekt används HTTP för att hämta en JSON-fil med data som sedan visas dynamiskt i användargränssnittet.
