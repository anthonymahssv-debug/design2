# Centro Médico ABC Design System

Official-facing design system pack for **Centro Médico ABC**. La vida nos une.

Open [`index.html`](index.html) in a browser to preview tokens, logos, type, and components.

## Brand at a glance

| Role | Name | Hex | RGB | HSL | CMYK |
| --- | --- | --- | --- | --- | --- |
| Primario | Lochmara | `#0077C8` | 0, 119, 200 | 204, 100, 39 | 100, 40, 0, 22 |
| Tinta | Cod Gray | `#161616` | 22, 22, 22 | 0, 0, 9 | 0, 0, 0, 91 |
| Acento cálido | Flesh | `#FECDA5` | 254, 205, 165 | 27, 98, 82 | 0, 19, 35, 0 |

**Type:** Headline = custom Myriad-Pro. Body = -apple-system.

## Repository layout

```
tokens/           CSS + W3C design tokens
assets/logos/     Official lockups
guidelines/       Isolated specimen cards
components/       React primitives + HTML cards
ui_kits/website/  Marketing-page recreation
docs/DESIGN.md    System design (architecture + PR plan)
styles.css        Entry stylesheet
SKILL.md          Agent skill for branded generation
```

Same pack shape as Médica Sur / RIMOV.

## Preview locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Push to GitHub

```bash
unzip centro-medico-abc-design-system.zip
cd centro-medico-abc-design-system
git init
git add .
git commit -m "Initial commit: Centro Médico ABC design system"
gh repo create centro-medico-abc-design-system --private --source=. --push
```

Or create an empty repository in the GitHub UI and upload this folder.

## Sources

- [https://brandfetch.com/centromedicoabc.com](https://brandfetch.com/centromedicoabc.com)
- [https://centromedicoabc.com](https://centromedicoabc.com)

See [NOTICE.md](NOTICE.md). Code is MIT; brand marks are not.
