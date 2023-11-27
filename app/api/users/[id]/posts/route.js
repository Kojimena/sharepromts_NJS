import Prompt from "@/models/prompt";
import { connectToDatabase } from "@/utils/database";

export const GET = async (request, {params}) => {
    try {
        await connectToDatabase();
        const prompts = await Prompt.find({
            cretor: params.id
        }).populate("creator"); //populate makes sure that the creator field is populated with the user data

        return new Response(JSON.stringify(prompts), { status: 200 });

    } catch (error) {
        return new Response("Failed to fetch prompts", { status: 500 });
    }
}