import moment from "moment";
import { UserDetailsModel } from "../models/UserDetails";

const UserDetails: React.FC<{
  userDetails: UserDetailsModel;
}> = ({ userDetails }) => {
  const { username, shopName, avatarSrc, postedAt } = userDetails;
  var postedAtAgo = moment.duration(moment().diff(postedAt)).humanize();
  return (
    <>
      <div className="flex flex-row w-full justify-start items-center gap-4 px-4 pt-8">
        <img
          className="h-[48px] w-[48px] rounded-[30px]"
          src={avatarSrc}
          alt={shopName}
        />
        <div className="flex flex-col justify-start gap-1">
          <div className="text-[16px] text-start font-semibold">
            {shopName ? shopName : username}{" "}
          </div>
          <div className="flex flex-row justify-between gap-1">
            <p className="text-[14px] text-blue-800">{username}</p>
            <div className="text-[14px] font-bold text-light-gray">&#183;</div>
            <div className="text-[14px] text-light-gray">{postedAtAgo}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
