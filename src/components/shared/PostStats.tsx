import { Models } from "appwrite";
import React from "react";

type PostStatsPorps = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: PostStatsPorps) => {
  return (
    <div className="flex items-center justify-between z-20">
      <div className="flex gap-2 mr-5">
        <img
          src="/assets/icons/like.svg"
          alt="like"
          width={20}
          height={20}
          onClick={() => {}}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">0</p>
      </div>
      <div className="flex gap-2">
        <img
          src="/assets/icons/save.svg"
          alt="save"
          width={20}
          height={20}
          onClick={() => {}}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PostStats;
