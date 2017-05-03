// @flow

import { connect } from 'react-redux'

import { sayHelloAsync } from '../action/hello'

const mapStateToProps = () => ({
    label: 'Say hello dikirim secara asinkronus'
})

const mapDispatchToProps = dispatch => ({
    handleClick: () => { dispatch(sayHelloAsync(101)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
