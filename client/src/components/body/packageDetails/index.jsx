import Card from "../../card";
import "./style.css";

function PackageDetail() {
  return (
    <div className="container_package">
      <div className="content1">
        <img
          className="package_img"
          src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1834850/file/8e464021e729766a4fe75683e5a008f4.jpeg"
          alt="img"
        />
        <span className="obsession">
          Everything is easier when you understand her deepest obsession...
        </span>
        <div className="unordered_list">
          <ul>
            <li>
              <i
                id="tick_icon"
                data-page-element="IconNode"
                className="fa-fw fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa fa-check id-6Z-pvDgD8-123"
                contentEditable="false"
                style={{ color: "rgb(165, 116, 55)" }}
              ></i>
              Create attraction and desire in less than 35 minutes​...
            </li>
            <li>
              <i
                id="tick_icon"
                data-page-element="IconNode"
                className="fa-fw fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa fa-check id-6Z-pvDgD8-123"
                contentEditable="false"
                style={{ color: "rgb(165, 116, 55)" }}
              ></i>
              Make her chase you without having to do ANYTHING...
            </li>
            <li>
              <i
                id="tick_icon"
                data-page-element="IconNode"
                className="fa-fw fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa fa-check id-6Z-pvDgD8-123"
                contentEditable="false"
                style={{ color: "rgb(165, 116, 55)" }}
              ></i>
              Earn her respect and admiration with my 3 step formula...
            </li>
            <li>
              <i
                id="tick_icon"
                data-page-element="IconNode"
                className="fa-fw fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa fa-check id-6Z-pvDgD8-123"
                contentEditable="false"
                style={{ color: "rgb(165, 116, 55)" }}
              ></i>
              Join a tribe of ambitious men around the world...
            </li>
            <li>
              <i
                id="tick_icon"
                data-page-element="IconNode"
                className="fa-fw fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa fa-check id-6Z-pvDgD8-123"
                contentEditable="false"
                style={{ color: "rgb(165, 116, 55)" }}
              ></i>
              Learn​ hypnosis techniques that you can apply on a daily basis...
            </li>
            <li>
              <i
                id="tick_icon"
                data-page-element="IconNode"
                className="fa-fw fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa_icon fa fa-check id-6Z-pvDgD8-123"
                contentEditable="false"
                style={{ color: "rgb(165, 116, 55)" }}
              ></i>
              Make her crave your attention...
            </li>
          </ul>
        </div>
        <img
          className="package_img"
          src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1834851/file/dbf5e071525a7c0fa39e81ae63ce4079.jpg"
          alt="img1"
        />
      </div>
      <div className="content2">
        <h1>What you are about to get...</h1>
        <div className="cards">
          <Card>
            <h2>The Secret Obsession Library...</h2>
            <div className="formula">
              I will show you how to apply the dopamine formula with ANY
              woman... You will also get real-life video examples and step by
              step instructions to use them in your own life...
            </div>
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1839573/file/a185441c567f2e706cbb3b9759438c17.png"
              alt="img3"
              width={520}
              height={292}
              className="card-img"
            />
          </Card>
          <Card>
            <h2>Everything You NEED To Know About The Female Mind...</h2>
            <div className="formula">
              I'm not holding anything back here... I am literally giving
              EVERYTHING I found after 10 years of psychological research and
              experimentation...
            </div>
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1835349/file/9018a806774ed038a3947d0a4efdd1ab.png"
              alt="img3"
              width={520}
              height="auto"
              className="card-img"

            />
          </Card>
          <Card>
            <h2>Audio Hypnosis Meditations...</h2>
            <div className="formula">
              I created a hypnosis meant to give listeners complete control of
              their emotions and dramatically increased confidence... I
              personally created this for myself, but decided to share them here
              after the life changing results I got...
            </div>
            <img
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1835348/file/1e9018f14767e2bf672bb52d391c6333.png"
              alt="img3"
              width={520}
              height="auto"
              className="card-img"

            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default PackageDetail;
