# Contributing to Kwiktionary

First of all, thank you for considering contributing to Kwiktionary! We appreciate your time and effort in helping us improve the project.

## Before you start

Please make sure to read the [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We expect all contributors to adhere to the guidelines outlined in the document.

## Reporting Bugs

We use GitHub Issues to track bugs and feature requests. If you encounter a bug:

1. **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/jake-anto/kwiktionary/issues).
2. If you're unable to find an open issue addressing your problem, [open a new issue](https://github.com/jake-anto/kwiktionary/issues/new/choose). Be sure to include as much relevant information as possible.
3. Use the Bug Report template if applicable. This will help us understand the issue better and speed up the resolution process.

Once you have reported an issue, please be patient. We will review it and get back to you as soon as possible. Thank you for taking the time to help us improve Kwiktionary!

## Feature Requests

If you have an idea for a new feature or improvement, we would love to hear it! Please follow these steps:

1. **Perform a cursory search** on the [Issue Tracker](https://github.com/jake-anto/kwiktionary/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
2. If you don't find an existing issue, [open a new one](https://github.com/jake-anto/kwiktionary/issues/new/choose).
3. Stick to the Feature Request template if applicable.
4. Provide a clear and detailed explanation of the feature, why it's useful, and potential implementation ideas.

## Pull Requests

The process described here has several goals:

- Maintain Kwiktionary's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible Kwiktionary
- Enable a sustainable system for Kwiktionary's maintainers to review contributions

Please follow these steps when submitting a pull request:

1. **Fork the repository** and create your branch from `dev`.
2. **Make your changes** and ensure that the commit messages are adhere to the guidelines mentioned [below].(#git-commit-messages).
3. If applicable, **test your changes** to ensure they work as expected. Add tests if necessary.
4. After making your changes, **run the linters** to ensure your code adheres to the project's style guidelines. You can do this by running `pnpm lint` or `npm run lint` in the project root.
5. **Issue a pull request** against the `dev` branch.

### Pull Request Checklist

Before submitting a PR, please ensure the following:

- [ ] You have read the [CONTRIBUTING.md](CONTRIBUTING.md) document.
- [ ] You have read the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
- [ ] Your code builds cleanly without any errors or warnings.
- [ ] You have updated the documentation if applicable.
- [ ] Your commit messages adheres to the guidelines mentioned [below](#git-commit-messages).
- [ ] The PR relates to _one_ specific bug or feature. Avoid bundling multiple changes in a single PR.
- [ ] You have linked the PR to the relevant issue (e.g., `Fixes #123`).

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.

### Code Styleguide

- **Formatting**: All code should be formatted using Prettier. Make sure Prettier uses the [config file](.prettierrc) in the root of the project.

#### Typescript

- **Linting**: All code should pass ESLint checks. You can run ESLint using `pnpm lint` or `npm run lint`.
- **Use proper types**: Always use the correct types for variables, function parameters, and return values. Do not use `any`.
- **Sort imports**.

## Development Setup

### Prerequisites

- Node.js (preferably the version specified in [`.nvmrc`](.nvmrc))
- Python 3.11 or higher (if you're making changes to the sitemap generator)
- A package manager like `pnpm` (recommended) or `npm`

### Installation

1. Fork the repository and clone it to your machine.
2. Navigate to the project directory (`cd kwiktionary`).
3. Install the dependencies using `pnpm install` or `npm install`.

### Running the development server

1. Start the development server using `pnpm dev` or `npm run dev`.
2. Open your browser and navigate the URL provided in the terminal (usually `http://localhost:3000`) to see Kwiktionary in action.

> [!IMPORTANT]
> If you've made changes to the sitemap generator, you may need to run the generator script to update the sitemap. Include the generated sitemap in your PR if applicable.

---

Thank you again for your interest in contributing!
