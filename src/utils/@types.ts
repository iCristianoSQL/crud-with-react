export interface IToastMessage {
    message: string;
    type: 'error' | 'success';
}

export interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}