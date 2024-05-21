import { View, Text } from "react-native";
import React, { useEffect } from "react";

import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated";
import styled from "@emotion/native";

const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const Description = styled.Text`
  font-weight: 200;
  font-size: 16px;
`;

const Box = styled.View`
  background-color: #fff;
  border-radius: 8px;
  min-height: 50px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default function BoxAnimated({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  const fadeInOpacity = useSharedValue(0);

  const fadeIn = () => {
    fadeInOpacity.value = withTiming(1, {
      duration: delay,
      easing: Easing.linear,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeInOpacity.value, // Use the value directly
    };
  });

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Animated.View style={[animatedStyle]}>
      <Box>
        <Title>{label}</Title>
        <Description>{value}</Description>
      </Box>
    </Animated.View>
  );
}
