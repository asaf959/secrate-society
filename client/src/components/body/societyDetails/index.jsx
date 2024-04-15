import "./style.css"
import Card from "../../card";

function SocietyDetails() {
  console.log("Zain");
  return (
    <div className="society-details-container">
      <div className="button-container">
        <button className="custom-button" onClick={() => alert("Welcome to secret society")}>
          I AM READY TO JOIN THE SOCIAL FREEDOM SECRET SOCIETY
          <i className="fa-fw fa_icon fa_apended fas fa-angle-double-up"></i>
        </button>
      </div>
      <div className="card-container">
        <Card>
          <h1>Join the Social Freedom Secret Society to...</h1>
          <ul className="details-list">
            <li><i className="fa-fw fa_icon fa fa-check"></i>Find out what the female subconscious needs more than ANYTHING else...</li>
            <li><i className="fa-fw fa_icon fa fa-check"></i>Make her chase you without having to do ANYTHING...</li>
            <li><i className="fa-fw fa_icon fa fa-check"></i>Earn her respect and admiration with my 3 step formula...</li>
            <li><i className="fa-fw fa_icon fa fa-check"></i>Join a tribe of ambitious men around the world...</li>
            <li><i className="fa-fw fa_icon fa fa-check"></i>Learn hypnosis techniques that you can apply on a daily basis...</li>
            <li><i className="fa-fw fa_icon fa fa-check"></i>Make her crave your attention...</li>
          </ul>
        </Card>
      </div>
      <div className="joined-card">
        <div className="top-container">
          <div className="inner-container">
            <h1>This may be the turning point where your life changes forever...</h1>
            <p>10 Years ago I was lost in life and had no motivation... I knew how smart I was, yet I couldn't get the attention of the women I liked... After I found this secret, everything changed within a couple of weeks, and I am now ready to share it with you...</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="inner-container">
            <img src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1835521/file/ebd7f5abf4aa8b450b2f304719c93887.png" alt="img" />
            <span>Sasha Rachmaninoff</span>
            <div className="name">Professional Hypnotist<br />And Certified G...</div>
          </div>
        </div>
      </div>
      <div className="money-back-card">
        <Card>
          <img height={150} width={150} src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1835548/file/94f8feb4579fcf2880dccf5afc58c3be.png" alt="img" />
          <div className="title">Money Back Guarantee</div>
          <div className="description">
            If you decide to try this program but you don't like it, you can cancel any time, on top of that guarantee, if you think that what I talk about inside the program is not useful to you, and I've wasted your time, I will personally refund your 7 dollars...
          </div>
        </Card>
      </div>
      <div className="button-container">
        <button className="custom-button" onClick={() => alert("Welcome to secret society")}>
          I AM READY TO JOIN FOR ONLY $7 DOLLARS TODAY
          <i className="fa-fw fa_icon fa_apended fas fa-angle-double-up"></i>
        </button>
      </div>
      <div className="faq">
        <div className="heading">Frequently asked questions...</div>
        <span className="getting">I want this! What exactly am I getting?</span>
        <p>You're getting access to the most exclusive online community of ambitious men working to develop their social skills and improve themselves... You also get all of the materials you need to get started and learn the powerful skills of dark attraction and persuasion...</p>
        <span className="getting">How soon will I receive access to the program?</span>
        <p>As soon as your payment is confirmed, you will receive an email with an invitation to our private group and links to the video materials...</p>
        <span className="getting">What if I don't have a credit card?</span>
        <p>You can pay with any debit or credit card, if you don't have one, I recommend you get one ASAP because this offer is very limited in time...</p>
        <span className="getting">How can I cancel my membership?</span>
        <p>If you decide you no longer want to stay as a member, you can simply cancel from our course website, or you can email us at info@fluidconfidencesystem.com any time and we will cancel your membership no questions asked.</p>
      </div>
      <div className="button-container">
        <button className="custom-button" onClick={() => alert("Welcome to secret society")}>
          I AM READY TO JOIN FOR ONLY $7 DOLLARS TODAY
          <i className="fa-fw fa_icon fa_apended fas fa-angle-double-up"></i>
        </button>
      </div>
    </div>
  );
}

export default SocietyDetails;
