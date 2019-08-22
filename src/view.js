import styled from 'styled-components/native'
import { View } from './base'
import { AnimatedView } from './native'
import {
  compose,

  // Flex Parent
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,

  // Flex Child
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,

  // Others
  width,
  layout,
  position
} from 'styled-system'

const Flex = styled(View)(
  compose(
    alignItems,
    alignContent,
    justifyItems,
    justifyContent,
    flexWrap,
    flexDirection
  )
)
Flex.defaultProps = { flexDirection: 'row' }

const Box = styled(View)(
  compose(
    flexGrow,
    flexShrink,
    flexBasis,
    justifySelf,
    alignSelf,
    order,
    width
  )
)

const Area = styled(View)(layout)
const Absolute = styled(View)(position)
Absolute.defaultProps = { position: 'absolute' }
const Relative = styled(View)(position)
Relative.defaultProps = { position: 'relative' }

const AnimatedArea = styled(AnimatedView)(layout)
const AnimatedAbsolute = styled(AnimatedView)(position)
AnimatedAbsolute.defaultProps = { position: 'absolute' }
const AnimatedRelative = styled(AnimatedView)(position)
AnimatedRelative.defaultProps = { position: 'relative' }

export {
  Flex,
  Box,

  Area,
  Absolute,
  Relative,

  AnimatedArea,
  AnimatedAbsolute,
  AnimatedRelative
}
