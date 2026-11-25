/* =====================================================================
   HomeMusic : musique du menu principal, épique, RPG médiéval (esprit Zelda N64 / GBA)
   Synthétisée en direct (aucun fichier audio) : harpe, ocarina, cuivres, cordes, timbales.
   32 mesures en ré mineur / fa majeur, 104 bpm : A (harpe + ocarina), B (cuivres + timbales), A, B.
   Elle joue tant que l'écran d'accueil (ou ses sous-menus) est affiché, et s'arrête au lancement d'une partie.
   ===================================================================== */
const HomeMusic = (() => {
  const BPM = 104, BEAT = 60 / BPM, BAR = BEAT * 4;
  const MASTER = 0.5;                               // volume maximal avant le réglage « musique » du jeu
  const Dm = [2, 'm'], Bb = [10, 'M'], C = [0, 'M'], A7 = [9, '7'], F = [5, 'M'], Gm = [7, 'm'];
  const PROG = {
    A: [Dm, Dm, Bb, C, Dm, Dm, Bb, A7],
    B: [F, C, Dm, Bb, F, C, Gm, A7]
  };
  const MEL = {                                     // mélodie : [note midi, durée en temps], 4 temps par mesure
    A: [[[74, 2], [77, 1], [81, 1]], [[79, 1.5], [77, .5], [76, 1], [74, 1]], [[70, 2], [74, 1], [77, 1]], [[76, 2], [72, 1], [79, 1]],
        [[74, 2], [77, 1], [81, 1]], [[84, 1.5], [81, .5], [79, 1], [77, 1]], [[77, 1], [74, 1], [70, 1], [74, 1]], [[73, 1.5], [76, .5], [81, 2]]],
    B: [[[81, 1.5], [84, .5], [81, 1], [77, 1]], [[79, 1.5], [76, .5], [79, 1], [84, 1]], [[86, 2], [84, 1], [81, 1]], [[82, 1.5], [81, .5], [79, 1], [77, 1]],
        [[81, 1.5], [84, .5], [89, 2]], [[88, 1], [86, 1], [84, 1], [79, 1]], [[82, 2], [79, 1], [74, 1]], [[73, 1], [76, 1], [81, 2]]]
  };
  const SECTIONS = ['A', 'B', 'A', 'B'];
  // niveau des couches par section : harpe, ocarina, cuivres, cordes, basse, timbales
  const LEV = {
    A: [{ harp: 1.0, flute: 1.0, brass: 0, pad: 0.6, bass: 0.7, timp: 0.35 }, { harp: 1.1, flute: 0.8, brass: 0.35, pad: 0.8, bass: 0.8, timp: 0.5 }],
    B: [{ harp: 0.6, flute: 0.45, brass: 1.0, pad: 0.9, bass: 1.0, timp: 1.0 }, { harp: 0.75, flute: 0.55, brass: 1.1, pad: 1.0, bass: 1.0, timp: 1.1 }]
  };
  const INT = { m: [0, 3, 7], M: [0, 4, 7], '7': [0, 4, 7] };
  const mtof = n => 440 * Math.pow(2, (n - 69) / 12);
  const rnd = Math.random;

  // ---------- Voix ----------
  function makeEngine(ctx, out) {
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 4; comp.attack.value = 0.01; comp.release.value = 0.25; comp.connect(out);
    const ir = ctx.createBuffer(2, Math.floor(ctx.sampleRate * 2.4), ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < d.length; i++) d[i] = (rnd() * 2 - 1) * Math.pow(1 - i / d.length, 2.4); }
    const conv = ctx.createConvolver(); conv.buffer = ir;
    const wet = ctx.createGain(); wet.gain.value = 0.5; conv.connect(wet); wet.connect(comp);
    const bus = {};
    const mkBus = (name, dry, send) => { const g = ctx.createGain(); g.gain.value = 0; const d = ctx.createGain(); d.gain.value = dry; const s = ctx.createGain(); s.gain.value = send; g.connect(d); g.connect(s); d.connect(comp); s.connect(conv); bus[name] = g; };
    mkBus('harp', 1, 0.6); mkBus('flute', 0.8, 0.7); mkBus('brass', 1, 0.35); mkBus('pad', 0.9, 0.7); mkBus('bass', 1, 0.05); mkBus('timp', 1, 0.5);
    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate); { const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = rnd() * 2 - 1; }

    function harp(f, t, v) {
      const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
      o.type = 'triangle'; o.frequency.value = f; o2.type = 'sine'; o2.frequency.value = f * 2;
      lp.type = 'lowpass'; lp.frequency.setValueAtTime(4200, t); lp.frequency.exponentialRampToValueAtTime(900, t + 0.7);
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
      o.connect(lp); o2.connect(lp); lp.connect(g); g.connect(bus.harp); o.start(t); o2.start(t); o.stop(t + 1.2); o2.stop(t + 1.2);
    }
    function flute(f, t, dur, v) {                                // ocarina : sinus pur, vibrato qui s'installe, souffle
      const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), lfo = ctx.createOscillator(), lg = ctx.createGain(), g2 = ctx.createGain();
      o.type = 'sine'; o.frequency.value = f; o2.type = 'triangle'; o2.frequency.value = f * 2; g2.gain.value = 0.08;
      lfo.frequency.value = 5.4; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f * 0.009, t + Math.min(0.5, dur)); lfo.connect(lg); lg.connect(o.frequency); lg.connect(o2.frequency);
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + 0.07); g.gain.setValueAtTime(v, t + Math.max(0.08, dur - 0.12)); g.gain.linearRampToValueAtTime(0.0001, t + dur + 0.18);
      const n = ctx.createBufferSource(); n.buffer = noiseBuf; const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = f * 2; nf.Q.value = 3; const ng = ctx.createGain();
      ng.gain.setValueAtTime(v * 0.18, t); ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.18); n.connect(nf); nf.connect(ng); ng.connect(g);
      o.connect(g); o2.connect(g2); g2.connect(g); g.connect(bus.flute);
      const e = t + dur + 0.25; lfo.start(t); o.start(t); o2.start(t); n.start(t, rnd()); lfo.stop(e); o.stop(e); o2.stop(e); n.stop(t + 0.2);
    }
    function brass(f, t, dur, v) {                                // cuivres : dents de scie, filtre qui s'ouvre à l'attaque
      const g = ctx.createGain(), lp = ctx.createBiquadFilter();
      lp.type = 'lowpass'; lp.Q.value = 1.5; lp.frequency.setValueAtTime(500, t); lp.frequency.exponentialRampToValueAtTime(2600, t + 0.11); lp.frequency.exponentialRampToValueAtTime(1500, t + Math.max(0.3, dur));
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + 0.05); g.gain.setValueAtTime(v * 0.85, t + Math.max(0.1, dur - 0.1)); g.gain.linearRampToValueAtTime(0.0001, t + dur + 0.14);
      [[-7, 'sawtooth', 1], [7, 'sawtooth', 1], [0, 'square', 0.35]].forEach(([det, ty, a], i) => {
        const o = ctx.createOscillator(), og = ctx.createGain(); o.type = ty; o.frequency.value = i === 2 ? f / 2 : f; o.detune.value = det; og.gain.value = a * 0.5; o.connect(og); og.connect(lp);
        o.start(t); o.stop(t + dur + 0.2);
      });
      lp.connect(g); g.connect(bus.brass);
    }
    function pad(f, t, dur, v) {                                  // cordes : dents de scie douces, attaque lente
      const g = ctx.createGain(), lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1100; lp.Q.value = 0.5;
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + 0.45); g.gain.setValueAtTime(v, t + dur - 0.3); g.gain.linearRampToValueAtTime(0.0001, t + dur + 0.4);
      [-6, 6].forEach(det => { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = det; o.connect(lp); o.start(t); o.stop(t + dur + 0.5); });
      lp.connect(g); g.connect(bus.pad);
    }
    function bass(f, t, dur, v) {
      const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
      o.type = 'triangle'; o.frequency.value = f; o2.type = 'sawtooth'; o2.frequency.value = f; lp.type = 'lowpass'; lp.frequency.value = 420;
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + 0.012); g.gain.exponentialRampToValueAtTime(v * 0.45, t + dur * 0.6); g.gain.linearRampToValueAtTime(0.0001, t + dur);
      o.connect(lp); o2.connect(lp); lp.connect(g); g.connect(bus.bass); o.start(t); o2.start(t); o.stop(t + dur + 0.05); o2.stop(t + dur + 0.05);
    }
    function timp(t, v, pitch) {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine';
      o.frequency.setValueAtTime(pitch * 2.4, t); o.frequency.exponentialRampToValueAtTime(pitch, t + 0.18);
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
      const n = ctx.createBufferSource(); n.buffer = noiseBuf; const nf = ctx.createBiquadFilter(); nf.type = 'lowpass'; nf.frequency.value = 500; const ng = ctx.createGain();
      ng.gain.setValueAtTime(v * 0.7, t); ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
      o.connect(g); g.connect(bus.timp); n.connect(nf); nf.connect(ng); ng.connect(bus.timp); o.start(t); o.stop(t + 1); n.start(t, rnd()); n.stop(t + 0.12);
    }
    function crash(t, v) {
      const n = ctx.createBufferSource(); n.buffer = noiseBuf; const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 4200; const g = ctx.createGain();
      g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.2); n.connect(hp); hp.connect(g); g.connect(bus.timp); n.start(t, rnd()); n.stop(t + 2.3);
    }

    // une mesure complète (bar = 0..31) à l'instant t
    function scheduleBar(bar, t) {
      const sec = SECTIONS[Math.floor(bar / 8) % SECTIONS.length], k = bar % 8, pass = Math.floor(bar / 16) % 2, lv = LEV[sec][pass];
      const [pc, ty] = PROG[sec][k], base = 48 + ((pc + 12) % 12), iv = INT[ty], tones = [base, base + iv[1], base + iv[2]];
      for (const key in lv) bus[key].gain.setTargetAtTime(lv[key] * 0.9, t, 0.15);
      // cordes : accord tenu toute la mesure
      tones.forEach(n => pad(mtof(n + 12), t, BAR, 0.045));
      pad(mtof(base), t, BAR, 0.05);
      // basse
      if (sec === 'A') { bass(mtof(base - 12), t, BEAT * 2, 0.3); bass(mtof(base - 12 + 7), t + BEAT * 2, BEAT * 2, 0.24); }
      else for (let i = 0; i < 8; i++) bass(mtof(base - 12 + ([0, 0, 12, 0, 0, 0, 12, 7][i])), t + i * BEAT / 2, BEAT * 0.42, 0.26);
      // harpe : arpège en croches
      const arp = [base + 12, base + 12 + iv[1], base + 12 + iv[2], base + 24];
      [0, 1, 2, 3, 2, 1, 2, 1].forEach((ix, i) => harp(mtof(arp[ix] + (ty === '7' && i === 7 ? 3 : 0)), t + i * BEAT / 2, 0.12 + (i % 4 === 0 ? 0.05 : 0)));
      // timbales
      if (sec === 'A') { timp(t, 0.5, 70); if (k % 2 === 1) timp(t + BEAT * 3, 0.3, 82); }
      else { [0, 1.5, 2, 3, 3.5].forEach((b, i) => timp(t + b * BEAT, i === 0 ? 0.85 : 0.6, i % 2 ? 82 : 70)); if (k === 0) crash(t, 0.13); }
      // mélodie : ocarina en A, cuivres en B (avec ocarina à l'octave), cors discrets au 2e A
      let tt = t;
      MEL[sec][k].forEach(([n, b]) => {
        const d = b * BEAT * 0.94;
        if (sec === 'A') { flute(mtof(n), tt, d, 0.2); if (pass === 1) brass(mtof(n - 12), tt, d, 0.07); }
        else { brass(mtof(n - 12), tt, d, 0.13); brass(mtof(n), tt, d, 0.06); flute(mtof(n + 12), tt, d, 0.07); }
        tt += b * BEAT;
      });
      if (sec === 'B' && k === 7) { brass(mtof(74), t + BEAT * 3, BEAT * 0.9, 0.1); }
    }
    return { scheduleBar, bus };
  }

  // ---------- Lecture dans le jeu ----------
  let ctx = null, master = null, eng = null, timer = 0, nextBar = 0, barNo = 0, on = false, stopTimer = 0, listening = false;
  const vol = () => { try { return (typeof Snd !== 'undefined' && Snd.vol) ? Snd.vol('m') : 1; } catch (e) { return 1; } };
  function init() {
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
    ctx = new AC(); master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination); eng = makeEngine(ctx, master);
    if (!listening) {
      listening = true;
      ['pointerdown', 'touchstart', 'keydown', 'click'].forEach(ev => window.addEventListener(ev, () => { if (ctx && ctx.state !== 'running') ctx.resume().catch(() => {}); }, { passive: true, capture: true }));
      document.addEventListener('visibilitychange', () => { if (!ctx) return; document.hidden ? ctx.suspend() : (on && ctx.resume().catch(() => {})); });
    }
    return true;
  }
  function schedule() {
    if (!ctx || ctx.state !== 'running') return;
    while (nextBar < ctx.currentTime + 1.2) { eng.scheduleBar(barNo % 32, nextBar); nextBar += BAR; barNo++; }
  }
  function start() {
    if (on) return; if (!ctx && !init()) return;
    on = true; clearTimeout(stopTimer);
    if (ctx.state !== 'running') ctx.resume().catch(() => {});
    barNo = 0; nextBar = ctx.currentTime + 0.15; clearInterval(timer); timer = setInterval(schedule, 120); schedule();
    try { Snd.stopMusic(); } catch (e) {}
  }
  function stop() {
    if (!on) return; on = false;
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.35);
    stopTimer = setTimeout(() => { clearInterval(timer); timer = 0; }, 1500);
    try { Snd.start(); } catch (e) {}                           // la musique d'ambiance du jeu reprend
  }
  function homeVisible() {
    try {
      if (window.HOME_MUSIC_BLOCK) return false;
      const pz = document.getElementById('pz'), cine = document.getElementById('cine');
      if (cine && cine.style.display !== 'none') return false;
      return !!pz && pz.style.display === 'flex' && Ui.from === 'home';
    } catch (e) { return false; }
  }
  setInterval(() => {
    const want = homeVisible() && vol() > 0;
    if (want && !on) start(); else if (!want && on) stop();
    if (on && master) master.gain.setTargetAtTime(MASTER * vol(), ctx.currentTime, 0.6);
  }, 250);
  // La musique d'ambiance générative du jeu se tait quand celle du menu joue
  try { const s0 = Snd.start; Snd.start = function () { if (on) { this.amb(); return; } return s0.apply(this, arguments); }; } catch (e) {}

  // Rendu hors ligne pour vérifier le niveau sonore (test)
  async function render(seconds) {
    const OC = window.OfflineAudioContext; const c = new OC(2, 44100 * seconds, 44100), m = c.createGain(); m.gain.value = MASTER; m.connect(c.destination);
    const e = makeEngine(c, m); for (let b = 0; b * BAR < seconds - 0.5; b++) e.scheduleBar(b % 32, b * BAR + 0.05);
    const buf = await c.startRendering(), d = buf.getChannelData(0); let peak = 0, sum = 0;
    for (let i = 0; i < d.length; i++) { const a = Math.abs(d[i]); if (a > peak) peak = a; sum += d[i] * d[i]; }
    return { peak, rms: Math.sqrt(sum / d.length), seconds: buf.duration };
  }
  return { start, stop, render, get active() { return on; } };
})();
