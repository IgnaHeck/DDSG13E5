import { Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalFooter} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';

export default function ModalComponent(props) {
    const finalRef = React.useRef();
    const text = props.text;
    const actionButton = props.actionButton;
    const modalBody = props.modalBody;
    const title = props.title;
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
        <Button mt={4} onClick={handleOnClick}>
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
                <Button colorScheme='red'>{actionButton}</Button>
                <Button colorScheme='blue' mr={3} onClick={handleOnClick}>
                    Cancelar
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>

        </>
    )
};

