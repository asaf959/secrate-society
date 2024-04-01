// import Payment from "../../stripe/Payment";
import Payment from "../../../Payment";
import "./style.css";

function Pricing() {
  return (
    <div className="container">
      <div className="content">
        <span className="discover">
          Discover the secrets that make women obsessed TODAY!
        </span>
        <span className="join">
          Join over <b>277</b> men who learnt this secret and got what they
          wanted from dating and relationships
        </span>
        <span className="Hypnosis">
          Hypnosis is nothing but the art of irresistible persuasion...
        </span>
        <span className="freedom">
          Join The Social Freedom <br />
          Secret Society Today...
        </span>
        {/* <span></span> */}
        <img
          src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1839573/file/a185441c567f2e706cbb3b9759438c17.png"
          alt="videos"
          className="elImage2"
        />

        {/* <span className="cancellation">
          Try it risk free for $7, cancel any time
        </span>
        <span className="monthly">
          <span style={{ textDecoration: "underline" }}>ONLY</span> if you
          decide to stay, it's $47/mo
        </span>
        <span className="free_trial">
          T7-Day Risk Free Trial only available HERE...
          <br />
          You will NEVER get this offer again.
        </span> */}

        <div
          style={{
            width: "500px",
            
            padding:"24px",
            height: "auto",
            backgroundColor: "#fff",
            borderRadius: "32px",
            marginBottom:"10px"
          }}
        >
          <Payment />
          {/* payment method */}
        </div>

        <div>
          <i
            data-page-element="IconNode"
            id="icon"
            className="fa-fw fa_icon fa_prepended id-IconNode fas fa-lock"
          ></i>
          <span className="pay">Pay safe and secure</span>
        </div>

        <span className="foot">
          By continuing you agree that if you stay after the 7 day trial you
          will be charged $47 per month until you cancel. You can cancel any
          time by email or through our website. The discount you have been given
          today is extremely rare, so you only have this opportunity today and
          on this page only. If you're serious about transforming your life,
          look at it like an extremely serious investment... Learn more about
          cancellation and refund policy in Subscription terms.
        </span>
      </div>
    </div>
  );
}

export default Pricing;
  