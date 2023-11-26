import UserCard from "./UserCard";

const RightSideBar = () => {
  return (
    <div className="min-w-[400px] bg-dark-2 hidden lg:flex flex-col px-6 py-4 justify-between">
      <div className="h3-bold md:h2-bold w-full text-left bg-dark-2 p-4 text-light-1">
        Top Creators
      </div>

      <div className="mt-10 grid-flow-col">
        <ul className="grid grid-cols-2">
          <li>
            <UserCard />
          </li>
          <li>
            <UserCard />
          </li>
          <li>
            <UserCard />
          </li>
          <li>
            <UserCard />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
