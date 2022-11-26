import { TopTests } from "../variables/Variables";
const BookedTests = () => {
  return (
    <div>
      <div className="test-bar">
        <div className="title">
          <h4>Top Booked Tests</h4>
          <button>View All</button>
        </div>
      </div>
      <div className="test-modal">
        {TopTests.map((test) => (
          <div className="test">
            <div className="test-body">
              <div className="test-logo">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskx9XTpVvVbu97r_7DONq--zpFh42IzJ2Jg&usqp=CAU"
                  alt="Test Logo"
                />
              </div>
              <div className="test-title">
                <h6>
                  <strong>{test.title}</strong>
                </h6>
              </div>
              <p className="description">{test.Description}</p>
            </div>
            <hr />

            <div className="test-modal-footer">
              <div className="price">
                <p>
                  <b>₹{test.offer_price}.00</b>
                </p>
                <div className="price-values">
                  <p>
                    <s style={{ color: "gray" }}>₹{test.original_price}</s>
                  </p>
                  <p style={{ color: "green" }}>
                    {((test.original_price - test.offer_price) /
                      test.original_price) *
                      100}
                    %off
                  </p>
                </div>
              </div>
              <div className="add-to-cart">
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BookedTests;
