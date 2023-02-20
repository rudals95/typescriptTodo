import { Button, Modal, Input, ModalHeader, ModalOverlay, ModalContent, ModalFooter, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import { ITodos } from "../../types/todo";
import { BsPlusCircle } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { ModalDiv } from "./style";

type Props = {
  isOpen: boolean;
  onOpen: (btn: string) => void;
  onClose: () => void;
  change: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  action: (id: any) => void;
  title: string;
  value: ITodos;
  modalStatus: boolean;
  formAction: (e: any) => void;
  fileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type PropsBoard = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  modalStatus: boolean;
  formAction: (e: any) => void;
};

export const IModal: React.FC<Props> = ({ title, value, isOpen, modalStatus, change, action, onOpen, onClose, formAction, fileChange }) => {
  return (
    <>
      <BsPlusCircle
        size="30px"
        color="rgb(64 189 68)"
        onClick={() => {
          onOpen("");
        }}
      />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {modalStatus ? (
            <ModalBody>삭제하시겠습니까?</ModalBody>
          ) : (
            <ModalBody>
              <form onSubmit={formAction}>
                <ModalDiv>
                  <div className="form-group filebox">
                    <label htmlFor="img_file">
                      <FaCamera size="30px" />
                    </label>
                    <input id="img_file" type="file" onChange={fileChange} />
                  </div>
                </ModalDiv>
              </form>
              <Input
                mt={"10px"}
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
          )}

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={formAction}>
              저장
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              취소
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const IModalBoard: React.FC<PropsBoard> = ({ title, isOpen, modalStatus, onClose, formAction }) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        {modalStatus ? <ModalBody>삭제하시겠습니까?</ModalBody> : <ModalBody>등록하시겠습니까?</ModalBody>}

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={formAction}>
            저장
          </Button>
          <Button colorScheme="red" onClick={onClose}>
            취소
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
