import React,{ useState } from "react";
import Modal from "../component/Modal";

function ModalGuide() {

  // 모달창 노출 여부 state
  const [isOpen, setModalOpen] = useState(false);
  // 모달창 노출
  const showModal = () => {
      setModalOpen(true);
  };
  
  return (
    <div className="guide_cont">
      <h2 className="guide_h2">Popup</h2>
      <div className="wrap_btn">
        <button type="button" className="btn_primary" onClick={showModal}>Alert</button>
      </div>
      <div className="wrap_btn">
        <button type="button" className="btn_primary" onClick={showModal}>Confirm</button>
      </div>
      {isOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
}
export default ModalGuide;
