import "jsr:@std/dotenv/load";

export class SpudzBotDiscordService {
    goodMorning() {
        const body = {
            "content": "Good morning! :sun_with_face:"
        }
        console.log(JSON.stringify(body));
    }
}