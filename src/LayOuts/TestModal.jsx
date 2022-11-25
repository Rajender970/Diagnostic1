import { Tests } from "../variables/Variables";
const TestModal = () => {
  return (
    <div>
      <div className="test-bar">
        <div className="title">
          <h1>Popular Tests</h1>
          <button>View All</button>
        </div>
      </div>
      <div className="test-modal">
        {Tests.map((test) => (
          <div className="test">
            <div className="test-title">
              <h3>{test.title}</h3>
            </div>
            <p>{test.Description}</p>
            <hr />
            <div className="test-modal-footer">
              <div className="price">
                <p style={{ marginLeft: "-30px" }}>
                  <b>{test.offer_price}.00</b>
                </p>
                <div style={{ display: "flex", columnGap: "5px" }}>
                  <p>
                    <s>{test.original_price}</s>
                  </p>
                  <p style={{ color: "lightgreen" }}>
                    {((test.original_price - test.offer_price) /
                      test.original_price) *
                      100}
                    %off
                  </p>
                </div>
              </div>
              <div className="add-to-cart">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestModal;
