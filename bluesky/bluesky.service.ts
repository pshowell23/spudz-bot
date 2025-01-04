import "jsr:@std/dotenv/load";

import { AtpAgent } from "npm:@atproto/api";

const agent = new AtpAgent({
    service: 'https://bsky.social'
});

export class SpudzBotBlueskyService {
    async login() {
        const user: string = Deno.env.get("BLUESKY_USERNAME") || '';
        const pass: string = Deno.env.get("BLUESKY_PASSWORD") || '';

        if (!user || !pass) {
            throw new Error("BLUESKY_USERNAME or BLUESKY_PASSWORD is not set in the environment.");
        }

        await agent.login({ identifier: user, password: pass });

        console.log('Logged in to Bsky.social');
    }
    
    async goodMorning() {
        try {
            await agent.post({
                text: 'Good morning friends!'
            });
        } catch {
            console.error('Failed to post to Bsky.social');
        }
    }
}