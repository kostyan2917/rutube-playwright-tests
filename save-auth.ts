import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({
    headless: false, // ОБЯЗАТЕЛЬНО
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rutube.ru', { waitUntil: 'load' });

  console.log('👉 Войди в аккаунт вручную в открывшемся браузере');
  console.log(
    '👉 Когда увидишь, что ты залогинен (аватар вместо "Войти"), нажми ENTER в терминале',
  );

  await new Promise((resolve) => process.stdin.once('data', resolve));

  await context.storageState({ path: 'auth.json' });

  console.log('✅ auth.json сохранён');

  await browser.close();
})();
