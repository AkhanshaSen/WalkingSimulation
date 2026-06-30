export class ShopUI {
  constructor(elements, catalog) {
    this.modal    = elements.modal;
    this.portrait = elements.portrait;
    this.nameEl   = elements.name;
    this.yenEl    = elements.yen;
    this.itemsEl  = elements.items;
    this.closeBtn = elements.closeBtn;
    this.catalog  = catalog;
    this._open    = false;
    this._game    = null;
    this._currentShop = null;

    this.closeBtn?.addEventListener('click', () => this.close());
    // Close on backdrop click
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });
  }

  setGame(game) {
    this._game = game;
  }

  isOpen() {
    return this._open;
  }

  open(shopId) {
    const shop = this.catalog[shopId];
    if (!shop) return;
    this._currentShop = shop;
    this._open = true;
    if (this.portrait) this.portrait.textContent = shop.emoji;
    if (this.nameEl)   this.nameEl.textContent   = shop.label;
    this._refreshYen();
    this._renderItems(shop);
    this.modal?.classList.remove('hidden');
  }

  close() {
    this._open = false;
    this._currentShop = null;
    this.modal?.classList.add('hidden');
  }

  _refreshYen() {
    if (this.yenEl && this._game) {
      this.yenEl.textContent = `💴 ¥${this._game.yen}`;
    }
  }

  _renderItems(shop) {
    if (!this.itemsEl) return;
    this.itemsEl.innerHTML = '';
    shop.items.forEach((item) => {
      const canAfford = !this._game || this._game.yen >= item.price;
      const card = document.createElement('div');
      card.className = 'shop-item';
      card.innerHTML = `
        <div class="shop-item-left">
          <span class="shop-item-emoji">${item.emoji}</span>
          <div class="shop-item-info">
            <div class="shop-item-name">${item.nameEn} <span class="shop-item-ja">${item.name}</span></div>
            <div class="shop-item-desc">${item.desc}</div>
          </div>
        </div>
        <button class="shop-buy-btn${canAfford ? '' : ' disabled'}" ${canAfford ? '' : 'disabled'}>
          ¥${item.price}
        </button>
      `;
      card.querySelector('.shop-buy-btn').addEventListener('click', () => this._buy(item));
      this.itemsEl.appendChild(card);
    });
  }

  _buy(item) {
    if (!this._game) return;
    if (this._game.yen < item.price) {
      this._game.dialogue?.showToast('お金が足りない · Not enough yen!');
      return;
    }
    this._game.spendYen(item.price);
    this._game.dialogue?.showToast(`${item.emoji} ${item.nameEn} — ¥${item.price} spent!`);
    if (item.reward) {
      this._game._handleReward(item.reward);
    }
    this.onPurchase?.();
    this._refreshYen();
    if (this._currentShop) this._renderItems(this._currentShop);
  }
}
