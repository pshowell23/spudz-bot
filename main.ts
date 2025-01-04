import { AtpAgent } from 'npm:@atproto/api';
import dotenv from 'npm:dotenv';
import { CronJob } from 'npm:cron';
import process from 'npm:process';

dotenv.config();

const agent = new AtpAgent({
  service: 'https://bsky.social'
})

async function main() {
  await agent.login({ identifier: process.env.BLUESKY_USERNAME, password: process.env.BLUESKY_PASSWORD });
  await agent.post({
    text: 'This is simply a test that Spudzbot is behaving as expected.'
  })
  console.log('Posted to Bsky.social')
}

main();

const job = new CronJob('0 7 * * *', main);

job.start();