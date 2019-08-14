import styled from 'styled-components/native'
import {
  compose,
  space,
  color,
  border,
  width,
  height
} from 'styled-system'

import {
  Grid as BaseGrid,
  Col as BaseCol,
  Row as BaseRow
} from 'react-native-easy-grid'

const styleGrid = compose(
  space,
  color,
  border,
  width,
  height
)

const Grid = styled(BaseGrid)(styleGrid)
const Col = styled(BaseCol)(styleGrid)
const Row = styled(BaseRow)(styleGrid)

export {
  Grid,
  Col,
  Row
}
