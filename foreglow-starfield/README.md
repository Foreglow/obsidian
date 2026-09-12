# Foreglow Starfield

An animated, twinkling ASCII starfield overlay for Obsidian, matching the
[VS Code extension's](https://github.com/Foreglow/visual-studio-code)
starfield effect.

This is a small Obsidian **plugin**, not part of the theme itself — Obsidian
themes are CSS-only and can't run JavaScript, so the animation lives here
instead. Unlike the VS Code version (which has to patch VS Code's own core
files to inject a script, with a restart required for every toggle),
Obsidian plugins can do this natively: no core files touched, effect
applies immediately.

## Installation

1. Copy this folder into `<vault>/.obsidian/plugins/`, keeping the folder
   name `foreglow-starfield`
2. In Obsidian, go to Settings → Community plugins and enable **Foreglow
   Starfield** (you may need to disable Restricted Mode first)

## Usage

- Toggle it via the Command Palette (`Ctrl/Cmd+P`) → **Foreglow Starfield:
  Toggle Starfield**
- Adjust opacity, or disable it by default, in Settings → Foreglow
  Starfield

Star color adapts automatically to light vs. dark themes (checking for
Obsidian's `.theme-light` class), so it looks right whichever Foreglow
variant — Foreglow, Afterglow, Alpenglow, or Airglow — is active.

## License

MIT © [Foreglow](https://github.com/Foreglow)
