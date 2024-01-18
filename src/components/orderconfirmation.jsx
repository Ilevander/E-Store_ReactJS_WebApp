import React from "react";
import styled from "styled-components";

const OrderConfirmation = () => {
    return (
        <ConfirmationContainer>
            <ConfirmationTitle>Order Confirmation</ConfirmationTitle>
            <ConfirmationText>Thanks for placing an order</ConfirmationText>
        </ConfirmationContainer>
    );
};

export default OrderConfirmation;

const ConfirmationContainer = styled.div`
    text-align: center;
    margin: 50px;
`;

const ConfirmationTitle = styled.h2`
    font-size: 2em;
    color: #333;
`;

const ConfirmationText = styled.p`
    font-size: 1.2em;
    color: #555;
`;
