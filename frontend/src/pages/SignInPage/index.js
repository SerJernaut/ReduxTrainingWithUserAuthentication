import React                                   from 'react';
import { withRouter }                          from 'react-router';
import { Redirect }                            from 'react-router-dom';
import styles                                  from './SignInPage.module.css';
import SignInForm                              from '../../components/forms/SignInForm';
import withContext                             from '../../components/HoCs/withContext.js';
import {connect} from "react-redux";

const SignInPage = props => {

  const { user } = props;


  if (user) {
    return <Redirect to={'/'}/>;
  }

  return (
    <div className={styles.container}>
      <SignInForm/>
    </div>
  );
};

function mapStateToProps (state) {
  return state.authUserStore;
}

export default connect(mapStateToProps)(( withRouter( SignInPage ) ));