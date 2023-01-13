import { Button, Modal, Input, ModalHeader, ModalOverlay, ModalContent, ModalFooter, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import { ITodos } from "../../types/todo";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  change: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  action: () => void;
  title: string;
  value: ITodos;
};

export const IModal: React.FC<Props> = ({ title, value, change, action, isOpen, onOpen, onClose }) => {
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={value.title}
              onChange={(e) => {
                change(e, "title");
              }}
              mb="10px"
              placeholder="제목"
            />
            <Input
              value={value.content}
              onChange={(e) => {
                change(e, "content");
              }}
              placeholder="내용"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={action}>
              Save
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
