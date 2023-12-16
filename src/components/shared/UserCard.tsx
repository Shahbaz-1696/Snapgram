import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Models } from "appwrite";

type UserProps = {
  user: Models.Document;
  className: string;
};

const UserCard = ({ user, className }: UserProps) => {
  return (
    <div className={`m-2 user-card ${className}`}>
      <Link
        to={`/profile/${user.id}`}
        className="flex flex-col gap-4 items-center"
      >
        <img
          src={user.imageUrl || "/assets/images/profile-placeholder.svg"}
          alt="profile"
          className="w-14 h-14 rounded-full"
        />
        <p className="body-bold">{user.name}</p>
        <p className="small-regular text-light-3 text-center w-32">
          Followed by {user.username}
        </p>
        <Button className="shad-button_primary rounded-lg">Follow</Button>
      </Link>
    </div>
  );
};

export default UserCard;
