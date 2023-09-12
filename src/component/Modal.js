import React from "react";

function Modal({ setModalOpen, id, title, content, writer }: PropsType) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='wrap_modal'>
            <div className='cont_modal'>
                <div className='header'>
                    <button className='btn_close' onClick={closeModal}>X</button>
                </div>
                <div className='content'>
                    <p>모달창입니다.</p>
                </div>
            </div>    
        </div>
    );
}

export default Modal;
