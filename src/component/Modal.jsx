import React, { useState } from "react";
import { Button, Modal } from "antd";

const Modal_ = ({ datum }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, price, shortDescription, quantity, image } = datum;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal} className="mt-3">
        View detail
      </Button>
      <Modal
        title="Information Shoes"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex justify-between items-center gap-3">
          <div>
            <img src={image} alt="anh thong tin" className="w-full" />
          </div>
          <div>
            <span className="font-bold mb-3 inline-block ">
              Name: <span className="font-medium">{name}</span>
            </span>
            <br />
            <span className="font-bold mb-3 inline-block">
              Description:{" "}
              <span className="font-medium">{shortDescription}</span>
            </span>
            <br />
            <span className="font-bold mb-3 inline-block">
              Price: $<span className="font-medium text-red-500">{price}</span>
            </span>
            <br />
            <span className="font-bold mb-3 inline-block">
              Quantity: <span className="font-medium">{quantity}</span>
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Modal_;
