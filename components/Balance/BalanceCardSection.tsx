import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { BalanceCardProps } from "./types";
import BalanceCard from "./BalanceCard";

const BalanaceCardSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
    return (
        <BalanaceCardSectionBackground>
            <BalanceCard {...props} />
        </BalanaceCardSectionBackground>
    );
};
export default BalanceCardSection;