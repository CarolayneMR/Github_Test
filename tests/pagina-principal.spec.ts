import { test , expect } from '@playwright/test';

//TESTES FEITOS NA PAGINA PRINCIPAL DO GITHUB.

//1.
test('titulo da pagina de Sign in', async ({ page }) => { 
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Sign in' }).click();
   await expect(page).toHaveTitle(/Sign in to GitHub/);
});

//2. 
test('titulo da pagina Join', async ({ page }) => { 
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Sign up' }).click();
   await expect(page).toHaveTitle(/Join GitHub/);
});

//3. 
test('titulo da pagina de planos', async ({ page }) => { 
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Start a free enterprise trial' }).first().click();
   await expect(page).toHaveTitle(/Choose an Enterprise plan/);
});

//4. 
test('teste da caixa de sign up', async ({ page }) => { 
   await page.goto('https://github.com/');
   await page.locator('#hero_user_email').click();
   await page.locator('#hero_user_email').fill('teste@teste.com');
   await page.getByRole('button', { name: 'Sign up for GitHub' }).first().click();
   await page.getByLabel('Enter your email*').fill('teste@teste.com');
   await expect(page).toHaveURL('https://github.com/signup?user_email=teste%40teste.com&source=form-home-signup');
});

//5. 
test('github actions', async ({ page }) => { 
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Discover GitHub Actions' }).click();
   await expect(page).toHaveURL('https://github.com/features/actions');
});

//6. 
test('github mobile download', async ({ page }) => { 
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Download GitHub Mobile' }).click();
   await expect(page).toHaveURL('https://github.com/mobile');
});

//7. 
test('teste de url de: discussions github', async ({ page }) => { 
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Jump into GitHub Discussions' }).click();
   await expect(page).toHaveURL('https://github.com/features/discussions');
});

//8.
test('titulo de discussions github', async ({ page }) => { 
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Jump into GitHub Discussions' }).click();
   await expect(page).toHaveTitle(/GitHub Discussions/);
});

//9.
test('pull requests', async ({ page }) => { 
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Check out pull requests' }).click();
   await expect(page).toHaveURL('https://github.com/features/code-review');
});

//10.
test ('heading visivel', async ({ page }) => {
   await page.goto('https://github.com/');
   await page.getByRole('heading', { name: 'GitHub Copilot empowers' }).click();
   await expect(page.getByRole('heading', { name: 'GitHub Copilot empowers' })).toBeVisible();
});