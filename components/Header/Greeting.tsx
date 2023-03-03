import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import {StyleProp, TextStyle} from "react-native";

import RegularText from "../Texts/RegularText";
import SmallTexts from "../Texts/SmallTexts";
import {colors} from "../colors";

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    sunTextStyle?: StyleProp<TextStyle>;
};
const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <StyledView>
            <RegularText
                textStyles={[
                    {
                        color: colors.secondary,
                        fontSize: 22,
                    },
                    props.mainTextStyles,
                ]}
            >
                {props.mainText}
            </RegularText>

            <SmallTexts
                textStyles={[
                    {
                        color: colors.graydark,
                    },
                    props.sunTextStyle,
                ]}
            >
                {props.subText}
            </SmallTexts>
        </StyledView>
    );
};

export default Greeting;