import styled from 'styled-components/native'
import {
  compose,
  space,
  color,
  borders,
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
  borders,
  width,
  height
)

const Grid = styled(BaseGrid)(styleGrid)
const Col = styled(BaseCol)(styleGrid)
const Row = styled(BaseRow)(styleGrid)

// Col.defaultProps = { height: '100%' }

export {
  Grid,
  Col,
  Row
}
