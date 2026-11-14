---
world: kanga
---

# Design: the kanga

The site is built like a kanga, the printed cloth worn and gifted across East Africa. A kanga has three parts, and the site uses all three:

- **Pindo:** the printed border. A repeating diamond-and-dot print in acacia green and sun gold frames the hero, edges each inner page header and tops the footer.
- **Mji:** the centre field. Deep green, holding the page's main message and actions.
- **Jina:** the saying printed on every kanga. Here it is AMANI's own motto, set in a cream band inside the field.

Everything outside those framed moments is quiet cream paper for reading. The cloth frames; the paper informs.

## Colour

Taken from the logo: the green of the protecting hands and the gold of the rising sun, on a cream ground. Three colours, like a classic kanga.

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FBF6EA` | page ground |
| `--paper-2` | `#F3E9D2` | alternate sections, cards |
| `--ink` | `#1A1F1C` | text (15.5:1 on paper) |
| `--muted` | `#5A5F55` | secondary text (6.1:1) |
| `--green` | `#0E5A44` | links, buttons, pindo ground (7.6:1 with paper) |
| `--deep` | `#0A3B2E` | the mji field, footer |
| `--gold` | `#E9A527` | pindo print, primary button on green (ink text 7.9:1), focus ring on dark |

Gold is never used for text on paper. The logo's five multicoloured figures stay in the logo only.

## Type

- **Bricolage Grotesque** (variable, self-hosted) for headings: printed, slightly irregular, like kanga lettering. 600 to 700.
- **Atkinson Hyperlegible Next** (variable, self-hosted) for everything people read. Designed by the Braille Institute for readers with low vision.
- Body 18px, line height 1.6, measure ≤ 68ch. Sentence case. No all caps.

## Rules

- One kanga per page at most (the hero on the home page, the page header elsewhere), plus the footer.
- Every section starts with its heading on the left edge. No eyebrow labels, no icon-card grids, no emoji.
- Buttons: one filled (gold on green, green on paper), one outlined. Arrow only on links that leave the section.
- Focus: 3px gold outline with an ink halo, visible on every ground.
- Motion: the hero's border print slides into place once on load. Nothing else animates except hover. Everything rests under reduced motion.
- Works without JavaScript; JS only opens the phone menu and sets the year.

## Photographs

None yet. When AMANI supplies real photographs (members at meetings, activities, the office), they go in `assets/images/photos/` and into the `.photo` frames: square corners, a 2px gold rule above, no captions on the image itself. Never stock photos of people standing in for members.
