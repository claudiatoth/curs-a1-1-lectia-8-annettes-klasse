// ============================================
// TEST FINAL - Lecția 8: In Annettes Klasse (Plural)
// Claudia Toth · A1.1 · 15 întrebări
// REGULĂ: NU ghilimele interne în stringuri JS!
// ============================================

function normalizeTestAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

const finalTestData = [
    // 4× Articol plural
    { type: 'luckentext', category: '🎉 Articol plural', question: 'Completează articolul hotărât la plural:', sentence: '____ Kinder spielen im Park.', translation: 'Copiii se joacă în parc.', accept: ['die'], correct: 'die', explanation: 'La plural există un singur articol hotărât: die (toate genurile).' },
    { type: 'multiple', category: '🎉 Articol plural', question: 'Care e articolul hotărât la plural pentru „Bücher"?', options: ['der', 'das', 'die', 'den'], correct: 'die', explanation: 'Indiferent de genul la singular, la plural articolul hotărât e mereu die.' },
    { type: 'luckentext', category: '🎉 Articol plural', question: 'Completează negația la plural:', sentence: 'Das sind ____ Tische.', translation: 'Acestea nu sunt mese.', accept: ['keine'], correct: 'keine', explanation: 'Negația la plural e mereu keine (pentru toate genurile).' },
    { type: 'multiple', category: '🎉 Articol plural', question: 'Cum e articolul NEHOTĂRÂT la plural?', options: ['ein', 'eine', 'einige', 'Ø (Nullartikel — nu există)'], correct: 'Ø (Nullartikel — nu există)', explanation: 'La plural nu există ein/eine — se folosește Nullartikel (Ø).' },

    // 4× Plural -(e)n / -e
    { type: 'luckentext', category: '💎 Plural -(e)n / -e', question: 'Formează pluralul (feminin):', sentence: 'die Lampe → die ____', translation: 'lampa → lămpile', accept: ['lampen'], correct: 'Lampen', explanation: 'Feminin terminat în -e → adaugi -n. Femininele NU primesc Umlaut.' },
    { type: 'luckentext', category: '💎 Plural -(e)n / -e', question: 'Formează pluralul (feminin):', sentence: 'die Frau → die ____', translation: 'femeia → femeile', accept: ['frauen'], correct: 'Frauen', explanation: 'Feminin de o silabă → -en. Regula cea mai sigură: feminin → -(e)n.' },
    { type: 'luckentext', category: '💎 Plural -(e)n / -e', question: 'Formează pluralul (masculin 1 silabă):', sentence: 'der Tisch → die ____', translation: 'masa → mesele', accept: ['tische'], correct: 'Tische', explanation: 'Masculin de o silabă → -e (fără Umlaut aici).' },
    { type: 'multiple', category: '💎 Plural -(e)n / -e', question: 'Care e pluralul corect pentru „die Uhr"?', options: ['die Uhrs', 'die Uhre', 'die Uhren', 'die Ühren'], correct: 'die Uhren', explanation: 'Feminin de o silabă → -en: die Uhr → die Uhren.' },

    // 4× Plural -er / -s
    { type: 'luckentext', category: '📊 Plural -er / -s', question: 'Formează pluralul (neutru 1 silabă):', sentence: 'das Kind → die ____', translation: 'copilul → copiii', accept: ['kinder'], correct: 'Kinder', explanation: 'Neutru de o silabă → -er. Unul dintre cele mai sigure tipare.' },
    { type: 'luckentext', category: '📊 Plural -er / -s', question: 'Formează pluralul (neutru + Umlaut):', sentence: 'das Buch → die ____', translation: 'cartea → cărțile', accept: ['bücher', 'buecher'], correct: 'Bücher', explanation: 'Neutru de o silabă → -er, iar u primește Umlaut: Buch → Bücher.' },
    { type: 'luckentext', category: '📊 Plural -er / -s', question: 'Formează pluralul (cuvânt străin):', sentence: 'das Auto → die ____', translation: 'mașina → mașinile', accept: ['autos'], correct: 'Autos', explanation: 'Cuvinte străine + finale -a/-o/-y → plural -s.' },
    { type: 'multiple', category: '📊 Plural -er / -s', question: 'Care e pluralul corect pentru „der Stuhl"?', options: ['die Stuhle', 'die Stühle', 'die Stühlen', 'die Stuhls'], correct: 'die Stühle', explanation: 'Masculin de o silabă → -e, iar u primește Umlaut: Stuhl → Stühle.' },

    // 3× Capcane
    { type: 'luckentext', category: '🚨 Capcane', question: 'Capcana -in (dublezi n!):', sentence: 'die Lehrerin → die ____', translation: 'profesoara → profesoarele', accept: ['lehrerinnen'], correct: 'Lehrerinnen', explanation: 'Femininele în -in → -innen (dublezi n): Lehrerin → Lehrerinnen.' },
    { type: 'multiple', category: '🚨 Capcane', question: 'Care e pluralul CORECT pentru „die Studentin"?', options: ['die Studentinen', 'die Studentinnen', 'die Studentins', 'die Studentine'], correct: 'die Studentinnen', explanation: 'Capcana -in: dublezi n și adaugi -en → die Studentinnen (NU Studentinen).' },
    { type: 'luckentext', category: '🚨 Capcane', question: 'Plural doar cu Umlaut (fără terminație):', sentence: 'der Vater → die ____', translation: 'tatăl → tații', accept: ['väter', 'vaeter'], correct: 'Väter', explanation: 'Masculin în -er → tipar -Ø (fără terminație), doar a devine ä: Vater → Väter.' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre articolul la plural (die/Ø/keine) și cele 5 tipare de plural (-e, -er, -(e)n, -s, -Ø).</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 8-10 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let html = '';
    if (q.type === 'multiple') {
        let opts = '';
        q.options.forEach((o, i) => { opts += `<div class="mc-option"><input type="radio" name="test-answer" value="${o.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${o}</label></div>`; });
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${opts}</div></div>`;
    } else if (q.type === 'luckentext') {
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    }
    container.innerHTML = html;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            document.querySelectorAll('input[name="test-answer"]').forEach(r => {
                if (r.value === userAnswers[index].answer) r.checked = true;
            });
        } else {
            const inp = document.getElementById('test-answer');
            if (inp) inp.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const sel = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = sel ? sel.value : '';
    } else {
        const inp = document.getElementById('test-answer');
        userAnswer = inp ? inp.value.trim() : '';
    }
    if (!userAnswer) {
        const fb = document.getElementById('test-feedback');
        fb.className = 'feedback incorrect';
        fb.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const norm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === norm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const fb = document.getElementById('test-feedback');
    if (ans.correct) {
        fb.className = 'feedback correct';
        fb.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        fb.className = 'feedback incorrect';
        fb.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const w = document.getElementById('test-wizard');
    if (w) w.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    let emoji, message, messageRo, badge;
    if (pct === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (pct >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (pct >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (pct >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (pct >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const stats = {};
    finalTestData.forEach((q, i) => {
        if (!stats[q.category]) stats[q.category] = { c: 0, t: 0 };
        stats[q.category].t++;
        if (userAnswers[i] && userAnswers[i].correct) stats[q.category].c++;
    });
    let statsH = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const k in stats) {
        const s = stats[k];
        const p = Math.round((s.c / s.t) * 100);
        statsH += `<li>${k}: <strong>${s.c}/${s.t}</strong> (${p}%)</li>`;
    }
    statsH += '</ul></div>';
    let mistH = '';
    const mist = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mist.push({ q, i, u: userAnswers[i].answer }); });
    if (mist.length) {
        mistH = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mist.forEach(m => {
            mistH += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color:#991b1b;">Răspunsul tău: <em>${m.u}</em></span><br><span style="color:#065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color:#6b7280;">${m.q.explanation}</small></div>`;
        });
        mistH += '</div>';
    }
    const w = document.getElementById('test-wizard');
    const r = document.getElementById('test-results');
    w.style.display = 'none';
    r.style.display = 'block';
    r.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${pct}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top:8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsH}
        ${mistH}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    r.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const t = document.getElementById('main-section-0');
    const a = document.querySelectorAll('.arrow')[0];
    if (t && !t.classList.contains('active')) {
        t.classList.add('active');
        if (a) a.classList.add('rotated');
    }
    const ts = document.getElementById('teorie');
    if (ts) ts.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

buildFinalTest();
