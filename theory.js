// ============================================
// TEORIE - Lecția 8: In Annettes Klasse (Plural)
// Claudia Toth · A1.1 — Annettes Deutschkurs · Lecția 8 din 10
// Sursă DF: 19 (Artikel im Plural), 20 (Pluralbildung), 21 (Übung)
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const theoryHTML = `
    <!-- 0: Intro + notice diacritice + povestea -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Astăzi: Annette aduce o cutie plină cu obiecte în clasă</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>O cutie cu multe lucruri</h4>
                <p>Annette intră în clasă cu o cutie mare. Scoate din ea <strong>un</strong> creion... apoi încă unul... apoi zece! <strong>Un</strong> caiet, <strong>două</strong> cărți, <strong>multe</strong> pixuri. „Azi", spune ea, „totul e la <strong>plural</strong>."</p>
                <p>Învățăm cum se formează <strong>pluralul</strong> în germană (cele 5 tipare), <strong>singurul articol</strong> de plural (vestea bună!) și cum negi la plural. Și — promit — după complexitatea genurilor din Lecția 7, pluralul e o <strong>relaxare</strong>.</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette (Lehrerin)</div>
                        <div class="dialog-text">Schaut mal! Hier ist ein Buch. Und hier sind viele Bücher!
                            <span class="translation">Ia uitați! Aici e o carte. Și aici sunt multe cărți!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Ein Buch — die Bücher. Warum „Bücher" und nicht „Buchs"?
                            <span class="translation">O carte — cărțile. De ce „Bücher" și nu „Buchs"?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Gute Frage! Es gibt 5 Muster für den Plural. Heute lernen wir alle.
                            <span class="translation">Bună întrebare! Sunt 5 tipare pentru plural. Azi le învățăm pe toate.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Ce vei putea face la finalul lecției</h4>
                <ul style="margin-left: 18px;">
                    <li>Să folosești <strong>die</strong> — singurul articol hotărât la plural (pentru toate genurile!)</li>
                    <li>Să negi la plural cu <strong>keine</strong> și să folosești <strong>Nullartikel</strong> (Ø)</li>
                    <li>Să recunoști și să aplici <strong>cele 5 tipare de plural</strong> (-e, -er, -(e)n, -s, -Ø)</li>
                    <li>Să pui <strong>Umlaut</strong> acolo unde trebuie (der Vater → die V<strong>ä</strong>ter)</li>
                    <li>Să eviți capcana <strong>-in → -innen</strong> (die Lehrerin → die Lehreri<strong>nnen</strong>)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Die — singurul articol la plural -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎉 2. „Die" — singurul articol la plural (marea ușurare)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-die-plural.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎉 Vestea bună: la plural există UN SINGUR articol hotărât — die</h4>
                <p>Îți amintești de Lecția 7? La singular aveai 3 articole (der/die/das). La plural, toate cele 3 genuri folosesc <strong>același articol: die</strong>.</p>
                <table class="grammar-table">
                    <tr><th>Singular</th><th>Plural</th><th>Traducere RO</th></tr>
                    <tr><td><strong style="color:#1d4ed8;">der</strong> Mann</td><td><strong style="color:#be185d;">die</strong> Männer</td><td><em style="color:#6b7280;">bărbatul → bărbații</em></td></tr>
                    <tr><td><strong style="color:#be185d;">die</strong> Frau</td><td><strong style="color:#be185d;">die</strong> Frauen</td><td><em style="color:#6b7280;">femeia → femeile</em></td></tr>
                    <tr><td><strong style="color:#047857;">das</strong> Kind</td><td><strong style="color:#be185d;">die</strong> Kinder</td><td><em style="color:#6b7280;">copilul → copiii</em></td></tr>
                </table>
                <p style="margin-top: 8px; color:#6b7280;"><em>💡 Indiferent de gen — la plural e mereu „die". Pluralul SIMPLIFICĂ.</em></p>
            </div>

            <div class="theory-box">
                <h4>🔵 Articolul nehotărât la plural: NU există (Nullartikel Ø)</h4>
                <p>La singular spui „ein Mann / eine Frau". La plural, articolul nehotărât <strong>dispare complet</strong> — se numește „Nullartikel" (articol zero, Ø):</p>
                <table class="grammar-table">
                    <tr><th>Singular</th><th>Plural (Ø)</th><th>Traducere RO</th></tr>
                    <tr><td>ein Mann spielt</td><td><strong>Ø</strong> Männer spielen</td><td><em style="color:#6b7280;">un bărbat joacă → (niște) bărbați joacă</em></td></tr>
                    <tr><td>eine Frau lacht</td><td><strong>Ø</strong> Frauen lachen</td><td><em style="color:#6b7280;">o femeie râde → (niște) femei râd</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>❌ Negația la plural: keine</h4>
                <p>Articolul nehotărât e Ø, dar negația rămâne — la plural mereu <strong>keine</strong> (pentru toate genurile):</p>
                <table class="grammar-table">
                    <tr><th>Propoziție DE</th><th>Traducere RO</th></tr>
                    <tr><td>Das sind <strong>keine</strong> Tische.</td><td><em style="color:#6b7280;">Acestea nu sunt mese.</em></td></tr>
                    <tr><td>Das sind <strong>keine</strong> Lampen.</td><td><em style="color:#6b7280;">Acestea nu sunt lămpi.</em></td></tr>
                    <tr><td>Das sind <strong>keine</strong> Bücher.</td><td><em style="color:#6b7280;">Acestea nu sunt cărți.</em></td></tr>
                </table>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Aici germana ne face un cadou. Trei articole grele la singular (der/die/das) → UNUL singur la plural (die). Partea grea nu e articolul — e <strong>forma</strong> substantivului la plural. Asta învățăm acum. 🦋"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Tiparele -e și -er -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📊 3. Tiparele -e și -er (+ Umlaut)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-e-er.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Tiparul 1: plural cu -e (mai ales masculine de 1 silabă)</h4>
                <table class="grammar-table">
                    <tr><th>Singular</th><th>Plural</th><th>Traducere RO</th></tr>
                    <tr><td>der Tisch</td><td>die Tisch<strong>e</strong></td><td><em style="color:#6b7280;">masa → mesele</em></td></tr>
                    <tr><td>der Hund</td><td>die Hund<strong>e</strong></td><td><em style="color:#6b7280;">câinele → câinii</em></td></tr>
                    <tr><td>der Stuhl</td><td>die St<strong>ü</strong>hl<strong>e</strong></td><td><em style="color:#6b7280;">scaunul → scaunele (+ Umlaut!)</em></td></tr>
                    <tr><td>der Ball</td><td>die B<strong>ä</strong>ll<strong>e</strong></td><td><em style="color:#6b7280;">mingea → mingile (+ Umlaut!)</em></td></tr>
                </table>
            </div>

            <div class="theory-box">
                <h4>Tiparul 2: plural cu -er (mai ales neutre de 1 silabă)</h4>
                <p>Aici Umlaut-ul apare aproape MEREU când vocala se poate schimba (a→ä, o→ö, u→ü):</p>
                <table class="grammar-table">
                    <tr><th>Singular</th><th>Plural</th><th>Traducere RO</th></tr>
                    <tr><td>das Kind</td><td>die Kind<strong>er</strong></td><td><em style="color:#6b7280;">copilul → copiii</em></td></tr>
                    <tr><td>das Bild</td><td>die Bild<strong>er</strong></td><td><em style="color:#6b7280;">imaginea → imaginile</em></td></tr>
                    <tr><td>das Buch</td><td>die B<strong>ü</strong>ch<strong>er</strong></td><td><em style="color:#6b7280;">cartea → cărțile (+ Umlaut!)</em></td></tr>
                    <tr><td>das Haus</td><td>die H<strong>ä</strong>us<strong>er</strong></td><td><em style="color:#6b7280;">casa → casele (+ Umlaut!)</em></td></tr>
                </table>
            </div>

            <div class="andreea-note">
                <img src="images/annette.png" alt="Annette" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Annette îți spune (ca profesoară):</div>
                    <div class="text">„Truc de memorare: <strong>neutru de o silabă → -er aproape sigur</strong> (das Kind → die Kinder, das Buch → die Bücher). E unul dintre cele mai sigure tipare. Iar dacă vocala POATE primi Umlaut la -er, de obicei îl primește. 💚"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Tiparele -(e)n, -s, -Ø -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>📊 4. Tiparele -(e)n, -s și -Ø</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-en-s-null.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>Tiparul 3: plural cu -(e)n (REGULA CEA MAI SIGURĂ — feminine!)</h4>
                <p>Aproape toate substantivele <strong>feminine</strong> fac pluralul cu <strong>-n</strong> sau <strong>-en</strong>. ZERO Umlaut aici!</p>
                <table class="grammar-table">
                    <tr><th>Singular</th><th>Plural</th><th>Traducere RO</th></tr>
                    <tr><td>die Lampe</td><td>die Lampe<strong>n</strong></td><td><em style="color:#6b7280;">lampa → lămpile</em></td></tr>
                    <tr><td>die Frau</td><td>die Frau<strong>en</strong></td><td><em style="color:#6b7280;">femeia → femeile</em></td></tr>
                    <tr><td>die Uhr</td><td>die Uhr<strong>en</strong></td><td><em style="color:#6b7280;">ceasul → ceasurile</em></td></tr>
                    <tr><td>die Tafel</td><td>die Tafel<strong>n</strong></td><td><em style="color:#6b7280;">tabla → tablele</em></td></tr>
                </table>
            </div>

            <div class="theory-box">
                <h4>Tiparul 4: plural cu -s (cuvinte străine + finale -a/-i/-o/-y)</h4>
                <table class="grammar-table">
                    <tr><th>Singular</th><th>Plural</th><th>Traducere RO</th></tr>
                    <tr><td>das Auto</td><td>die Auto<strong>s</strong></td><td><em style="color:#6b7280;">mașina → mașinile</em></td></tr>
                    <tr><td>das Foto</td><td>die Foto<strong>s</strong></td><td><em style="color:#6b7280;">fotografia → fotografiile</em></td></tr>
                    <tr><td>das Sofa</td><td>die Sofa<strong>s</strong></td><td><em style="color:#6b7280;">canapeaua → canapelele</em></td></tr>
                    <tr><td>das Handy</td><td>die Handy<strong>s</strong></td><td><em style="color:#6b7280;">telefonul → telefoanele</em></td></tr>
                </table>
            </div>

            <div class="theory-box">
                <h4>Tiparul 5: plural cu -Ø (fără terminație — masc/neutru în -el/-er/-en)</h4>
                <p>Substantivele care se termină deja în -el, -er, -en NU primesc terminație. Doar uneori un Umlaut:</p>
                <table class="grammar-table">
                    <tr><th>Singular</th><th>Plural</th><th>Traducere RO</th></tr>
                    <tr><td>der Lehrer</td><td>die Lehrer</td><td><em style="color:#6b7280;">profesorul → profesorii (la fel!)</em></td></tr>
                    <tr><td>das Fenster</td><td>die Fenster</td><td><em style="color:#6b7280;">fereastra → ferestrele (la fel!)</em></td></tr>
                    <tr><td>der Vater</td><td>die V<strong>ä</strong>ter</td><td><em style="color:#6b7280;">tatăl → tații (doar Umlaut!)</em></td></tr>
                    <tr><td>der Apfel</td><td>die <strong>Ä</strong>pfel</td><td><em style="color:#6b7280;">mărul → merele (doar Umlaut!)</em></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 4: Reguli de aur + capcane -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🚨 5. Reguli de aur + capcane (-in → -innen, familia la plural)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-capcane.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-left: 4px solid #dc2626;">
                <h4>🚨 Capcana de aur: -in → -innen (dublezi n!)</h4>
                <p>Îți amintești meseriile feminine din Lecția 7 (die Lehrerin, die Köchin)? La plural <strong>dublezi „n" și adaugi -en</strong>:</p>
                <table class="grammar-table">
                    <tr><th>Singular</th><th>Plural</th><th>Traducere RO</th></tr>
                    <tr><td>die Lehrerin</td><td>die Lehreri<strong>nnen</strong></td><td><em style="color:#6b7280;">profesoara → profesoarele</em></td></tr>
                    <tr><td>die Studentin</td><td>die Studenti<strong>nnen</strong></td><td><em style="color:#6b7280;">studenta → studentele</em></td></tr>
                    <tr><td>die Köchin</td><td>die Köchi<strong>nnen</strong></td><td><em style="color:#6b7280;">bucătăreasa → bucătăresele</em></td></tr>
                </table>
                <p style="margin-top: 8px; color:#991b1b;"><em>⚠️ NU „die Lehrerinen" (un n) — ci „die Lehreri<strong>nn</strong>en" (doi n)!</em></p>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>👨‍👩‍👧‍👦 Familia Andreei la plural (recap Lecția 7)</h4>
                <table class="grammar-table">
                    <tr><th>Singular</th><th>Plural</th><th>Traducere RO</th></tr>
                    <tr><td>der Vater</td><td>die V<strong>ä</strong>ter</td><td><em style="color:#6b7280;">tatăl → tații</em></td></tr>
                    <tr><td>die Mutter</td><td>die M<strong>ü</strong>tter</td><td><em style="color:#6b7280;">mama → mamele</em></td></tr>
                    <tr><td>das Kind</td><td>die Kind<strong>er</strong></td><td><em style="color:#6b7280;">copilul → copiii</em></td></tr>
                    <tr><td>der Bruder</td><td>die Br<strong>ü</strong>der</td><td><em style="color:#6b7280;">fratele → frații</em></td></tr>
                    <tr><td>die Schwester</td><td>die Schwester<strong>n</strong></td><td><em style="color:#6b7280;">sora → surorile</em></td></tr>
                    <tr><td>der Mann</td><td>die M<strong>ä</strong>nn<strong>er</strong></td><td><em style="color:#6b7280;">bărbatul → bărbații</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>✅ Cele 3 reguli de aur care funcționează cel mai des</h4>
                <ol style="margin-left: 18px;">
                    <li><strong>Feminin → -(e)n</strong> (die Lampe → die Lampen). Cea mai sigură regulă, ~90%!</li>
                    <li><strong>Neutru de 1 silabă → -er</strong> (das Kind → die Kinder, des. cu Umlaut)</li>
                    <li><strong>Masculin de 1 silabă → -e</strong> (der Tisch → die Tische, des. cu Umlaut)</li>
                </ol>
                <p style="margin-top: 8px; color:#6b7280;"><em>💡 NU există regulă 100%. De aceea: învață substantivul cu articol ȘI cu plural — exact ca în Lecția 7. „der Tisch, die Tische".</em></p>
            </div>
        </div>
    </div>

    <!-- 5: Sinteza + sumar -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🧩 6. Sinteza singular vs. plural + sumarul lecției</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-sinteza-sumar.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🧩 Imaginea completă: Singular (Lecția 7) vs. Plural (Lecția 8)</h4>
                <table class="grammar-table">
                    <tr><th>Tip articol</th><th>Singular (L7)</th><th>Plural (L8)</th><th>Traducere RO</th></tr>
                    <tr><td>Hotărât</td><td>der / die / das</td><td><strong>die</strong> (unic!)</td><td><em style="color:#6b7280;">-ul / -a → -ii / -ele</em></td></tr>
                    <tr><td>Nehotărât</td><td>ein / eine / ein</td><td><strong>Ø</strong> (Nullartikel)</td><td><em style="color:#6b7280;">un / o → (niște)</em></td></tr>
                    <tr><td>Negație</td><td>kein / keine / kein</td><td><strong>keine</strong> (unic!)</td><td><em style="color:#6b7280;">niciun / nicio → niciun(ele)</em></td></tr>
                </table>
                <p style="margin-top: 8px; color:#6b7280;"><em>💡 La plural articolul e simplu (mereu „die" / „keine"). Efortul se mută pe FORMA substantivului.</em></p>
            </div>

            <div class="theory-box">
                <h4>📊 Cele 5 tipare de plural — pe scurt</h4>
                <table class="grammar-table">
                    <tr><th>Tipar</th><th>Tipic pentru</th><th>Exemplu + Traducere RO</th></tr>
                    <tr><td><strong>-e</strong></td><td>masculin 1 silabă</td><td>der Tisch → die Tische <em style="color:#6b7280;">(mese)</em></td></tr>
                    <tr><td><strong>-er</strong></td><td>neutru 1 silabă</td><td>das Kind → die Kinder <em style="color:#6b7280;">(copii)</em></td></tr>
                    <tr><td><strong>-(e)n</strong></td><td>feminine (cel mai sigur!)</td><td>die Lampe → die Lampen <em style="color:#6b7280;">(lămpi)</em></td></tr>
                    <tr><td><strong>-s</strong></td><td>cuvinte străine, -a/-o/-y</td><td>das Auto → die Autos <em style="color:#6b7280;">(mașini)</em></td></tr>
                    <tr><td><strong>-Ø</strong></td><td>masc/neutru în -el/-er/-en</td><td>der Lehrer → die Lehrer <em style="color:#6b7280;">(profesori)</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎯 Cele 5 reguli de aur ale lecției</h4>
                <ol style="margin-left: 18px;">
                    <li>La plural există <strong>UN singur articol hotărât: die</strong> (toate genurile).</li>
                    <li>Nehotărât la plural = <strong>Ø</strong> (Nullartikel). Negația = <strong>keine</strong>.</li>
                    <li>Cele 5 tipare: <strong>-e, -er, -(e)n, -s, -Ø</strong>. Multe primesc și <strong>Umlaut</strong> (a→ä, o→ö, u→ü).</li>
                    <li>Cea mai sigură regulă: <strong>feminin → -(e)n</strong> (fără Umlaut).</li>
                    <li>Capcana: <strong>-in → -innen</strong> (dublezi n: die Lehrerin → die Lehrerinnen).</li>
                </ol>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">Acum poți vorbi despre mai multe lucruri și persoane în germană. 📚🎉</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
