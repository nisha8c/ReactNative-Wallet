import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { SendMoneyProps } from "./types";
import RegularText from "../Texts/RegularText";
import SmallTexts from "../Texts/SmallTexts";
import Profile from "../Header/Profile";
import {ScreenWidth} from "../shared";
import {colors} from "../colors";

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
    return (
        <SendMoneyItemContainer
            underlayColor={colors.secondary}
            style={{ backgroundColor: props.background }}
            onPress={() => {
                alert("Send Money !")
            }}
        >
            <>
                <Profile img={props.img}
                         imgContainerStyle={{ marginBottom: 10 }}
                />
                <SmallTexts
                    textStyles={{
                        textAlign: "left",
                        color: colors.white,
                        fontSize: 12,
                    }}
                >
                    {props.name}
                </SmallTexts>

                <RegularText
                    textStyles={{
                        color: colors.white,
                        textAlign: "left",
                        fontSize: 13,
                    }}
                >
                    {props.amount}
                </RegularText>
            </>
        </SendMoneyItemContainer>
    );
};

export default SendMoneyItem;