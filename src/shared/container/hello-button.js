import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
    label: 'Say hello',
})


const mapDispatchToProps = dispatch => ({
    handleClick: () => { dispatch(sayHello('Mau diganti message ke apa inih?')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)

