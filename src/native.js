import styled from 'styled-components/native'
import { Animated } from 'react-native'
import {
  compose,
  space,
  border,
  size,
  color,
  typography
} from 'styled-system'

const styleText = compose(
  space,
  color,
  typography
)

const styleView = compose(
  space,
  color,
  border,
  size
)

const Image = styled.Image(styleView)

/**
 * Animated
 */

const { ScrollView, FlatList, SectionList } = Animated

const AnimatedText = styled(Animated.Text)(styleText)
const AnimatedView = styled(Animated.View)(styleView)
const AnimatedImage = styled(Animated.Image)(styleView)

export {
  Image,
  AnimatedText,
  AnimatedView,
  AnimatedImage,
  ScrollView as AnimatedScrollView,
  FlatList as AnimatedFlatList,
  SectionList as AnimatedSectionList
}
