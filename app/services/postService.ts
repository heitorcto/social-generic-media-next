import { Post } from "../interfaces/post";

export async function getData(): Promise<Post[] | null> {
    try {
        const res = await fetch('http://localhost:3000/posts');
        
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;
    }
}