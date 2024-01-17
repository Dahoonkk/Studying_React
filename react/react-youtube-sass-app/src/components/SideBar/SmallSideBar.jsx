import { AiFillHome } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css"; //반드시 필요
import { Tooltip as ReactTooltip } from "react-tooltip";

const SmallSideBar = () => {
  return (
    <aside className="small_sidebar">
      <div className="small_sidebar_container">
        <Link to="/" tooltip-data-id="sidebar" tooltip-data-content="Home">
          <div className="sidebar_icon_container">
            <AiFillHome size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Home</h4>
          </div>
        </Link>
        <Link to="/" tooltip-data-id="sidebar" tooltip-data-content="Explore">
          <div className="sidebar_icon_container">
            <FaCompass size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Explore</h4>
          </div>
        </Link>
        <Link
          to="/"
          tooltip-data-id="sidebar"
          tooltip-data-content="Subscriptions"
        >
          <div className="sidebar_icon_container">
            <MdSubscriptions size={23} className="sidebar_icon" />
            <h4 className="sidebar_text">Subscriptions</h4>
          </div>
        </Link>
      </div>
      <ReactTooltip 
        id="sidebar"
        place="bottom"
      />
    </aside>
  );
};

export default SmallSideBar;
