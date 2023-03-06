import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { BalanceCardProps } from "./types";
import {colors} from "../colors";

import card_bg from "../../assets/backgrounds/bg2.png";
import RegularText from "../Texts/RegularText";
import SmallTexts from "../Texts/SmallTexts";
import {View} from "react-native";

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: 100%;
  background-color: ${colors.accent};
  border-radius: 25px;
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

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {

    const handlePress = () => {

    };
    return (
        <CardBackground source={card_bg}>

                <TouchableView>
                    <CardRow>
                        <RegularText>
                            ******{props?.accountNo?.slice(6, 10)}
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

        </CardBackground>
    );
};

export default BalanceCard;