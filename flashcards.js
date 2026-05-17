// ============================================
// FLASHCARDS - Lecția 8: In Annettes Klasse (Plural)
// Claudia Toth · A1.1 · 32 carduri
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === 6 sistemul articolelor la plural ===
    { de: "die (Plural)", ro: "UN singur articol hotărât la plural · der/die/das devin toate die", audio: "audio/letters/art-die-plural.wav" },
    { de: "Ø Nullartikel", ro: "la plural NU există ein/eine · articol zero (niște)", audio: "audio/letters/nullartikel.wav" },
    { de: "keine (Plural)", ro: "negația la plural · Das sind keine Tische", audio: "audio/letters/art-keine.wav" },
    { de: "der Mann · die Männer", ro: "bărbatul → bărbații · der devine die + Umlaut", audio: "audio/letters/mann-maenner.wav" },
    { de: "die Frau · die Frauen", ro: "femeia → femeile · feminin -en", audio: "audio/letters/frau-frauen.wav" },
    { de: "das Kind · die Kinder", ro: "copilul → copiii · neutru -er", audio: "audio/letters/kind-kinder.wav" },

    // === 5 tiparul -e (masculin 1 silabă) ===
    { de: "der Tisch · die Tische", ro: "masa → mesele · masculin -e", audio: "audio/letters/tisch-tische.wav" },
    { de: "der Hund · die Hunde", ro: "câinele → câinii · masculin -e", audio: "audio/letters/hund-hunde.wav" },
    { de: "der Stuhl · die Stühle", ro: "scaunul → scaunele · -e + Umlaut (u devine ü)", audio: "audio/letters/stuhl-stuehle.wav" },
    { de: "der Ball · die Bälle", ro: "mingea → mingile · -e + Umlaut (a devine ä)", audio: "audio/letters/ball-baelle.wav" },
    { de: "der Arm · die Arme", ro: "brațul → brațele · masculin -e", audio: "audio/letters/arm-arme.wav" },

    // === 5 tiparul -er (neutru 1 silabă) ===
    { de: "das Buch · die Bücher", ro: "cartea → cărțile · neutru -er + Umlaut", audio: "audio/letters/buch-buecher.wav" },
    { de: "das Haus · die Häuser", ro: "casa → casele · neutru -er + Umlaut", audio: "audio/letters/haus-haeuser.wav" },
    { de: "das Bild · die Bilder", ro: "imaginea → imaginile · neutru -er", audio: "audio/letters/bild-bilder.wav" },
    { de: "das Ei · die Eier", ro: "oul → ouăle · neutru -er", audio: "audio/letters/ei-eier.wav" },
    { de: "das Licht · die Lichter", ro: "lumina → luminile · neutru -er", audio: "audio/letters/licht-lichter.wav" },

    // === 6 tiparul -(e)n (feminine — cel mai sigur) ===
    { de: "die Lampe · die Lampen", ro: "lampa → lămpile · feminin -n (fără Umlaut)", audio: "audio/letters/lampe-lampen.wav" },
    { de: "die Uhr · die Uhren", ro: "ceasul → ceasurile · feminin -en", audio: "audio/letters/uhr-uhren.wav" },
    { de: "die Tafel · die Tafeln", ro: "tabla → tablele · feminin -n", audio: "audio/letters/tafel-tafeln.wav" },
    { de: "die Schwester · die Schwestern", ro: "sora → surorile · feminin -n", audio: "audio/letters/schwester-schwestern.wav" },
    { de: "die Tür · die Türen", ro: "ușa → ușile · feminin -en", audio: "audio/letters/tuer-tueren.wav" },
    { de: "die Schere · die Scheren", ro: "foarfeca → foarfecile · feminin -n", audio: "audio/letters/schere-scheren.wav" },

    // === 4 tiparul -s (cuvinte străine) ===
    { de: "das Auto · die Autos", ro: "mașina → mașinile · -s (cuvânt străin)", audio: "audio/letters/auto-autos.wav" },
    { de: "das Foto · die Fotos", ro: "fotografia → fotografiile · -s", audio: "audio/letters/foto-fotos.wav" },
    { de: "das Sofa · die Sofas", ro: "canapeaua → canapelele · -s", audio: "audio/letters/sofa-sofas.wav" },
    { de: "das Handy · die Handys", ro: "telefonul → telefoanele · -s (final -y)", audio: "audio/letters/handy-handys.wav" },

    // === 3 tiparul -Ø (masc/neutru în -el/-er/-en) ===
    { de: "der Lehrer · die Lehrer", ro: "profesorul → profesorii · -Ø (formă identică!)", audio: "audio/letters/lehrer-lehrer.wav" },
    { de: "das Fenster · die Fenster", ro: "fereastra → ferestrele · -Ø (formă identică!)", audio: "audio/letters/fenster-fenster.wav" },
    { de: "der Vater · die Väter", ro: "tatăl → tații · -Ø + doar Umlaut", audio: "audio/letters/vater-vaeter.wav" },

    // === 3 capcane ===
    { de: "die Lehrerin · die Lehrerinnen", ro: "CAPCANĂ: -in devine -innen (dublezi n!)", audio: "audio/letters/lehrerin-lehrerinnen.wav" },
    { de: "der Apfel · die Äpfel", ro: "mărul → merele · -Ø + Umlaut (a devine ä)", audio: "audio/letters/apfel-aepfel.wav" },
    { de: "die Mutter · die Mütter", ro: "mama → mamele · -Ø + Umlaut (familia, recap L7)", audio: "audio/letters/mutter-muetter.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (6 sistemul articolelor · 5 tipar -e · 5 tipar -er · 6 tipar -(e)n · 4 tipar -s · 3 tipar -Ø · 3 capcane).<br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru a auzi pronunția germană (singular + plural).
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

buildFlashcards();
