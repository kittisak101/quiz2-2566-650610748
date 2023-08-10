import { Reply } from "./Reply";
import { comments } from "@comments";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        >
          {userImagePath}
        </img>
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username.name}</span>
          <br />
          <span>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{likeNum} คน</span>
          </div>
        </div>
      </div>
      {
        (Reply.map = { replies })
        /* map-loop render Reply component here */
      }
    </div>
  );
};
