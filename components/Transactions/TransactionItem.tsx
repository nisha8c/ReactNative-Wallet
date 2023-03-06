import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallTexts from "../Texts/SmallTexts";
import { TransactionProps } from "./types";
import TransactionAvi from "./TransactionAvi";
import {View} from "react-native";

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
    flex: 1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
  return (
      <TransactionRow>
          <LeftView>
              <TransactionAvi
                  icon={props.art.icon}
                  background={props.art.background}
              />
              <View style={{ marginLeft: 10 }}>
                  <RegularText
                      textStyles={{
                          color: colors.secondary,
                          textAlign: "left",
                          marginBottom: 5,
                      }}
                  >
                      {props.title}
                  </RegularText>

                  <SmallTexts
                      textStyles={{
                          textAlign: "left",
                          color: colors.graydark,
                      }}
                  >
                      {props.subtitle}
                  </SmallTexts>
              </View>
          </LeftView>
          <RightView>
              <RegularText
                  textStyles={{
                      color: colors.secondary,
                      textAlign: "right",
                      marginBottom: 5,
                  }}
              >
                  {props.amount}
              </RegularText>

              <SmallTexts
                  textStyles={{
                      textAlign: "right",
                      color: colors.graydark,
                  }}
              >
                  {props.date}
              </SmallTexts>
          </RightView>
      </TransactionRow>
  );
};

export default TransactionItem;