import { Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalFooter} from '@chakra-ui/react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { useDisclosure } from "react-use-disclosure";
import React from 'react';

const ModalComponent = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()
    const text = props.text

     return (
        <>
        <Button mt={4} onClick={onOpen}>
            {text}
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <LoremIpsum p={2} />
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>

        </>
    )
};

export default ModalComponent;
