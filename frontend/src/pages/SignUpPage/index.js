import React          from 'react';
import { withRouter } from 'react-router';
import { Redirect }   from 'react-router-dom';
import SignUpForm     from '../../components/forms/SignUpForm';
import styles         from './SignUpPage.module.scss';
import withContext    from '../../components/HoCs/withContext.js';
import {connect} from "react-redux";


const SignUpPage = (props) => {
  const { user } = props;

  if (user) {
    return <Redirect to={'/'}/>;
  }
  return (
    <div className={styles.container}>
      <SignUpForm/>
    </div>
  );


};

function mapStateToProps (state) {
  return state.authUserStore;
}


export default connect(mapStateToProps)(withRouter(( SignUpPage ) ))