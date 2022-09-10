import { ReactNode } from "react"

export interface IEmptyPost {
    id?: number;
    name?: string;
    title?: string;
    content?: string;
    children?: ReactNode;
    time?: string | undefined;
}

export interface ISetModalProps {
    setModalEdit: {
        handleOpenEditModal: () => void;
        handleCloseEditModal: () => void;
    };
    setModalExcluse: {
        handleOpenExcluseModal: () => void;
        handleCloseExcluseModal: () => void;
    }
}