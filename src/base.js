import styled from 'styled-components/native'
import {
  compose,
  space,
  color,
  borders,
  height
} from 'styled-system'

import {
  View as BaseView,
  Text as BaseText,
  Icon as BaseIcon,
  Button as BaseButton,
} from 'native-base'

const styleText = compose(
  space,
  color
)

const styleView = compose(
  space,
  color,
  borders,
  height
)

const View = styled(BaseView)(styleView)
const Text = styled(BaseText)(styleText)
const Icon = styled(BaseIcon)(styleText)
const Button = styled(BaseButton)(styleView)

export {
  View,
  Text,
  Icon,
  Button
}
