import {test} from '@playwright/test';
import path from 'node:path';

test('upload via custom button', async ({page}) => {
    await page.goto('https://www.remove.bg/uploads');

    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.waitForTimeout(5000);
    await page.getByRole('button', {name: 'Upload Image'}).click();

    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, 'testing.jpeg'));

    await page.waitForTimeout(5000);
    await page.close();

});