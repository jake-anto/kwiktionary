<p align="center">
<img src="https://raw.githubusercontent.com/jake-anto/kwiktionary/refs/heads/dev/public/android-chrome-512x512.png" alt="Kwiktionary Logo" width="200" height="200" />
</p>

<p align="center"><em>Kwiktionary is a fast and modern interface to the vast linguistic data of Wiktionary.</em></p>

<p align="center">
<a href="https://github.com/jake-anto/kwiktionary/actions/workflows/github-code-scanning/codeql">
    <img src="https://github.com/jake-anto/kwiktionary/actions/workflows/github-code-scanning/codeql/badge.svg" alt="CodeQL">
</a>
<a href="https://app.deepsource.com/gh/jake-anto/kwiktionary/" target="_blank">
    <img alt="DeepSource" title="DeepSource" src="https://app.deepsource.com/gh/jake-anto/kwiktionary.svg/?label=code+coverage&show_trend=true&token=9gJuc6ow-iABd7CH2dohMQoE"/>
</a>
<a href="https://kwiktionary.vercel.app">
    <img src="https://vercelbadge.vercel.app/api/jake-anto/kwiktionary" alt="Vercel">
</a>
<a href="https://kwiktionary.vercel.app/about/license">
    <img alt="GitHub License" src="https://img.shields.io/github/license/jake-anto/kwiktionary">
</a>

</p>

---

## Key Features

- 📚 Massive database of over **1.2 million** entries
- ⚡ Fast and responsive interface
- 📱 Progressive Web App (PWA) support
- 🌙 Dark mode support
- ~~🌐 Multi-language support~~ _(feature is planned)_

## Screenshots

<p align="center">
<img src="https://raw.githubusercontent.com/jake-anto/kwiktionary/refs/heads/dev/public/screenshots/phone-dark-term.png" alt="Kwiktionary Screenshot" height="400" />
  
<img src="https://raw.githubusercontent.com/jake-anto/kwiktionary/refs/heads/dev/public/screenshots/wide-dark.png" alt="Kwiktionary Screenshot" height="400" />

</p>

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/jake-anto/kwiktionary
cd kwiktionary
pnpm install # or npm install
```

### Development

To start the development server, run:

```bash
pnpm dev # or npm run dev
```

This will start the server on `http://localhost:3000`.

### Production

Before starting the production server, you need to build the sitemaps. Run the following command for that:

```bash
python sitemap/generator.py
```

This will generate the sitemaps in the `public/sitemaps` directory.

To start the production server, run:

```bash
pnpm build # or npm run build
pnpm start # or npm run start
```

This will build the project and start the server on `http://localhost:3000` in production mode.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Also see the [license page](https://kwiktionary.vercel.app/about/license) for more information.

### Linguistic data

The linguistic data is derived from the [Wiktionary](https://www.wiktionary.org/) project. The data is dual-licensed under the:

- [Creative Commons Attribution-ShareAlike 3.0 Unported License](https://creativecommons.org/licenses/by-sa/3.0/)
- [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)

### Data extraction

The data is extracted from a [Wiktionary dump](https://dumps.wikimedia.org/enwiktionary/) using [`wiktextract`](https://github.com/tatuylonen/wiktextract).

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) file for details on how to contribute to this project. Please make sure to follow the [Code of Conduct](CODE_OF_CONDUCT.md) when contributing.
