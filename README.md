# anmitali.dev

Source code of the anmitali.dev personal website with a blog.

## Dependencies

- Node.js 22.23.4 or newer
- npm

## Build

```sh
npm install
npm run build
```

Static files are written to `dist/`. The build downloads fonts from Google Fonts, so it needs network access.

For local development:

```sh
npm run dev
```

Type check:

```sh
npm run check
```

## Blog posts

Add a Markdown file to `blog/`. The file name becomes the URL.

```md
---
title: Post title
date: 2026-01-31
description: Optional short summary
---

Post text.
```

## Acknowledgments

- [Astro](https://astro.build)
- [Material Web](https://github.com/material-components/material-web)
- [Material Color Utilities](https://github.com/material-foundation/material-color-utilities)
- [Google Fonts](https://fonts.google.com)

## License

[AGPL-3.0-only](LICENSE)
