import React from "react"
import { ButtonContainer } from "./styles"

export const Buton = ({label, onClick}) => {
     return (
        <>
            <ButtonContainer onClick={onClick}>
                {label}
            </ButtonContainer>
        </>
    )
}