import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";

import CardSection from "../components/Cards/CardSection";
import mastercard_logo from "../assets/cards/MasterCard.png";
import visacard_logo from "../assets/cards/visacard.png";
import portrait1 from "../assets/portraits/1.jpeg";
import portrait2 from "../assets/portraits/2.jpeg";
import portrait3 from "../assets/portraits/3.jpeg";

import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";


import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent<Props> = () => {
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

    const sendMoneyData = [
        {
            id: 1,
            amount: "1679.32",
            name: "Tim D",
            background: colors.primary,
            img: portrait1
        },
        {
            id: 2,
            amount: "1979.32",
            name: "Kunal D",
            background: colors.tertiary,
            img: portrait2
        },
        {
            id: 3,
            amount: "3679.32",
            name: "Bjarne E",
            background: colors.accent,
            img: portrait3
        },
    ];

    return (
        <HomeContainer>
            <StatusBar style={"dark"} />
            <CardSection data={cardsData} />
            <TransactionSection data={transactionData} />
            <SendMoneySection data={sendMoneyData} />
        </HomeContainer>
    );
};

export default Home;