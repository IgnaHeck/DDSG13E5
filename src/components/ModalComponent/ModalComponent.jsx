import { Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalFooter} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';

export default function ModalComponent(props) {
    const finalRef = React.useRef();
    const text = props.text;
    const actionButton = props.actionButton;
    const cancelButton = props.cancelButton
    const modalBody = props.modalBody;
    const title = props.title;
    const aceptarButtonColor = props.aceptarButton || 'blue'
    const cancelarButtonColor = props.cancelarButton || 'blue'
    const [isOpen, setOpen] = useState(false);

    const handleOnClick = () => {
        if(!isOpen) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

     return (
        <>
        <Button mx={1} mt={0} onClick={handleOnClick}>
            {text}
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={handleOnClick}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                {title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               {modalBody}
            </ModalBody>

            <ModalFooter>
                <Button colorScheme={aceptarButtonColor}>{actionButton}</Button>
                <Button colorScheme={cancelarButtonColor} mx={2} onClick={handleOnClick}>{cancelButton}</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
};

