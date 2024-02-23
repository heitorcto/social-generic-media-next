import { Post } from "../interfaces/post";
import Skeleton from "./skeleton";

interface PostsProps {
    posts: Post[] | null;
}

export default function Posts({ posts }: PostsProps) {
    return (
        <>
            {posts ? (
                posts.map((post) => (
                    <div className="container mx-auto flex justify-center my-12 p-5" key={post.id}>
                        <div className="card w-full lg:w-5/12 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="font-semibold text-md">
                                        {post.userName}
                                        <div className="text-xs">
                                            {String(post.posted_at)}
                                        </div>
                                    </div>
                                </h2>
                                <p className="mt-3">{post.content}</p>
                            </div>
                            <div className="ml-3 flex items-center gap-3 p-2">
                                <div>
                                    <button className="btn btn-square no-animation">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <button className="btn no-animation">See coomments</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <Skeleton />
            )}
        </>
    );
}
