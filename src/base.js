import styled from 'styled-components/native'
import * as Base from 'native-base'
import {
  system,
  compose,
  typography,
  space,
  color,
  border,
  height
} from 'styled-system'

const elevation = system({
  prop: 'elevation',
  cssProperty: 'elevation',
})

const styleText = compose(
  space,
  color,
  typography
)

const styleView = compose(
  space,
  color,
  border,
  height
)

const View = styled(Base.View)(styleView)
const Button = styled(Base.Button)(styleView, elevation)
const Badge = styled(Base.Badge)(styleView)

const Text = styled(Base.Text)(styleText)
const Label = styled(Base.Label)(styleText)
const Icon = styled(Base.Icon)(styleText)
const Fab = styled(Base.Fab)(styleText)
const H1 = styled(Base.H1)(styleText)
const H2 = styled(Base.H2)(styleText)
const H3 = styled(Base.H3)(styleText)
const Input = styled(Base.Input)(styleText)
const Textarea = styled(Base.Textarea)(styleText)

Button.defaultProps = { elevation: 0 }

export {

  View,
  Button,
  Icon,
  Badge,
  Fab,

  // Typography
  Text,
  H1,
  H2,
  H3,

  // Form
  Label,
  Input,
  Textarea

}
