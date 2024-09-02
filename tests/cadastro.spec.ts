import { test, expect } from '@playwright/test';

//TESTES FEITOS NA PAGINA DE CADASTRO DO GITHUB.

//1.
test('nome da pagina', async ({ page }) => {
    await page.goto('https://github.com/signup');
    await expect(page).toHaveTitle(/Join GitHub/);
  });

//2.
test('teste com email invalido', async ({ page }) => {
    await page.goto('https://github.com/signup');
    await page.getByLabel('Enter your email*').click();
    await page.getByLabel('Enter your email*').fill('teste@com');
    await expect(page.getByText('Email is invalid or already')).toBeVisible();
});  

//3.
test('teste com email valido já cadastrado', async ({ page }) => {
    await page.goto('https://github.com/signup');
    await page.getByLabel('Enter your email*').click();
    await page.getByLabel('Enter your email*').fill('teste@gmail.com');
    await expect(page.getByText('The email you have provided')).toBeVisible();
});  

//4.
test('usando um email não cadastrado', async ({ page }) => {
    await page.goto('https://github.com/signup');
    await page.getByLabel('Enter your email*').click();
    await page.getByLabel('Enter your email*').fill('xaolinmatadordporco@gmail.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('Create a password*')).toBeVisible();
});  

//5.
test('alerta de senha curta', async ({ page }) => {
    await page.goto('https://github.com/signup');
    await page.getByLabel('Enter your email*').click();
    await page.getByLabel('Enter your email*').fill('xaolinmatadordporco@gmail.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByText('Create a password*').click();
    await page.getByLabel('Create a password*').fill('abc123');
    await expect(page.getByText('Password is too short')).toBeVisible();
    await expect(page.getByRole('alert')).toBeVisible();
});

//6.
test('alerta de senha fraca e comum', async ({ page }) => {
    await page.goto('https://github.com/signup');
    await page.getByLabel('Enter your email*').click();
    await page.getByLabel('Enter your email*').fill('xaolinmatadordporco@gmail.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByText('Create a password*').click();  
    await page.getByLabel('Create a password*').fill('123123123abcz');
    await expect(page.getByText('Password may be compromised')).toBeVisible();
    await expect(page.getByRole('alert')).toBeVisible();
});

//7.
test('já possui conta?', async ({ page }) => {
    await page.goto('https://github.com/signup');
    await expect(page.getByText('Already have an account?')).toBeVisible();
    await page.getByRole('link', { name: 'Sign in →' }).click();
    await expect(page).toHaveURL('https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsignup');
});

//8.
test('ir para pagina inicial', async ({ page }) => {
    await page.goto('https://github.com/signup');
    await page.getByRole('banner').getByLabel('Homepage').click();
    await expect(page).toHaveURL('https://github.com/');
});

//9.
test('teste do olhinho de esconder e mostrar senha', async ({ page }) => {
    await page.goto('https://github.com/signup');
    await page.getByLabel('Enter your email*').click();
    await page.getByLabel('Enter your email*').fill('xaolinmatadordporco@gmail.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Create a password*').fill('123123');
    await page.getByLabel('Show password').click();
    await expect(page.getByLabel('Hide password')).toBeVisible();
});

//10.
test('texto de termos', async ({ page }) => {
    await page.goto('https://github.com/signup');
    await expect(page.getByText('By creating an account, you')).toBeVisible();
    await page.getByRole('link', { name: 'Terms of Service' }).click();
});
