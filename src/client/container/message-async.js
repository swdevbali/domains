import { connect } from 'react-readux'
import { MessageAsync } from '../component/message'

const mapStateToProps = state => ({
    message: state.hello.get('messageAsync'),
})

export default connect(mapStateToProps)(MessageAsync)
