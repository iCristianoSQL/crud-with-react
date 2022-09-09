import { ModalProps } from "../../utils/@types";

export interface IEditModalProps extends ModalProps {
    id: number;
    handleCloseModal: () => void;
}