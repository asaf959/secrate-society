import Timer from "../timer";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <img
        className="elImage"
        src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=45/https://statics.myclickfunnels.com/image/1834160/file/a05b966efda2bc4d5179a4985ae6e6b3.png"
        width={321}
        height={106}
        alt="Header Image"
      />

      <div className="timer">
        Discount expires in <Timer />
      </div>
    </div>
  );
}

export default Header;
