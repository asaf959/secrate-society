import Body from "../../components/body";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./style.css";

function LandingPage() {
  return (
    <div className="app-container">
      <Header />
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
