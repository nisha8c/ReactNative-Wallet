import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { AmountProps } from "./types";
import { colors} from "../colors";
import RegularText from "../Texts/RegularText";
import SmallTexts from "../Texts/SmallTexts";

const AmountSectionBackground = styled.View`
  width: 100%;
  padding-top: 5px;
  align-items: center;
  flex: 1;
`;

const AmountSection: FunctionComponent<AmountProps> = (props) => {
    return (
        <AmountSectionBackground>
            <SmallTexts
                textStyles={{
                    color: colors.secondary,
                    marginBottom: 15
                }}
            >
                Total Balance
            </SmallTexts>
            <RegularText
                textStyles={{
                    color: colors.secondary,
                    fontSize: 28
                }}
            >
                {props.balance}
            </RegularText>
        </AmountSectionBackground>
    );
};

export default AmountSection;