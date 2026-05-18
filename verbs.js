// ============================================
// VERB-KONJUGATION - Lecția 8 A1.1: In Annettes Klasse (Plural)
// Claudia Toth · instrument de referință (Präsens / Präteritum / Perfekt)
// L8 NU introduce verbe noi (gramatică: Pluralbildung). Regula „nicio lecție
// fără verbe": lernen (din pool neconjugat L3) + machen (recap, model regulat).
// Präteritum → RO imperfect · REGULĂ: NU backticks, NU ghilimele interne!
// ============================================

const verbsData = [
    {
        inf: 'lernen', ro: 'a învăța', typ: 'slab / regulat', aux: 'haben', part: 'gelernt',
        praes: [['ich','lerne','învăț'],['du','lernst','înveți'],['er/sie/es','lernt','învață'],['wir','lernen','învățăm'],['ihr','lernt','învățați'],['sie/Sie','lernen','învață']],
        praet: [['ich','lernte','învățam'],['du','lerntest','învățai'],['er/sie/es','lernte','învăța'],['wir','lernten','învățam'],['ihr','lerntet','învățați'],['sie/Sie','lernten','învățau']],
        perf: [['ich','habe gelernt','am învățat'],['du','hast gelernt','ai învățat'],['er/sie/es','hat gelernt','a învățat'],['wir','haben gelernt','am învățat'],['ihr','habt gelernt','ați învățat'],['sie/Sie','haben gelernt','au învățat']],
        note: 'Verb-model slab/regulat. Andreea lernt jeden Tag Deutsch.'
    },
    {
        inf: 'machen', ro: 'a face', typ: 'slab / regulat', aux: 'haben', part: 'gemacht', recap: 'L3',
        praes: [['ich','mache','fac'],['du','machst','faci'],['er/sie/es','macht','face'],['wir','machen','facem'],['ihr','macht','faceți'],['sie/Sie','machen','fac']],
        praet: [['ich','machte','făceam'],['du','machtest','făceai'],['er/sie/es','machte','făcea'],['wir','machten','făceam'],['ihr','machtet','făceați'],['sie/Sie','machten','făceau']],
        perf: [['ich','habe gemacht','am făcut'],['du','hast gemacht','ai făcut'],['er/sie/es','hat gemacht','a făcut'],['wir','haben gemacht','am făcut'],['ihr','habt gemacht','ați făcut'],['sie/Sie','haben gemacht','au făcut']],
        note: 'Recap — verbul-model regulat al cursului (tiparul standard: ca spielen, lernen, kochen, kaufen).'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = v.impersonal
        ? '<small style="color:#6b7280;">Verb IMPERSONAL — doar forma „es": <strong>es ' + v.perf[0][1] + '</strong>. NU se conjugă cu ich/du/wir...</small>'
        : '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 Verbe — referință</strong> · Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'L8 e o lecție de gramatică (Pluralbildung) — fără verbe noi. Conjugăm un verb din pool + un recap model.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Acesta e un INSTRUMENT DE CĂUTARE. La A1 înveți complet doar Präsens — Präteritum și Perfekt vin mai târziu (Lecțiile 11+ / 17). Nicio lecție nu rămâne fără verbe: aici ai lernen (verb nou model) + machen (recap, tiparul regulat standard). 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong>' + (v.recap ? ' · 📎 recap' : '') + ' · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            (v.recap ? '<div class="theory-box" style="background:#d1fae5;"><p style="margin:0;">📎 <strong>Recap</strong> — verb deja conjugat complet la <strong>' + v.recap + '</strong>. Reluat aici ca referință (regula: nicio lecție fără verbe).</p></div>' : '') +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
