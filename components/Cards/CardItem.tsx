import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { CardProps } from "./types";
import { ScreenWidth } from "../shared";
import {colors} from "../colors";

import card_bg from "../../assets/backgrounds/bg2.png";
import RegularText from "../Texts/RegularText";
import SmallTexts from "../Texts/SmallTexts";
import {View} from "react-native";

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: ${ScreenWidth * 0.67}px;
  background-color: ${colors.accent};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
  flex: 1;
`;

// minute 20:02: https://www.youtube.com/watch?v=68l7wyHw97Y

const CardItem: FunctionComponent<CardProps> = (props) => {

    const handlePress = () => {

    };
    return (
        <CardBackground source={card_bg}>
            <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
                <TouchableView>
                    <CardRow>
                        <RegularText>
                            ******{props.accountNo.slice(6, 10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{ flex: 3 }}>
                            <SmallTexts
                                textStyles={{ marginBottom: 5, color: colors.graylight }}
                            >
                                Total Balance:
                            </SmallTexts>

                            <RegularText textStyles={{ fontSize: 19 }}>
                                ${props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo} />
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    );
};

export default CardItem;