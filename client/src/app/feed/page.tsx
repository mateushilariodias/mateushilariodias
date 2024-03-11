"use client";

import FeedHeader from "@/components/FeedHeader";
import FeedMain from "@/components/FeedMain";
import FeedSideBar from "@/components/FeedSideBar";

function Feed() {
    return (
        <main>
            <FeedHeader />
            <div className="w-full flex justify-start pt-10 bg-zinc-100">
                <FeedSideBar />
                <FeedMain />
            </div>
        </main>
    );
}
export default Feed;