<p align="center"><img width="320" alt="foreglow-logo" src="https://github.com/user-attachments/assets/5b0f629b-9800-4c97-b23b-fa3f22681ea4" /></p>

<h3 align="center">Foreglow Theme for <a href="https://obsidian.md/">Obsidian</a></h3>

<p align="center">
  <a href="https://github.com/Foreglow/obsidian/stargazers"><img src="https://img.shields.io/github/stars/Foreglow/obsidian?style=for-the-badge&labelColor=313244&color=CB81E4" alt="Stars" /></a>
  <a href="https://github.com/Foreglow/obsidian/issues"><img src="https://img.shields.io/github/issues/Foreglow/obsidian?style=for-the-badge&labelColor=313244&color=8930A6" alt="Issues" /></a>
  <a href="https://github.com/Foreglow/obsidian/graphs/contributors"><img src="https://img.shields.io/github/contributors/Foreglow/obsidian?style=for-the-badge&labelColor=313244&color=FF6B8A" alt="Contributors" /></a>
  <a href="https://github.com/Foreglow/obsidian/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Foreglow/obsidian?style=for-the-badge&labelColor=313244&color=2EE8C8" alt="License" /></a>
</p>

<p align="center"><img width="640" alt="foreglow-pack-obsidian" src="https://github.com/user-attachments/assets/3c15dc63-a90b-4423-8b2a-018b7e811cc8" /></p>

## Previews

<details>
  <summary>🌃 Foreglow</summary>
  <img width="1027" height="801" alt="foreglow" src="https://github.com/user-attachments/assets/0af9e610-e5cc-4762-8571-920aa357a32e" />
</details>

<details>
  <summary>🌇 Afterglow</summary>
  <img width="1027" height="801" alt="afterglow" src="https://github.com/user-attachments/assets/e7393fd4-9b28-4659-a6ed-f8b987dd1b21" />
</details>

<details>
  <summary>🌉 Alpenglow</summary>
  <img width="1027" height="801" alt="alpenglow" src="https://github.com/user-attachments/assets/62253af8-aa26-4119-95ea-d8f90bc478c2" />
</details>

<details>
  <summary>🌌 Airglow</summary>
  <img width="1027" height="801" alt="airglow" src="https://github.com/user-attachments/assets/94876428-152e-4ebb-9389-e89b61a09315" />
</details>

A twilight-inspired theme for Obsidian, with four variants:
**Foreglow** (dark-dawn), **Afterglow** (light-dusk), **Alpenglow**
(rubescent), and **Airglow** (auroral).

## Structure

Contains a single Obsidian theme (one `manifest.json` + `theme.css` at the
repo root) that handles all four color variants in one package:

- **Foreglow** (dark) and **Afterglow** (light) follow Obsidian's own
  Appearance → Base color scheme toggle automatically — no extra setup.
- **Alpenglow** and **Airglow** are alternate dark flavors, selectable via
  the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings)
  community plugin (installed separately). Once installed, go to
  Settings → Style Settings → Foreglow → "Alternate dark flavor" to switch.

This one-theme approach is also what makes the theme eligible for
Obsidian's official Community Themes directory in the first place —
submissions there are one GitHub repo per theme, with `manifest.json` and
`theme.css` at the repo root (see [Publishing](#publishing) below); there's
no way to register four separately-named themes from one repo.

## Repository Layout

```
.
├── manifest.json
├── theme.css
└── foreglow-pack-obsidian-alt.png   # marketplace screenshot
```

## Installation

### Manual

1. Open Obsidian Settings → Appearance → Themes → click "Manage" (or the
   folder icon) to open your vault's theme folder — this is
   `<vault>/.obsidian/themes/`
2. Create a folder there named `Foreglow` and copy `manifest.json` and
   `theme.css` from this repo into it
3. Restart Obsidian or reload it (`Ctrl/Cmd+R`)
4. Back in Settings → Appearance → Themes, select **Foreglow**

### From the Community Themes directory

Search for [**Foreglow**](https://community.obsidian.md/themes/foreglow) in
Settings → Appearance → Themes → "Manage" → browse.

### Reaching Alpenglow and Airglow

Install the [Style Settings](https://obsidian.md/plugins?id=obsidian-style-settings)
community plugin, then go to Settings → Style Settings → Foreglow →
"Alternate dark flavor" and pick **Alpenglow** or **Airglow**. Leave it
unset to use the default Foreglow/Afterglow pair.

## Color Palette

### Foreglow (Dark)

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#161221` | Main background |
| Current Line | `#281F3D` | Line highlight |
| Selection | `#3D2556` | Text selection |
| Foreground | `#E8E3F2` | Default text |
| Comment | `#736699` | Comments |
| Keyword | `#CB81E4` | Keywords |
| String | `#ED9F82` | Strings |
| Function | `#EC93BF` | Functions |
| Number | `#EFBF6C` | Numbers |
| Type | `#75C6D7` | Classes, types |
| Variable | `#C7BCE6` | Variables |
| Accent | `#F471C8` | Cursor, accent |

### Afterglow (Light)

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#F4EEE1` | Main background |
| Current Line | `#E6D6C1` | Line highlight |
| Selection | `#DFC2AA` | Text selection |
| Foreground | `#24163B` | Default text |
| Comment | `#7A6F9B` | Comments |
| Keyword | `#8930A6` | Keywords |
| String | `#B64820` | Strings |
| Function | `#AE296B` | Functions |
| Number | `#955F0F` | Numbers |
| Type | `#1D7187` | Classes, types |
| Variable | `#4D3781` | Variables |
| Accent | `#C3228E` | Cursor, accent |

### Alpenglow (Rubescent)

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#1A0505` | Main background |
| Current Line | `#3D1212` | Line highlight |
| Selection | `#5A1E1E` | Text selection |
| Foreground | `#F5E6DC` | Default text |
| Comment | `#8B6B6B` | Comments |
| Keyword | `#FF6B8A` | Keywords |
| String | `#FF9F6C` | Strings |
| Function | `#FFB3C6` | Functions |
| Number | `#FF7E67` | Numbers |
| Type | `#E85D75` | Classes, types |
| Variable | `#FFA07A` | Variables |
| Accent | `#FF6B9D` | Cursor, accent |

### Airglow (Auroral)

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#0A1A1F` | Main background |
| Current Line | `#0F2024` | Line highlight |
| Selection | `#162E34` | Text selection |
| Foreground | `#E0F0F5` | Default text |
| Comment | `#5A8A90` | Comments |
| Keyword | `#2EE8C8` | Keywords |
| String | `#7DD8A8` | Strings |
| Function | `#C8A0E8` | Functions |
| Number | `#D4B870` | Numbers |
| Type | `#4AA8D0` | Classes, types |
| Variable | `#8BC4D4` | Variables |
| Accent | `#2EE8C8` | Cursor, accent |

![Foreglow and Afterglow side by side in Obsidian](foreglow-pack-obsidian-alt.png)

## License

MIT © [Foreglow](https://github.com/Foreglow)
