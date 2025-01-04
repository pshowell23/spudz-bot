import { CronJob } from 'npm:cron';
import { SpudzBotBlueskyService } from "./bluesky/bluesky.service.ts";

const BSKY = new SpudzBotBlueskyService()

async function main() {
  await BSKY.login();
  await BSKY.goodMorning();
}

main();

// const job = new CronJob('0 7 * * *', main);

// job.start();