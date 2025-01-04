import { CronJob } from 'npm:cron';
import { SpudzBotBlueskyService } from "./bluesky/bluesky.service.ts";
import { SpudzBotDiscordService } from "./discord/discord.service.ts";

const BSKY = new SpudzBotBlueskyService()
const DISCORD = new SpudzBotDiscordService()

async function main() {
  await BSKY.login();
  await BSKY.goodMorning();
}

main();

// const job = new CronJob('0 7 * * *', main);

// job.start();