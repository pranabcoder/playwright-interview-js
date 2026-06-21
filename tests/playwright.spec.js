import {test, expect} from '@playwright/test';
import 'dotenv/config';

test('Interact with ChatGPT API using Playwright request fixture', async ({request}) => {
    // Retrieve token securely from environment
    const apiKey = process.env.OPENAI_API_KEY;
    expect(apiKey).toBeTruthy();

    // Make the POST request to OpenAI's official chat completions endpoint
    const response = await request.post('https://api.openai.com/v1/chat/completions', {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        data: {
            model: 'gpt-4o',
            messages: [
                {
                    role: 'user',
                    content: 'What are the challenges faced in playwright testing?'
                }
            ],
            temperature: 0.1
        }
    });

    const raw = await response.text();
    console.log('status:', response.status());
    console.log('content-type:', response.headers()['content-type']);
    console.log('body preview:', raw.slice(0, 200000000000000000000));

    expect(response.ok()).toBeTruthy();

    const result = JSON.parse(raw);
    console.log('result:', result);
});
