import Prompt from "@/models/prompt";
import { connectToDatabase } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDatabase();
        const prompts = await Prompt.find({}).populate("creator"); //populate makes sure that the creator field is populated with the user data

        return new Response(JSON.stringify(prompts), { status: 200 });

    } catch (error) {
        return new Response("Failed to fetch prompts", { status: 500 });
    }
}