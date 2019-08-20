import styled from 'styled-components/native'
import * as Base from 'native-base'
import {
  compose,
  space,
  color,
  border,
  height
} from 'styled-system'

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

const View = styled(Base.View)(styleView)
const Button = styled(Base.Button)(styleView)

const Text = styled(Base.Text)(styleText)
const Label = styled(Base.Label)(styleText)
const Icon = styled(Base.Icon)(styleText)
const Badge = styled(Base.Badge)(styleText)
const Fab = styled(Base.Fab)(styleText)
const H1 = styled(Base.H1)(styleText)
const H2 = styled(Base.H2)(styleText)
const H3 = styled(Base.H3)(styleText)
const Input = styled(Base.Input)(styleText)

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
  Input

}
