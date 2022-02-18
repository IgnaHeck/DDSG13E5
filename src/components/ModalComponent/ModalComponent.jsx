import { Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalFooter} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';

export default function ModalComponent(props) {
    const finalRef = React.useRef();
    const text = props.text;
    const data = props.data;
    const actionButton = props.actionButton;
    const cancelButton = props.cancelButton;
    const modalBody = props.modalBody;
    var isDisabled = props.isDisabled || false;
    var disableAfterAction = props.disableAfterAction || false;
    var disableIfCondition = props.disableIfCondition || false;
    const onActionClick = props.onActionClick;
    const title = props.title;
    const aceptarButtonColor = props.aceptarButton || 'blue'
    const cancelarButtonColor = props.cancelarButton || 'blue'
    const [isOpen, setOpen] = useState(false);
    const [isDisabledState, setDisabled ] = useState(isDisabled);


    const handleOnClick = () => {
        if(!isOpen) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    const handleOnActionClick = () => {
        console.log("HANDLE ON CLICK")
        console.log("Disable after action?",disableAfterAction)
        onActionClick(data);
        if(!isOpen) {
            setOpen(true)
        } else {
            setOpen(false)
        }
        if(disableAfterAction){
            setDisabled(true)
            console.log("Estado del boton:", isDisabledState)
        }
    }


     return (
        <>
        <Button isDisabled={isDisabledState || disableIfCondition} mx={1} mt={0} onClick={handleOnClick}>
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
                <Button colorScheme={aceptarButtonColor} onClick={handleOnActionClick}>{actionButton}</Button>
                <Button colorScheme={cancelarButtonColor} mx={2} onClick={handleOnClick}>{cancelButton}</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
};

