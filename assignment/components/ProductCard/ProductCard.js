import React from 'react';
import Image from 'next/image';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

export const ProductCard = (props) => {
  const { title, price, imageSource, description, category, quantity } =
    props.productInfo;
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
      <div class="card w-100 h-100 card-for-hover ">
        <div className="p-4">
          <Image
            src={imageSource}
            alt=""
            title=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        {/* <img src={imageSource} className="card-img-top p-2" alt="..." /> */}
        <div class="card-body">
          <div className="d-flex justify-content-start">
            <h4 className="text-start">Title: {title} </h4>
          </div>

          <p className="justify-content-start d-flex text-start">
            Price: {price} BDT
          </p>
        </div>
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="btn btn-link text-decoration-none"
        >
          Quick view
        </button>
      </div>

      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            {title}
          </h5>
        </div>
        <ModalBody>
          <div>
            <div className="p-4">
              <Image
                src={imageSource}
                alt=""
                title=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div class="card-body">
              <h6 className="justify-content-start d-flex text-start">
                Category: {category}
              </h6>
              <p className="justify-content-start d-flex text-start">
                Description: {description}
              </p>
              <h6 className="justify-content-start d-flex text-start">
                Price: {price} BDT
              </h6>
              <p className="justify-content-start d-flex text-start">
                Quantity: {quantity}
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Go to product page
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
