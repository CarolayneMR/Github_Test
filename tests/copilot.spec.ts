import { test, expect } from '@playwright/test';

//TESTES NAS PAGINAS DO GITHUB COPILOT.

//1. 
test('Entrar na pagina copilot', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Explore GitHub Copilot' }).click();
  await expect(page).toHaveURL('https://github.com/features/copilot'); 
});

//2.
test('tela de plans', async ({ page }) => {
  await page.goto('https://github.com/features/copilot');
  await page.getByTestId('single-btn-copilot-plans').click();
  await expect(page).toHaveURL('https://github.com/features/copilot/plans'); 
});

//3.
test('pagina da pesquisa feita', async ({ page }) => {
  await page.goto('https://github.com/features/copilot');
  await page.getByRole('link', { name: 'Read the research' }).click();
  await expect(page).toHaveURL('https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/');
});

//4.
test('trust Center teste do link', async ({ page }) => {
  await page.goto('https://github.com/features/copilot');
  await page.getByRole('link', { name: 'Visit the GitHub Copilot' }).click();
  await expect(page).toHaveURL('https://github.com/trust-center');
});

//5.
test('heading do visit', async ({ page }) => {
  await page.goto('https://github.com/features/copilot');
  await page.getByRole('link', { name: 'GitHub Codespaces' }).click();
  await expect(page).toHaveURL('https://github.com/features/codespaces');
});

//6.
test('titulo da pagina', async ({ page }) => {
  await page.goto('https://github.com/features/copilot');
  await expect(page).toHaveTitle(/GitHub Copilot/);
});

//7.
test('problem heading', async ({ page }) => {
  await page.goto('https://github.com/features/copilot');
  await page.getByRole('heading', { name: 'Problem' }).click();
  await expect(page.getByRole('heading', { name: 'problem' })).toBeVisible();
});

//8.
test('solution heading', async ({ page }) => {
  await page.goto('https://github.com/features/copilot');
  await page.getByRole('heading', { name: 'Solution' }).click();
  await expect(page.getByRole('heading', { name: 'Solution' })).toBeVisible();
});

//9.
test('enterprise', async ({ page }) => {
  await page.goto('https://github.com/features/copilot');
  await page.getByRole('link', { name: 'GitHub Enterprise' }).click();
  await expect(page).toHaveURL('https://github.com/enterprise');
});

//10.
test('copilot e vscode', async ({ page }) => {
  await page.goto('https://github.com/features/copilot');
  await page.getByRole('link', { name: 'VS Code' }).click();
  await expect(page).toHaveURL('https://marketplace.visualstudio.com/items?itemName=GitHub.copilot');
});