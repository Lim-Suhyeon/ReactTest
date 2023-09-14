import React,{ useState, useEffect } from "react";
import styled, { css, keyframes } from 'styled-components';

function Modal({ children, visible, onClose }: PropsType) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (visible) {
            setOpen(true);
        } else {
            setTimeout(() => setOpen(false), 150);
        }
    }, [visible]);

    if (!open) {
        return null;
    }
    
    return (
        <ModalSection className='wrap_modal' visible={visible}>
            <div className='cont_modal'>
                <div className='header'>
                    <button className='btn_close' onClick={onClose}>X</button>
                </div>
                <div className='content'>
                    <p>모달창입니다.</p>
                </div>
            </div>    
        </ModalSection>
    );
}

// animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// components
const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

const Background = styled.div<{ visible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => modalSettings(props.visible)}
`;

const ModalSection = styled.div<{ visible: boolean }>`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  padding: 16px;
  ${(props) => modalSettings(props.visible)}
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`;

const Content = styled.div`
  padding: 16px 0;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export default Modal;
