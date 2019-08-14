import styled from 'styled-components/native'
import { View } from './base'
import {
  compose,
  style,
  flexDirection,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  width,
  order,
  alignSelf,
  flexBasis
} from 'styled-system'

const Flex = styled(View)(
  compose(
    flexDirection,
    alignItems,
    alignContent,
    justifyContent,
    flexWrap
  )
)

Flex.defaultProps = { flexDirection: 'row' }

const flexGrow = style({
  prop: 'flexGrow'
})

const flexShrink = style({
  prop: 'flexShrink'
})

const Box = styled(View)(
  compose(
    flexGrow,
    flexShrink,
    width,
    order,
    alignSelf,
    flexBasis
  )
)

export {
  Flex,
  Box
}
