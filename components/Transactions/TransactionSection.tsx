import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { TransactionSectionProps } from "./types";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallTexts from "../Texts/SmallTexts";
import TransactionItem from "./TransactionItem";

const TransactionSectionBackground = styled.View`
  width: 100%;
  padding: 10px;
  flex: 2;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
 width: 100%
`;

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    return (
        <TransactionSectionBackground>
            <TransactionRow style={{ marginBottom: 25 }}>
                <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
                    Transaction
                </RegularText>
                <SmallTexts textStyles={{ color: colors.secondary }}>
                    Recent
                    <Ionicons name={"caret-down"} size={13} color={colors.graydark} />
                </SmallTexts>
            </TransactionRow>

            <TransactionList
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
                }}
                keyExtractor={({ id }: any) => id.toString()}
                renderItem={({ item }: any) => <TransactionItem {...item} />}
            />
        </TransactionSectionBackground>
    );
};

export default TransactionSection;