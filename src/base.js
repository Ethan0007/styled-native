import styled from 'styled-components/native'
import {
  compose,
  space,
  color,
  border,
  height
} from 'styled-system'

import {
  View as BaseView,
  Button as BaseButton,
  Text as BaseText,
  Icon as BaseIcon,
  Badge as BaseBadge,
  Fab as BaseFab
} from 'native-base'

const styleText = compose(
  space,
  color
)

const styleView = compose(
  space,
  color,
  border,
  height
)

const View = styled(BaseView)(styleView)
const Button = styled(BaseButton)(styleView)
const Text = styled(BaseText)(styleText)
const Icon = styled(BaseIcon)(styleText)
const Badge = styled(BaseBadge)(styleText)
const Fab = styled(BaseFab)(styleText)

export {
  View,
  Button,
  Text,
  Icon,
  Badge,
  Fab
}
