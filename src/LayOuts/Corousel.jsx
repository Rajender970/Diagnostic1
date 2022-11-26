import Carousel from "react-bootstrap/Carousel";

function Corousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrO-5uPIVtPTkmtxHRqkOVaPEbOpntc_UCtA&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kV6xCElWcnzLUitzX8hNr_J__5NcxDXttQ&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRB_j1EeS_Qzj34MreRO5MS7hPVysKWSPOQ&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;
