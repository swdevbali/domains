// @flow

import { connect } from 'react-redux'

import Message from '../component/message'

const mapStateToProps = state => ({
    message: state.hello.get('message'),
    name: state.hello.get('name'),
})    

export default connect(mapStateToProps)(Message)
