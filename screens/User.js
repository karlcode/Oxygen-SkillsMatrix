import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../mocks/contact.json'

import { View } from 'react-native';
import UserContainer from '../containers/UserContainer'
import SearchHeader from '../components/SearchHeader'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";


const User = (props) => 
<UserContainer {...props.profile} navigation={props.navigation}
/>

User.navigationOptions = () => ({
  
})

User.propTypes = {
  //navigation: PropTypes.object.isRequired,
}

mapStateToProps = (state, props) => {
  return {
    profile: state.dataReducer.profile,
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
