import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetPeopleUsers } from "@/lib/react-query/queries";
const AllUsers = () => {
  const { data: creators, isPending: isUserLoading } = useGetPeopleUsers(10);
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/people.svg"
            alt="people"
            width={36}
            height={36}
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        </div>

        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="flex flex-1 justify-center mt-3">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className="px-3 py-3">
                <UserCard user={creator} className="w-[270px]" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
