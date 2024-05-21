import { View, Text, TextInput } from "react-native";
import React, { useEffect } from "react";
import styled from "@emotion/native";
import useDebounce from "@/common/hooks/useDebounce";

const Input = styled.TextInput`
    border-color: #c3c3c3;
    border-width: 0.5px;
    height: 45px;
    padding: 0px 10px;
    border-radius: 15px;
    background-color: #fff;
`;

interface ISearchBarProps {
    onValue?: (value: string) => void;
}

export default function SearchBar(props: ISearchBarProps) {

  const [text, onChangeText] = React.useState("");

  const debounceValue = useDebounce(text, 700);

  useEffect(() => {
    props.onValue && props.onValue(text);
  },[debounceValue]);

  return (
    <View>
      <Input onChangeText={onChangeText} value={text} placeholder="Buscar por nombre..." placeholderTextColor="#c3c3c3"/>
    </View>
  );
}
