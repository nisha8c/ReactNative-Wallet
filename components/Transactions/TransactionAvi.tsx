import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../colors";
import {TransactionProps, TransactonAviProps} from "./types";

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TransactionAvi: FunctionComponent<TransactonAviProps> = (props) => {
    return (
        <StyledView style={{ backgroundColor: props.background }}>
            <Ionicons name={props.icon} size={25} color={colors.white} />
        </StyledView>
    );
};

export default TransactionAvi;