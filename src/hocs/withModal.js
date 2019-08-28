import React, { useState } from 'react'
import {
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  BackHandler
} from 'react-native'
import {
  View,
  Flex
} from '../index'

export default function withModal(Child) {
  const Context = React.createContext()

  function CustomModal(props) {

    const [state, setState] = useState(() => {
      return {
        isShow: false,
        show: show => setState(state => ({ ...state, isShow: show }))
      }
    })

    useEffect(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => setState(state => ({ ...state, isShow: false }))
      )
      return () => {
        backHandler.remove()
      };
    }, [])

    return <Context.Provider value={state}>
      <View>
        <Modal
          transparent={true}
          visible={state.isShow}
          animationType="fade"
          height="100%">
          <View opacity={0.5} height="100%" bg="black.0"></View>
        </Modal>
        <Modal
          height="100%"
          animationType="slide"
          transparent={true}
          visible={state.isShow}
          {...props.modalProps}>
          <Flex flexDirection="column" height="100%">
            <TouchableWithoutFeedback onPress={() => state.show(false)}>
              <View
                opacity={0}
                flexGrow={1}
                bg="black.0"
                {...props.outsideProps}></View>
            </TouchableWithoutFeedback>
            <Child modal={state} {...props} />
          </Flex>
        </Modal>
        {props.children}
      </View>
    </Context.Provider>
  }

  function Opener({ children }) {
    return <Context.Consumer>
      {value => {
        return typeof children === 'function' ?
          children(value) :
          <TouchableOpacity onPress={() => value.show(true)}>
            {children}
          </TouchableOpacity>
      }}
    </Context.Consumer>
  }

  CustomModal.Opener = Opener
  return CustomModal
}