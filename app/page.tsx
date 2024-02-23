import { Suspense } from "react";
import CommentsModal from "./components/commentsModal";
import Navbar from "./components/navbar";
import Skeleton from "./components/skeleton";
import Posts from "./components/posts";

export default async function Home() {
    return (
        <>
            <Navbar />

            <section className="my-2 container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full p-5 lg:w-5/12">
                        <textarea className="textarea textarea-primary w-full" placeholder="Say something..." required></textarea>
                        <div className="flex justify-end">
                            <button className="btn btn-primary">Create post</button>
                        </div>
                    </div>
                </div >
            </section >

            <Suspense fallback={<Skeleton />}>
                <Posts />
            </Suspense>

            <CommentsModal />
        </>
    );
}
