import { connect } from 'react-redux'
import MessageAsync from '../component/message'

const mapStateToProps = state => ({
    message: state.hello.get('messageAsync'),
    name: state.hello.get('name'),
})

export default connect(mapStateToProps)(MessageAsync)
