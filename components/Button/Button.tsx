import { View, Text, ButtonProps, ActivityIndicator } from "react-native";
import React from "react";
import styled, { css } from "@emotion/native";

const ButtonRN = styled.Pressable`
  align-items: center;
  background-color: #000;
  align-self: center;
  padding: 8px 15px;
  border-radius: 8px;
`;

interface IButtonProps extends ButtonProps {
  loading?: boolean;
}

export default function Button(props: IButtonProps) {
  return (
    <ButtonRN {...props}>
      {props.loading ? (
        <ActivityIndicator testID="loading-button" size="small" color="#fff" />
      ) : (
        <Text testID="title-button" style={{ color: "#fff" }}>{props.title}</Text>
      )}
    </ButtonRN>
  );
}
