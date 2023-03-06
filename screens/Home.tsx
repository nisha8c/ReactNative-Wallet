import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import CardSection from "../components/Cards/CardSection";
import mastercard_logo from "../assets/cards/MasterCard.png";
import visacard_logo from "../assets/cards/visacard.png";
import TransactionSection from "../components/Transactions/TransactionSection";

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

    const transactionData = [
        {
            id: 1,
            amount: "-$86.00",
            date: "14 Jan 2023",
            title: "Taxi",
            subTitle: "Uber Car",
            art: {
                background: colors.primary,
                icon: "car",
            },
        },
        {
            id: 2,
            amount: "-$786.00",
            date: "14 Feb 2023",
            title: "Shopping",
            subTitle: "NAKD",
            art: {
                background: colors.tertiary,
                icon: "cart",
            },
        },
        {
            id: 3,
            amount: "-$986.00",
            date: "1 Mar 2023",
            title: "Flight",
            subTitle: "London",
            art: {
                background: colors.accent,
                icon: "airplane",
            },
        },
    ];

    return (
        <HomeContainer>
            <StatusBar style={"dark"} />
            <CardSection data={cardsData} />
            <TransactionSection data={transactionData} />
        </HomeContainer>
    );
};

export default Home;