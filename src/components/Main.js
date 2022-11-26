import Search from "../pages/Search";
import Corousel from "../LayOuts/Corousel";
import TestModal from "../LayOuts/TestModal";
import HealthPackage from "../LayOuts/HealthPackage";
import BookedTests from "../LayOuts/TopBookedTests";
function Main() {
  return (
    <div className="main">
      <div className="main-search">
        <Search />
        <div className="search">
          <form>
            <input type="text" placeholder="fgffhghhhh" />
          </form>
        </div>
        <div className="search-button">
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
      <div className="main-body">
        <div className="Corousel">
          <Corousel />
        </div>
        <div className="tests">
          <TestModal />
        </div>
        <div
          className="health-Packages"
          style={{ margin: "0px -155px", backgroundColor: "lightgray" }}
        >
          <HealthPackage />
        </div>
        <div className="top-tests">
          <BookedTests />
        </div>
      </div>
    </div>
  );
}
export default Main;
