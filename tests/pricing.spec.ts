import { test } from '@playwright/test';

//TESTES FEITOS NA PAGINA DE PREÇO DO GITHUB.

test('get the complete', async ({ page }) => { //Teste para clicar no botão de get the complete
  await page.goto('https://github.com/pricing?ref_loc=search'); 
  await page.getByRole('heading', { name: 'Get the complete developer' }).click();
});

test('join for free', async ({ page }) => { //Teste para clicar no botão de join for free
 await page.goto('https://github.com/pricing?ref_loc=search'); 
 await page.getByRole('link', { name: 'Join for free' }).first().click();
});

test('continue with team', async ({ page }) => { //Teste para clicar no botão de continue with team
 await page.goto('https://github.com/pricing?ref_loc=search'); 
 await page.getByRole('link', { name: 'Continue with Team' }).first().click();
});

test('start a free trial', async ({ page }) => { //Teste para clicar no botão de start a free trial
 await page.goto('https://github.com/pricing?ref_loc=search'); 
 await page.getByRole('link', { name: 'Start a free trial' }).first().click();
});

test('compare all features', async ({ page }) => { //Teste para clicar no botão de compare all features
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('link', { name: 'Compare all features' }).click();
});  
 
test('read the case study', async ({ page }) => { //Teste para clicar no botão de read the case study
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('link', { name: 'Read the case study' }).click();
});

test('code workflow', async ({ page }) => { //Teste para clicar no botão de code workflow
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('heading', { name: 'Code workflow' }).click();
});  
 
test('github copilot', async ({ page }) => { //Teste para clicar no botão de github copilot
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('link', { name: 'GitHub Copilot Starting at $' }).click();
});

test('codespaces', async ({ page }) => { //Teste para clicar no botão de codespaces
 await page.goto('https://github.com/pricing?ref_loc=search');  
 await page.getByRole('link', { name: 'Codespaces Starting at $0.18' }).click();
});

test('large file', async ({ page }) => { //Teste para clicar no botão de large file
  await page.goto('https://github.com/pricing?ref_loc=search');  
  await page.getByRole('link', { name: 'Large File Storage $5 per' }).click();
});
