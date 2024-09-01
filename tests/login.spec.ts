import { test, expect } from '@playwright/test';

//TESTES FEITOS NA PAGINA DE LOGIN DO GITHUB.

//1. 
test('texto de sign in', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByRole('heading', { name: 'Sign in to GitHub' }).click();
  await expect(page.getByRole('heading', { name: 'Sign in to GitHub' })).toBeVisible();
});

//2
test('teste do icone para pagina inicial', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByLabel('Homepage').click();
  await expect(page).toHaveURL('https://github.com/');
});

//3
test('teste com email e senha errados', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('teste@test.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123123123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByText('Incorrect username or')).toBeVisible();
});

//4
test('ver se o batão de sign in ta visivel', async ({ page }) => {
  await page.goto('https://github.com/login');
  await expect(page.getByRole('button', { name: 'Sign in', exact: true })).toBeVisible();
});

//5
test('apagar o popout de alert', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('test@test.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('test123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByText('Sign in to GitHub Incorrect')).toBeVisible();
  await page.getByRole('button', { name: 'Dismiss this message' }).click();
  await expect(page.getByText('Sign in to GitHub Username or')).toBeVisible();
});

//6
test('pagina de Terms', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Terms' }).click();
  await expect(page).toHaveURL('https://docs.github.com/en/site-policy/github-terms/github-terms-of-service'); 
});

//7
test('ver se o criar conta ta visivel', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Create an account' }).click();
  await expect (page.getByRole('link', { name: 'Create an account' })).toBeVisible();
});

//8
test('testar se o URL leva até a tela de cadastro', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Create an account' }).click();
  await expect (page).toHaveURL('https://github.com/signup?source=login');
});

//9
test('passkey e navegador', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByRole('button', { name: 'Sign in with a passkey' }).click();
  await page.getByText('This browser or device is').click();
  await expect(page.getByText('This browser or device is')).toBeVisible();
});

//10
test('forget password teste', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await expect(page).toHaveURL('https://github.com/password_reset');
});
