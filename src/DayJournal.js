const STORAGE_KEY = 'exploring-town-day-journal-v1';

const OPENING_BY_PERIOD = {
  morning: 'I went on a walk through town this morning. The streets were still quiet, and the light felt gentle on the rooftops.',
  day: 'I went on a walk through town today. The main street hummed with small, everyday sounds — distant chatter, a shop door, footsteps on the pavement.',
  evening: 'I went on a walk as evening settled over the town. The sky turned gold, and lanterns began to glow along the road.',
  night: 'I went on a walk beneath the night sky. The town felt softer somehow — hushed, with warm light spilling from shop windows.',
};

const SHOP_INTROS = {
  bookshop: 'I stepped into Bunbou Books. The shelves were lined with stories and hand-drawn maps of every alley.',
  ramen: 'I stopped at Yamada Ramen. Steam rose from the kitchen, and the whole block smelled of broth.',
  florist: 'I visited Hana Florist. Buckets of blossoms lined the porch — pinks, creams, and wild country flowers.',
  cafe: 'I wandered into Komorebi Cafe. Through the window I could see cups steaming and afternoon light on the tables.',
  market: 'I browsed the Morning Market. Striped awnings shaded rows of fruit, bread, fish on ice, and little pots of flowers.',
  fishmarket: 'I walked over to Mizuki Fish by the harbor side. Crates and the salt-air smell reminded me the sea was near.',
  vending: 'I paused at a vending machine humming softly on the sidewalk.',
  bakery: 'I found Komugi Bakery just as fresh bread was cooling on the rack.',
  teahouse: 'I slipped into Shizuka Tea House for a moment of calm.',
  konbini: 'I ducked into the mini mart for something quick.',
  sweets: 'I treated myself to Hana Sweets — the kind of shop where everything looks like a small gift.',
};

function truncate(text, max = 96) {
  if (!text) return '';
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trim()}…`;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export class DayJournal {
  constructor(getContext) {
    this.getContext = getContext;
    this.days = new Map();
    this._walkStartedDays = new Set();
    this._visitedShops = new Map();
    this._visitedZones = new Map();
    this._notedNpcs = new Map();
    this._load();
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      for (const day of parsed.days ?? []) {
        this.days.set(day.key, day);
      }
    } catch {
      /* ignore corrupt saves */
    }
  }

  _save() {
    try {
      const days = [...this.days.values()].sort((a, b) => b.key - a.key);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ days }));
    } catch {
      /* storage full / private mode */
    }
  }

  _ctx() {
    return this.getContext?.() ?? { dayKey: 1, period: 'morning', timeLabel: '8:00 AM', zone: 'Town' };
  }

  _today() {
    const { dayKey, period, timeLabel, zone } = this._ctx();
    if (!this.days.has(dayKey)) {
      this.days.set(dayKey, {
        key: dayKey,
        startedAt: timeLabel,
        period,
        zone,
        paragraphs: [],
      });
    }
    return this.days.get(dayKey);
  }

  _append(sentence) {
    if (!sentence) return;
    const day = this._today();
    const last = day.paragraphs[day.paragraphs.length - 1];
    if (last === sentence) return;
    day.paragraphs.push(sentence);
    this._save();
    this._notify();
  }

  _notify() {
    this.onChange?.();
  }

  ensureWalkStarted() {
    const { dayKey, period } = this._ctx();
    if (this._walkStartedDays.has(dayKey)) return;
    this._walkStartedDays.add(dayKey);
    const day = this._today();
    if (day.paragraphs.length === 0) {
      day.paragraphs.push(OPENING_BY_PERIOD[period] ?? OPENING_BY_PERIOD.day);
      this._save();
      this._notify();
    }
  }

  logZoneVisit(zoneLabel) {
    const { dayKey } = this._ctx();
    const seen = this._visitedZones.get(dayKey) ?? new Set();
    if (seen.has(zoneLabel)) return;
    seen.add(zoneLabel);
    this._visitedZones.set(dayKey, seen);
    this.ensureWalkStarted();
    const place = zoneLabel.split('·').pop()?.trim() ?? zoneLabel;
    this._append(`I wandered toward ${place}.`);
  }

  logNpcChat({ profile, snippet, walkedTogether = false, ignored = false }) {
    if (!profile) return;
    this.ensureWalkStarted();
    const name = profile.nameJa ? `${profile.nameJa} (${profile.name})` : profile.name;
    if (ignored) {
      this._append(`I noticed ${name} nearby, but I kept walking this time.`);
      return;
    }
    let sentence = `I stopped to talk with ${name}.`;
    if (profile.tagline) {
      sentence += ` ${profile.tagline}`;
    }
    if (snippet) {
      sentence += ` ${pick(['They said', 'I remember', 'At one point they told me'])}: "${truncate(snippet, 110)}"`;
    }
    if (walkedTogether) {
      sentence += ' After we talked, we walked together for a while.';
    }
    this._append(sentence);
  }

  logCompanionWalk(profile) {
    if (!profile) return;
    this.ensureWalkStarted();
    const name = profile.nameJa ? `${profile.nameJa} (${profile.name})` : profile.name;
    this._append(`${name} joined me for a stroll along the street.`);
  }

  logShopVisit(shop) {
    if (!shop?.id) return;
    this.ensureWalkStarted();
    const { dayKey } = this._ctx();
    const seen = this._visitedShops.get(dayKey) ?? new Set();
    if (seen.has(shop.id)) return;
    seen.add(shop.id);
    this._visitedShops.set(dayKey, seen);
    const intro = SHOP_INTROS[shop.id] ?? `I visited ${shop.label ?? 'a shop'}.`;
    this._append(intro);
  }

  logPurchase(shop, item) {
    if (!shop || !item) return;
    this.ensureWalkStarted();
    const shopName = shop.label?.split('·').pop()?.trim() ?? 'the shop';
    this._append(
      `At ${shopName}, I bought ${item.nameEn}${item.name ? ` (${item.name})` : ''} for ¥${item.price}. ${item.desc ?? ''}`.trim(),
    );
  }

  logMoment(title, body, source) {
    this.ensureWalkStarted();
    const where = source ? ` near ${source}` : '';
    const line = body
      ? `${title}${where}: ${body}`
      : `${title}${where}.`;
    this._append(line);
  }

  logReflection(text) {
    this.ensureWalkStarted();
    this._append(text);
  }

  /** Legacy titled entries from dialogue rewards / props. */
  addLegacyEntry(title, body, source) {
    this.ensureWalkStarted();
    const where = source ? ` (${source})` : '';
    this._append(`${title}${where} — ${body}`);
  }

  getDaysNewestFirst() {
    return [...this.days.values()].sort((a, b) => b.key - a.key);
  }

  render(container) {
    if (!container) return;
    const days = this.getDaysNewestFirst();
    container.innerHTML = '';

    if (days.length === 0 || days.every((d) => d.paragraphs.length === 0)) {
      container.innerHTML = '<p class="journal-empty">Take a walk and talk to townspeople — your day will write itself here.</p>';
      return;
    }

    days.forEach((day, index) => {
      const article = document.createElement('article');
      article.className = 'journal-day';

      const head = document.createElement('header');
      head.className = 'journal-day-head';
      const title = index === 0 && day.key === this._ctx().dayKey ? 'Today' : `Day ${day.key}`;
      head.innerHTML = `<h3>${title}</h3><time>${day.startedAt ?? ''}${day.zone ? ` · ${day.zone.split('·')[0]?.trim()}` : ''}</time>`;
      article.appendChild(head);

      const body = document.createElement('div');
      body.className = 'journal-day-body';
      day.paragraphs.forEach((p) => {
        const para = document.createElement('p');
        para.textContent = p;
        body.appendChild(para);
      });
      article.appendChild(body);
      container.appendChild(article);
    });
  }
}
