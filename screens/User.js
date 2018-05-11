import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../mocks/contact.json'

import { View } from 'react-native';
import UserContainer from '../containers/UserContainer'
import SearchHeader from '../components/SearchHeader'

const User = () => 
<UserContainer {...contactData} 
/>

User.navigationOptions = () => ({
  
})

User.propTypes = {
  //navigation: PropTypes.object.isRequired,
}

export default User