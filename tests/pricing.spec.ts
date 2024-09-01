import { test, expect } from '@playwright/test';

//TESTES FEITOS NA PAGINA DE PREÇO DO GITHUB.

//1.
test('get the complete', async ({ page }) => { 
  await page.goto('https://github.com/pricing?ref_loc=search'); 
  await page.getByRole('heading', { name: 'Get the complete developer' }).click();
  await expect(page).toHaveTitle(/Pricing · Plans for every developer/);
});

//2.
test('join for free', async ({ page }) => { 
 await page.goto('https://github.com/pricing?ref_loc=search'); 
 await page.getByRole('link', { name: 'Join for free' }).first().click();
 await expect(page).toHaveURL('https://github.com/signup');
});

//3.
test('continue with team', async ({ page }) => { 
 await page.goto('https://github.com/pricing?ref_loc=search'); 
 await page.getByRole('link', { name: 'Continue with Team' }).first().click();
 await expect(page).toHaveURL('https://github.com/signup?return_to=%2Faccount%2Forganizations%2Fnew%3Fplan%3Dbusiness%26plan_duration%3Dyear');
});

//4.
test('start a free trial', async ({ page }) => {
 await page.goto('https://github.com/pricing?ref_loc=search'); 
 await page.getByRole('link', { name: 'Start a free trial' }).first().click();
 await expect(page).toHaveURL('https://github.com/organizations/enterprise_plan?ref_cta=Start%2520a%2520free%2520trial&ref_loc=card&ref_page=pricing');
});

//5.
test('compare all features', async ({ page }) => { 
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('link', { name: 'Compare all features' }).click();
 await expect(page).toHaveURL('https://github.com/pricing?ref_loc=search#compare-features');
});  

//6.
test('read the case study', async ({ page }) => { 
  await page.goto('https://github.com/pricing?ref_loc=search');
  await page.getByRole('tab', { name: 'Trustpilot' }).click();
  await page.getByRole('link', { name: 'Read the case study' }).click();
  await expect(page).toHaveURL('https://github.com/customer-stories/trustpilot');
});

//7.
test('code workflow', async ({ page }) => { 
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('heading', { name: 'Code workflow' }).click();
 await expect(page.getByRole('heading', { name: 'Code workflow' })).toBeVisible();
});  
 
//8.
test('verificando o acordeão de texto', async ({ page }) => { 
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.locator('summary').filter({ hasText: 'How do I view and manage my' }).click();
 await page.getByText('You can view your account\'s').click();
 await expect(page.getByText('You can view your account\'s')).toBeVisible();
});

//9.
test('codespaces', async ({ page }) => { 
 await page.goto('https://github.com/pricing?ref_loc=search');  
 await page.getByRole('link', { name: 'Codespaces Starting at $0.18' }).click();
 await expect(page).toHaveURL('https://github.com/features/codespaces');
});

//10.
test('verificando texto do spotify', async ({ page }) => { 
  await page.goto('https://github.com/pricing?ref_loc=search');  
  await page.getByRole('tab', { name: 'Spotify' }).click();
  await page.getByText('“People know what a pull').click();
  await page.getByText('— Laurent Ploix, Product').click();
  await expect(page.getByText('— Laurent Ploix, Product')).toBeVisible();
});