
import { FormEvent, ChangeEvent, useState } from "react"

import * as S from "./styles"

import Modal from "react-modal"
import { Button } from "../Button";

import { IExclusionModalProps } from "./types";
import { colors } from "../../utils/colors";
import { toastMessage } from "../../utils/toastMessage";

import { useDispatch } from "react-redux"
import { deleteUser } from "../../features/Users";

export const ExclusionModal = ({ isOpen, id, onRequestClose, handleCloseModal }: IExclusionModalProps) => {

    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(deleteUser({ id: id }))

        toastMessage({
            message: 'Task removed',
            type: 'error'
        })
        handleCloseModal()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <S.Container>
                <h3>Are you sure you want to delete this item?</h3>
                <div className='button-box'>
                    <Button
                        width="110px"
                        height="30px"
                        type="submit"
                        onClick={handleCloseModal}
                    >
                        Cancel
                    </Button>
                    <Button
                        width="110px"
                        height="30px"
                        type="submit"
                        onClick={handleRemove}
                    >
                        Ok
                    </Button>
                </div>
            </S.Container>
        </Modal >
    )
}
