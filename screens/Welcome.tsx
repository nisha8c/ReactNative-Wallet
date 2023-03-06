import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Container } from "../components/shared"
import {colors} from "../components/colors";
import background from "../assets/backgrounds/bg1.png";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import SmallTexts from "../components/Texts/SmallTexts";
import RegularButton from "../components/Buttons/RegularButton";

import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Welcome">;


const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const Welcome: FunctionComponent<Props> = ({ navigation }) => {
    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <BigText
                        textStyles={{ width: "70%", marginBottom: 25 }}
                    >Best Way to Track Your Money
                    </BigText>

                    <SmallTexts
                        textStyles={{ width: "70%", marginBottom: 25}}
                    >
                        Best Payment Method, connects your money to your friends and family.
                    </SmallTexts>

                    <RegularButton onPress={() => { navigation.navigate("Home")}}>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    );
};

export default Welcome;