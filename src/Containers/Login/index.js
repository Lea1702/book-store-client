import {connect} from "react-redux";
import {Login} from "../../components/Login";
import {onLogIn} from '../../Store/actions';
import toJS from "../../hoc/toJS";


const mapStateToProps = (state) => {
    return {
        isLoggedOn: state.isLoggedOn
    }};


const mapDispatchToProps = (dispatch) => {
    return {
        onLogIn: (email, password) => dispatch(onLogIn(email, password)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(toJS(Login))