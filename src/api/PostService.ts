import axios from "axios";
import { Post } from "../models/Post";

export default class PostService {
    static async getAll(): Promise<Post[]> {
        const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    }
}