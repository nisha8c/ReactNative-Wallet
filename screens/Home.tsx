import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import CardSection from "../components/Cards/CardSection";
import mastercard_logo from "../assets/cards/MasterCard.png";
import visacard_logo from "../assets/cards/visacard.png";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
    const cardsData = [
        {
            id: 1,
            accountNo: "8887243673",
            balance: 30000.17,
            alias: "Work Debit",
            logo: mastercard_logo,
        },
        {
            id: 2,
            accountNo: "8887352743",
            balance: 60000.26,
            alias: "Personal Prepaid",
            logo: visacard_logo,
        },
        {
            id: 1,
            accountNo: "8800287164",
            balance: 10000.44,
            alias: "School Prepaid",
            logo: mastercard_logo,
        },
    ];
    return (
        <HomeContainer>
            <StatusBar style={"dark"} />
            <CardSection data={cardsData} />
        </HomeContainer>
    );
};

export default Home;