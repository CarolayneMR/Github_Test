import { test } from '@playwright/test';

//TESTES FEITOS NA PAGINA PRINCIAPAL DO GITHUB.

test('sign in', async ({ page }) => { //Teste para clicar no botão de sign in
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Sign in' }).click();
});

test('sign up', async ({ page }) => { //Teste para clicar no botão de sign up
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Sign up' }).click();
});

test('free enterprise', async ({ page }) => { //Teste para clicar no botão de free enterprise
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Start a free enterprise trial' }).first().click();
});

test('sign up for github button', async ({ page }) => { //Teste para clicar no botão de sign up for github
   await page.goto('https://github.com/');
   await page.getByRole('button', { name: 'Sign up for GitHub' }).first().click();
});

test('github actions', async ({ page }) => { //Teste para clicar no botão de github actions
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Discover GitHub Actions' }).click();
});

test('github mobile', async ({ page }) => { //Teste para clicar no botão de github mobile
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Download GitHub Mobile' }).click();
});

test('discussions github', async ({ page }) => { //Teste para clicar no botão de discussions github
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Jump into GitHub Discussions' }).click();
});

test('pull requests', async ({ page }) => { //Teste para clicar no botão de pull requests
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Check out pull requests' }).click();
});

test('footer email', async ({ page }) => { //Teste para clicar no botão de footer email
   await page.goto('https://github.com/');
   await page.locator('#footer_user_email').click();
});

test('trusted', async ({ page }) => { //Teste para clicar no botão de trusted
   await page.goto('https://github.com/');
   await page.getByText('Trusted by the world’s').click();
});