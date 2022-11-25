import Search from "../pages/Search";
import Corousel from "../LayOuts/Corousel";
import TestModal from "../LayOuts/TestModal";
import HealthPackage from "../LayOuts/HealthPackage";
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
        <div className="health-Packages">
          <HealthPackage />
        </div>
      </div>
    </div>
  );
}
export default Main;
