import * as React from 'react';
import { Link } from 'react-router-dom';
import { getSurvey } from '../store/survey/service';
import { connect } from 'react-redux';

interface Props {
    getSurvey():void
}

interface State {

}

class Nav extends React.Component<Props, State>  {

    componentDidMount() {
        this.props.getSurvey();
    }

    render() {
        let currUrl = new URL(window.document.URL).pathname;
        let disabled = currUrl === '/' ? 'disabled' : '';

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand text-wheat">
                    Survey Manager
                </span>
                <ul className="navbar-nav mr-auto offset-1">
                    <li className="nav-item">
                        <Link className={`nav-link text-wheat ${disabled}`} to="/"> | All Surveys | </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapState = (state: any) => {
    console.log(state);
    return {
        surveysList: state.surveys.surveysList
    }
}

const mapDispatch = (dispatch: any) => {
    return {
        getSurvey: () => {
            dispatch(getSurvey());
        }
    }
}

export default connect(mapState, mapDispatch)(Nav);

