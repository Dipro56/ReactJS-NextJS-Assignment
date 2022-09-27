import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import styles from '../styles/Home.module.css';
import fsPromises from 'fs/promises';
import path from 'path';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function Home(props) {
  const { productList } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleYes = () => {
    setOpen(false);
  };

  const handleNo = () => {
    setOpen(false);
  };
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div className={styles.container}>
      <div className="d-flex justify-content-center mb-5 item-slide-in">
        <div className="container row card-body shadow-lg p-5 m-4">
          <h4 id="footballItem" className="m-4 text-center">
            All items list
          </h4>
          {productList.map((productInfo) => (
            <ProductCard
              key={productInfo.id}
              productInfo={productInfo}
            ></ProductCard>
          ))}

          <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
            <div className=" modal-header">
              <h5 className=" modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                aria-label="Close"
                className=" close"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <ModalBody>...</ModalBody>
            <ModalFooter>
              <Button
                color="secondary"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
              >
                Close
              </Button>
              <Button color="primary" type="button">
                Save changes
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = await fsPromises.readFile(filePath);
  const productList = JSON.parse(jsonData);

  return {
    props: productList,
  };
}
