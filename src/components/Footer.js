import FooterModal from "../LayOuts/FooterModal";
function Footer() {
  return (
    <div className="footer">
      <FooterModal />
      <div style={{ color: "white" }}>
        <p style={{ fontSize: "small" }}>&copy;Company. All Rights Reserved</p>
      </div>
    </div>
  );
}
export default Footer;
