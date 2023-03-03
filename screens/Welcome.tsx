import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Container } from "../components/shared"
import {colors} from "../components/colors";
import background from "../assets/backgrounds/bg1.png";
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";


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
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <BigText>Best Way to Track Your Money</BigText>
                </BottomSection>
            </WelcomeContainer>
        </>
    );
};

export default Welcome;