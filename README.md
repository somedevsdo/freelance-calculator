# Freelance Calculator

A Next.js site to calculate how much you'd need to earn as a freelancer to match your current wage and benefits as an employee.

---

## Getting Started

This repo uses [PNPM](https://pnpm.io). To get up and running, use the following commands.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To create a production version of the project, run:

```bash
pnpm build
```

## Prettier and ESLint

The project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to lint the code. These are checked on commit.

## Jest

To run all unit tests and view the coverage report:

```bash
pnpm test
```

To watch tests:

```bash
pnpm test:watch
```

## Playwright

The project includes [Playwright](https://playwright.dev/) for end-to-end tests. These tests are only run in CI, so they should be checked manually to save CI minutes.

```bash
pnpm run test:ui
```
