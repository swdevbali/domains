// @flow

import { connect } from 'react-redux'

import { sayHelloAsync } from '../action/hello'
import { Button } from '../component/button' 

const mapStateToProps = (state) => {
    return {
        label: 'Say hello dikirim secara asinkronus'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(sayHelloAsync(101)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Button)
