"use client";

import { Reply } from "@/components/Reply";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner name="Kittisak Bundit 650610748" />

        {/* Comment Example */}
        <Comment name="Lisa" />

        {/* Reply Example */}
        <Reply name="หมาน้อย" />

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
