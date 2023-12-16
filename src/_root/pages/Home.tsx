import { useEffect } from "react";
import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import {
  useGetPeopleUsers,
  useGetPosts,
  useGetRecentPosts,
} from "@/lib/react-query/queries";
import { Models } from "appwrite";
import { useInView } from "react-intersection-observer";
import { useUserContext } from "@/context/AuthContext";
import UserCard from "@/components/shared/UserCard";

const Home = () => {
  const { ref, inView } = useInView();
  const { data: infinitePosts, fetchNextPage, hasNextPage } = useGetPosts();
  const {
    data: creators,
    isPending: isUserLoading,
    isError: isErrorCreators,
  } = useGetPeopleUsers();
  const { user } = useUserContext();
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (!posts) {
    return (
      <div className="w-full h-full flex-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-1 flex-col gap-9 w-full mt-10">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard key={post.caption} post={post} />
              ))}
            </ul>
          )}
        </div>

        {hasNextPage && (
          <div className="mt-10" ref={ref}>
            <Loader />
          </div>
        )}
      </div>
      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} className="w-[210px]" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
