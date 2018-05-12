import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../mocks/contact.json'

import ProfileContainer from '../containers/ProfileContainer'

const Profile = (props) => <ProfileContainer 
{...props.navigation.state.params} />
//const Profile = (props) => console.log(props.navigation.state.params)

Profile.navigationOptions = () => ({

})

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Profile