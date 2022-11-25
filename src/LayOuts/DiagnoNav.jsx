import { TiSocialFacebook } from "react-icons/ti";
import { TfiTwitter } from "react-icons/tfi";
import { FiYoutube } from "react-icons/fi";
const DiagnoNav = () => {
  return (
    <div className="images">
      <div className="consult-doctor" style={{ display: "flex" }}>
        <img
          id="doc-img"
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Doctor"
        />
        <h3>Consult a Doctor</h3>
      </div>
      <div className="order-medicine">
        <img
          id="order-img"
          src="https://t4.ftcdn.net/jpg/01/03/68/05/360_F_103680509_WWoBIrLoN4JyznnVb42MF9KnkEumi7w4.jpg"
          alt="oreder"
        />
        <h3>Order Medicine</h3>
      </div>
      <div className="diagno">
        <img
          id="diagno-img"
          src="https://www.shutterstock.com/image-photo/doctor-hand-taking-blood-sample-260nw-1114244621.jpg"
          alt="Diano Image"
        />
        <h3>Book for Diagnostic</h3>
      </div>
      <div className="social-media-icons">
        <TiSocialFacebook />
        <TfiTwitter />
        <FiYoutube />
      </div>
    </div>
  );
};
export default DiagnoNav;
