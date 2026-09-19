# mukultyagi481.github.io

Source for my personal portfolio, live at **https://mukultyagi481.github.io**

A single-page site covering my work in experimentation, causal inference, and forecasting. The seven case studies link to their code and write-ups in [data-science-projects](https://github.com/mukultyagi481/data-science-projects).

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire site — HTML, CSS, JavaScript, and the profile photo are all inlined, so there are no other assets to keep in sync |
| `resume.pdf` | Linked from the Résumé button in the nav and at the bottom of the page |

## Updating it

**Résumé:** upload a new PDF named exactly `resume.pdf` to the repo root, replacing the existing one. The filename is case-sensitive and both links depend on it, so nothing else needs to change.

**Adding a project:** open `index.html` and find the comment block above the work cards. It takes two copy-pastes — duplicate one `<a class="work-card">` and give it a new id in its `href` and `data-project`, then duplicate one `<article class="case">` with that same id. The routing picks it up automatically.

**Anything else:** edit `index.html` and commit. GitHub Pages rebuilds in a minute or two.

## Notes

- Each project opens in its own view with its own URL (for example `/#realdata`), so a single case study can be linked directly.
- Light and dark themes follow the visitor's system setting, with a manual toggle in the footer.
