// ============================================
// EXERCIȚII - Lecția 8: In Annettes Klasse (Plural)
// Claudia Toth · A1.1 · 5 exerciții (toate text inputs)
// Sursă DF: 19 (Artikel im Plural), 20 (Pluralbildung), 21 (Übung)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// ============================================
// EX 1: Articolul la plural (die / Ø / keine)
// ============================================
const ex1Data = [
    { id: 'a', sentence: '____ Kinder spielen. (articol hotărât plural)', translation: 'Copiii se joacă.', correct: 'die', accept: ['die'] },
    { id: 'b', sentence: '____ Frauen heißen Andreea und Carolina. (hotărât plural)', translation: 'Femeile se numesc Andreea și Carolina.', correct: 'die', accept: ['die'] },
    { id: 'c', sentence: 'Das sind ____ Tische. (negație plural)', translation: 'Acestea nu sunt mese.', correct: 'keine', accept: ['keine'] },
    { id: 'd', sentence: 'Das sind ____ Bücher. (negație plural)', translation: 'Acestea nu sunt cărți.', correct: 'keine', accept: ['keine'] },
    { id: 'e', sentence: '____ Männer trinken Kaffee. (hotărât plural)', translation: 'Bărbații beau cafea.', correct: 'die', accept: ['die'] },
    { id: 'f', sentence: 'Das sind ____ Lampen. (negație plural)', translation: 'Acestea nu sunt lămpi.', correct: 'keine', accept: ['keine'] },
    { id: 'g', sentence: '____ Lehrerinnen arbeiten viel. (hotărât plural)', translation: 'Profesoarele lucrează mult.', correct: 'die', accept: ['die'] },
    { id: 'h', sentence: 'Das sind ____ Stühle. (negație plural)', translation: 'Acestea nu sunt scaune.', correct: 'keine', accept: ['keine'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🎉 Completează articolul la plural: die sau keine?</strong><br>
            Articol hotărât plural = <strong>die</strong> (toate genurile). Negație plural = <strong>keine</strong>.<br>
            <em>💡 La plural NU există ein/eine — articolul nehotărât e Ø (Nullartikel).</em>
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex1-${item.id}" placeholder="die / keine">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Plural feminin -(e)n (regula cea mai sigură)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'die Lampe → die ____', translation: 'lampa → lămpile', correct: 'Lampen', accept: ['lampen'] },
    { id: 'b', sentence: 'die Frau → die ____', translation: 'femeia → femeile', correct: 'Frauen', accept: ['frauen'] },
    { id: 'c', sentence: 'die Uhr → die ____', translation: 'ceasul → ceasurile', correct: 'Uhren', accept: ['uhren'] },
    { id: 'd', sentence: 'die Tafel → die ____', translation: 'tabla → tablele', correct: 'Tafeln', accept: ['tafeln'] },
    { id: 'e', sentence: 'die Schwester → die ____', translation: 'sora → surorile', correct: 'Schwestern', accept: ['schwestern'] },
    { id: 'f', sentence: 'die Schere → die ____', translation: 'foarfeca → foarfecile', correct: 'Scheren', accept: ['scheren'] },
    { id: 'g', sentence: 'die Tür → die ____', translation: 'ușa → ușile', correct: 'Türen', accept: ['türen', 'tueren'] },
    { id: 'h', sentence: 'die Katze → die ____', translation: 'pisica → pisicile', correct: 'Katzen', accept: ['katzen'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💎 Formează pluralul substantivelor feminine (tiparul -(e)n).</strong><br>
            Regula cea mai sigură: aproape toate femininele primesc <strong>-n</strong> sau <strong>-en</strong>. ZERO Umlaut aici!<br>
            <em>💡 Termină în -e → adaugi -n (Lampe → Lampen). Altfel → -en (Frau → Frauen).</em>
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex2-${item.id}" placeholder="forma de plural...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Plural masculin -e / neutru -er (+ Umlaut)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'der Tisch → die ____ (masc. -e)', translation: 'masa → mesele', correct: 'Tische', accept: ['tische'] },
    { id: 'b', sentence: 'der Hund → die ____ (masc. -e)', translation: 'câinele → câinii', correct: 'Hunde', accept: ['hunde'] },
    { id: 'c', sentence: 'der Stuhl → die ____ (masc. -e + Umlaut!)', translation: 'scaunul → scaunele', correct: 'Stühle', accept: ['stühle', 'stuehle'] },
    { id: 'd', sentence: 'der Ball → die ____ (masc. -e + Umlaut!)', translation: 'mingea → mingile', correct: 'Bälle', accept: ['bälle', 'baelle'] },
    { id: 'e', sentence: 'das Kind → die ____ (neutru -er)', translation: 'copilul → copiii', correct: 'Kinder', accept: ['kinder'] },
    { id: 'f', sentence: 'das Bild → die ____ (neutru -er)', translation: 'imaginea → imaginile', correct: 'Bilder', accept: ['bilder'] },
    { id: 'g', sentence: 'das Buch → die ____ (neutru -er + Umlaut!)', translation: 'cartea → cărțile', correct: 'Bücher', accept: ['bücher', 'buecher'] },
    { id: 'h', sentence: 'das Haus → die ____ (neutru -er + Umlaut!)', translation: 'casa → casele', correct: 'Häuser', accept: ['häuser', 'haeuser'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📊 Formează pluralul: masculin de 1 silabă → -e · neutru de 1 silabă → -er.</strong><br>
            Atenție la <strong>Umlaut</strong> (a→ä, o→ö, u→ü) acolo unde e marcat!<br>
            <em>💡 der Stuhl → die Stühle (u devine ü) · das Buch → die Bücher (u devine ü).</em>
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="forma de plural...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Schulsachen — pluralul obiectelor din clasă (fișa 21)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'der Stift → die ____', translation: 'creionul → creioanele', correct: 'Stifte', accept: ['stifte'] },
    { id: 'b', sentence: 'der Kugelschreiber → die ____ (în -er → -Ø!)', translation: 'pixul → pixurile', correct: 'Kugelschreiber', accept: ['kugelschreiber'] },
    { id: 'c', sentence: 'das Heft → die ____', translation: 'caietul → caietele', correct: 'Hefte', accept: ['hefte'] },
    { id: 'd', sentence: 'das Lineal → die ____', translation: 'rigla → riglele', correct: 'Lineale', accept: ['lineale'] },
    { id: 'e', sentence: 'der Anspitzer → die ____ (în -er → -Ø!)', translation: 'ascuțitoarea → ascuțitorile', correct: 'Anspitzer', accept: ['anspitzer'] },
    { id: 'f', sentence: 'die Federmappe → die ____', translation: 'penarul → penarele', correct: 'Federmappen', accept: ['federmappen'] },
    { id: 'g', sentence: 'das Buch → die ____ (+ Umlaut!)', translation: 'cartea → cărțile', correct: 'Bücher', accept: ['bücher', 'buecher'] },
    { id: 'h', sentence: 'die Lampe → die ____', translation: 'lampa → lămpile', correct: 'Lampen', accept: ['lampen'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🎒 Pluralul obiectelor din clasa Annettei (Schulsachen).</strong><br>
            Aplică cele 5 tipare. Atenție: cuvintele în <strong>-er</strong> (Kugelschreiber, Anspitzer) NU primesc terminație (tipar -Ø)!<br>
            <em>💡 der Kugelschreiber → die Kugelschreiber (la fel) · das Buch → die Bücher (+ Umlaut).</em>
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="forma de plural...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Negație la plural + capcana -in → -innen
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Sind das Bücher? — Nein, das sind ____ Bücher. (negație plural)', translation: 'Sunt cărți? — Nu, nu sunt cărți.', correct: 'keine', accept: ['keine'] },
    { id: 'b', sentence: 'Sind das Tische? — Nein, das sind ____ Tische.', translation: 'Sunt mese? — Nu, nu sunt mese.', correct: 'keine', accept: ['keine'] },
    { id: 'c', sentence: 'die Lehrerin → die ____ (capcană: dublezi n!)', translation: 'profesoara → profesoarele', correct: 'Lehrerinnen', accept: ['lehrerinnen'] },
    { id: 'd', sentence: 'die Studentin → die ____ (capcană: dublezi n!)', translation: 'studenta → studentele', correct: 'Studentinnen', accept: ['studentinnen'] },
    { id: 'e', sentence: 'Sind das Lampen? — Nein, das sind ____ Lampen.', translation: 'Sunt lămpi? — Nu, nu sunt lămpi.', correct: 'keine', accept: ['keine'] },
    { id: 'f', sentence: 'die Köchin → die ____ (capcană: dublezi n!)', translation: 'bucătăreasa → bucătăresele', correct: 'Köchinnen', accept: ['köchinnen', 'koechinnen'] },
    { id: 'g', sentence: 'der Vater → die ____ (doar Umlaut, fără terminație!)', translation: 'tatăl → tații', correct: 'Väter', accept: ['väter', 'vaeter'] },
    { id: 'h', sentence: 'das Auto → die ____ (cuvânt străin → -s)', translation: 'mașina → mașinile', correct: 'Autos', accept: ['autos'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🚨 Negație la plural (keine) + capcana -in → -innen.</strong><br>
            Negație plural = mereu <strong>keine</strong>. Femininele în -in → <strong>-innen</strong> (dublezi n!).<br>
            <em>💡 die Lehrerin → die Lehrerinnen (NU Lehrerinen!). Plus 2 capcane finale: Umlaut și -s.</em>
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="completează...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// Build all exercises on load
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
