import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import styled from '@emotion/native';
import Animated, {
    useSharedValue,
    withTiming,
    Easing,
    useAnimatedStyle,
    interpolate,
    Extrapolation,
  } from "react-native-reanimated";

const Avatar = styled.ImageBackground`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

const { height } = Dimensions.get('window');
const initialPos = height + 150;

export default function AvatarAnimated({ image }: { image: string }) {
  
  const topPosition = useSharedValue(initialPos);

  const topIn = () => {
    topPosition.value = withTiming(10, {
      duration: 200,
      easing: Easing.linear,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
        transform: [{ translateY: topPosition.value }],
    };
  });

  useEffect(() => {
    topIn();
  },[]);

  return (
    <Animated.View style={[ { position: 'absolute' }, animatedStyle ]}>
      <Avatar
          source={{ uri: image }}
          imageStyle={{ borderRadius: 75 }}
        />
    </Animated.View>
  )
}