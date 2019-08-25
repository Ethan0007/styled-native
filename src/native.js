import styled from 'styled-components/native'
import { Animated } from 'react-native'
import {
  compose,
  space,
  border,
  color,
  typography,
  width,
  height
} from 'styled-system'

const styleText = compose(
  space,
  color,
  typography
)

const styleView = compose(
  space,
  color,
  border
)

const styleImage = compose(
  space,
  border,
  width,
  height
)

const Image = styled.Image(styleImage)

/**
 * Animated
 */

const { ScrollView, FlatList, SectionList } = Animated

const AnimatedText = styled(Animated.Text)(styleText)
const AnimatedView = styled(Animated.View)(styleView)
const AnimatedImage = styled(Animated.Image)(styleImage)

export {
  Image,
  AnimatedText,
  AnimatedView,
  AnimatedImage,
  ScrollView as AnimatedScrollView,
  FlatList as AnimatedFlatList,
  SectionList as AnimatedSectionList
}
