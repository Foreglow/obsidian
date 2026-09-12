/* Foreglow Starfield — Animated ASCII background overlay for Obsidian
 * Ported from the Foreglow VS Code extension's starfield_template.js.
 * Unlike VS Code (which has to patch its own core workbench.html to run
 * arbitrary JS), Obsidian plugins can do this natively through the
 * documented Plugin API — no core files touched, no reload required.
 */

const { Plugin, PluginSettingTab, Setting } = require("obsidian");

const DEFAULT_SETTINGS = {
  enabled: true,
  opacity: 0.5,
};

const CANVAS_ID = "foreglow-starfield-canvas";

class ForeglowStarfieldPlugin extends Plugin {
  async onload() {
    await this.loadSettings();

    this.addCommand({
      id: "toggle-starfield",
      name: "Toggle Starfield",
      callback: async () => {
        this.settings.enabled = !this.settings.enabled;
        await this.saveSettings();
        this.applyState();
      },
    });

    this.addSettingTab(new ForeglowStarfieldSettingTab(this.app, this));

    this.applyState();
  }

  onunload() {
    this.destroyStarfield();
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  applyState() {
    if (this.settings.enabled) {
      this.createStarfield();
    } else {
      this.destroyStarfield();
    }
  }

  getStarColor() {
    return document.body.classList.contains("theme-light")
      ? "#24163B"
      : "#ffffff";
  }

  createStar(cx, cy) {
    const rand = Math.random();
    let char;
    if (rand < 0.6) char = ".";
    else if (rand < 0.9) char = "*";
    else char = "o";

    return {
      x: cx + (Math.random() - 0.5) * 4,
      y: cy + (Math.random() - 0.5) * 4,
      char: char,
      baseOpacity: 0.15 + Math.random() * 0.55,
      twinkleSpeed: 0.4 + Math.random() * 2.8,
      phase: Math.random() * Math.PI * 2,
      size: 10 + Math.floor(Math.random() * 5),
    };
  }

  generateStars() {
    const cellSize = 14;
    this.stars = [];
    const cols = Math.ceil(this.width / cellSize);
    const rows = Math.ceil(this.height / cellSize);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const cx = i * cellSize + cellSize / 2;
        const cy = j * cellSize + cellSize / 2;

        const noise =
          Math.sin(i * 0.25 + j * 0.15) * Math.cos(j * 0.25 - i * 0.1) * 0.08;
        const density = 0.13 + noise;

        if (Math.random() < Math.max(0.02, density)) {
          this.stars.push(this.createStar(cx, cy));
        }
      }
    }
  }

  resize() {
    if (!this.canvas) return;

    const oldW = this.width || 0;
    const oldH = this.height || 0;

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    if (Math.abs(this.width - oldW) > 50 || Math.abs(this.height - oldH) > 50) {
      this.generateStars();
    }
  }

  animate(timestamp) {
    if (!this.ctx) return;

    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    const time = timestamp / 1000;
    const starColor = this.getStarColor();
    const opacityScale = Math.max(0, Math.min(1, this.settings.opacity)) * 2;

    for (const star of this.stars) {
      const twinkle =
        0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.phase);
      const opacity = Math.max(
        0.02,
        Math.min(1, star.baseOpacity * (0.4 + twinkle * 0.6) * opacityScale),
      );

      ctx.globalAlpha = opacity;
      ctx.fillStyle = starColor;
      ctx.font = star.size + "px monospace";
      ctx.fillText(star.char, star.x, star.y);
    }

    ctx.globalAlpha = 1;
    this.animationId = requestAnimationFrame((t) => this.animate(t));
  }

  createStarfield() {
    this.destroyStarfield();

    const canvas = document.createElement("canvas");
    canvas.id = CANVAS_ID;
    canvas.style.cssText = [
      "position: fixed",
      "top: 0",
      "left: 0",
      "width: 100%",
      "height: 100%",
      "pointer-events: none",
      "z-index: 9999",
    ].join(";");

    document.body.appendChild(canvas);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.resize();
    this.animationId = requestAnimationFrame((t) => this.animate(t));

    this.resizeHandler = () => this.resize();
    window.addEventListener("resize", this.resizeHandler);
  }

  destroyStarfield() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
      this.resizeHandler = null;
    }

    const existing = document.getElementById(CANVAS_ID);
    if (existing) existing.remove();

    this.canvas = null;
    this.ctx = null;
    this.stars = null;
  }
}

class ForeglowStarfieldSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Enable starfield")
      .setDesc("Show an animated twinkling starfield overlay.")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.enabled).onChange(async (value) => {
          this.plugin.settings.enabled = value;
          await this.plugin.saveSettings();
          this.plugin.applyState();
        }),
      );

    new Setting(containerEl)
      .setName("Opacity")
      .setDesc("Brightness of the stars, from 0.0 (transparent) to 1.0 (bright).")
      .addSlider((slider) =>
        slider
          .setLimits(0, 1, 0.05)
          .setValue(this.plugin.settings.opacity)
          .setDynamicTooltip()
          .onChange(async (value) => {
            this.plugin.settings.opacity = value;
            await this.plugin.saveSettings();
          }),
      );
  }
}

module.exports = ForeglowStarfieldPlugin;
