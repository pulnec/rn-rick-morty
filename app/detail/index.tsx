import { View, Text } from "react-native";
import React, { useEffect } from "react";
import styled from "@emotion/native";
import BoxAnimated from "@/components/BoxAnimated/BoxAnimated";
import AvatarAnimated from "@/components/AvatarAnimated/AvatarAnimated";

const Container = styled.View`
  padding: 12px;
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-bottom: 180px;
`;

const labels:{[key:string] : string} = {
    name: 'Nombre',
    species: 'Especie',
    gender: 'Genero',
}

export default function Detail({ route }: any) {
  const info = route.params.item;
  const elements = ["name", "species", "gender"];

  return (
    <Container>
      <AvatarContainer>
        <AvatarAnimated image={info.image} />
      </AvatarContainer>

      {elements.map((label, index) => {
        const delay = 400;
        return (
          <BoxAnimated
            key={index}
            label={labels[label]}
            value={info[label]}
            delay={(delay + 500) * index}
          />
        );
      })}
    </Container>
  );
}
