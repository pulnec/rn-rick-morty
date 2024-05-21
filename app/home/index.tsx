import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import useCharacters from "@/common/hooks/useCharacters";
import styled from "@emotion/native";
import { ICharacterItem } from "@/common/services/services.props";
import Button from "@/components/Button/Button";
import SearchBar from "@/components/SearchBar/SearchBar";

const width = Dimensions.get('window').width;

const Main = styled.View`
   flex: 1;
   padding: 8px;
`;

const Container = styled.Pressable`
  display: "flex";
  align-items: center;
  border-width: 0.5px;
  border-color: #c3c3c3;
  width: ${width / 2};
  margin: 2px;
  border-radius: 15px;
  flex: 1;
`;

const BottomButton = styled.View`
  position: "absolute";
  bottom: 45px;
`;

const Avatar = styled.ImageBackground`
  width: 100%;
  height: 120px;
`;

const Info = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

const Header = styled.View`
  height: 50px;
`;

export default function Home({ navigation }: any) {
  const {
    characters,
    getCharactersValues,
    isLastPage,
    loading,
    getCharactersByName,
  } = useCharacters();

  const renderItem = (item: ICharacterItem) => {
    return (
      <Container onPress={() => navigation.navigate('Detail', { item })}>
        <Avatar
          source={{ uri: item.image }}
          imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
        />
        <Info>
          <Text>{item.name}</Text>
        </Info>
      </Container>
    );
  };

  return (
    <Main>
      <Header>
        <SearchBar onValue={getCharactersByName} />
      </Header>
      <FlatList
        data={characters}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({ item }) => {
          return renderItem(item);
        }}
      />
      {!isLastPage && (
        <BottomButton>
          <Button
            onPress={getCharactersValues}
            disabled={loading}
            title="Mostrar más"
            loading={loading}
          />
        </BottomButton>
      )}
    </Main>
  );
}
