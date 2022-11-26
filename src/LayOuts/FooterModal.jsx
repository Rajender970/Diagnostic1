import { TiSocialFacebook } from "react-icons/ti";
import { TfiTwitter } from "react-icons/tfi";
import { FiYoutube } from "react-icons/fi";
import { BsApple } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";

import { footerVariables } from "../variables/FooterVariables";
const FooterModal = () => {
  // const [data] = props.data;
  return (
    <div className="footer-body">
      <div className="body1">
        {footerVariables.map((a, i) => (
          <div className="body-column">
            {a.map((data, j) => {
              if (j == 0) return <p style={{ fontSize: "small" }}>{data}</p>;
              return <p>{data}</p>;
            })}
          </div>
        ))}
        <div className="body-column">
          <p style={{ fontSize: "small" }}>Services</p>
          <div
            className="social-media-icons"
            style={{
              textAlign: "start",
              justifyContent: "flex-start",
              margin: "11px -6px",
            }}
          >
            <TiSocialFacebook />
            <TfiTwitter />
            <FiYoutube />
          </div>
          <p>Need Help?</p>
          <p>+91{"  "}9876665487</p>
        </div>
        <div className="body-column">
          <p style={{ fonSize: "small" }}>Our App</p>
          <div className="store-app">
            <div>
              <BsApple />
            </div>
            <div>
              <p style={{ fontSize: "xx-small" }}>Download on the </p>
              <p style={{ marginTop: "-19px" }}>App store</p>
            </div>
          </div>
          <div className="store-app">
            <div>
              <BsFillPlayFill />
            </div>
            <div>
              <p style={{ fontSize: "xx-small" }}>Connect it on </p>
              <p style={{ marginTop: "-19px" }}>App store</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default FooterModal;
