import { View, StyleSheet, useWindowDimensions, Animated } from 'react-native'
import React from 'react'

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: 'row', height: 64 }}>
      {
        data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 35, 10],
            extrapolate: "clamp"
          })
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.1, 1, 0.1],
            extrapolate: "clamp"
          })

          return (
            <Animated.View key={i.toString()} style={[styles.dot, { width: dotWidth, opacity }]} />
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2B557C',
    marginHorizontal: 6,
  }
})

export default Paginator