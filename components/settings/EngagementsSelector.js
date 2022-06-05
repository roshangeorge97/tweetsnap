import { PopoverBtns, PopoverBtnText } from "../Popover";

import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdTripOrigin } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import { ShowLikes } from "./EngagementFunctions";

export const EngagementsSelector = ({ props }) => {
  return (
    <div className="p-3 flex flex-wrap justify-center ml-auto mr-auto overflow-auto whitespace-nowrap items-center">
      <div className="md:mb-2 md:ml-0 ml-2">
        <ShowLikes props={props} />

        <PopoverBtns>
          <AiOutlineRetweet className="ml-auto mr-auto" />
          <PopoverBtnText>Retweets</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>
          <FaRegComment className="ml-auto mr-auto" />
          <PopoverBtnText>Comments</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>
          <BsClockFill className="ml-auto mr-auto" />
          <PopoverBtnText>Time/Date</PopoverBtnText>
        </PopoverBtns>
      </div>
      <div className="md:mb-2 md:ml-0 ml-2">
        <PopoverBtns>
          <MdTripOrigin className="ml-auto mr-auto" />
          <PopoverBtnText>Source</PopoverBtnText>
        </PopoverBtns>
      </div>
    </div>
  );
};
