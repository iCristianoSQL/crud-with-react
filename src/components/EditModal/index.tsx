
import { FormEvent, ChangeEvent, useState } from "react"

import * as S from "./styles"

import Modal from "react-modal"
import { Button } from "../Button";
import TextArea from "../TextArea";
import TextInput from "../TextInput";

import { IEditModalProps } from "./types";
import { colors } from "../../utils/colors";
import { toastMessage } from "../../utils/toastMessage";

import { useDispatch } from "react-redux"
import { updateUserName } from "../../features/Users";

export const EditModal = ({ isOpen, id, onRequestClose, handleCloseModal }: IEditModalProps) => {
    const [inputValue, setInputValue] = useState('')
    const [textValue, setTextValue] = useState('')

    const dispatch = useDispatch()

    const CardsValue = {
        getInputValue: (event: ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value)
        },

        getTextValue: (event: ChangeEvent<HTMLTextAreaElement>) => {
            setTextValue(event.target.value)
        }
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        dispatch(updateUserName({ id: id, title: inputValue, content: textValue }))
        setTextValue('')
        setInputValue('')

        handleCloseModal()
        toastMessage({
            message: 'Updated task',
            type: 'success'
        })
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <S.Container onSubmit={handleSubmit}>
                <h3>Edit item</h3>
                <TextInput
                    label="Title"
                    type="text"
                    width="95%"
                    className="title-input"
                    onChange={CardsValue.getInputValue}

                />
                <TextArea label="Content" width="95%" onChange={CardsValue.getTextValue} />
                <Button
                    width="110px"
                    height="30px"
                    type="submit"
                    color={colors.primary[1]}
                    background={colors.primary[0]}
                    disabled={!inputValue && !textValue}
                >
                    Save
                </Button>
            </S.Container>
        </Modal >
    )
}
