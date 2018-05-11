import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../mocks/contact.json'

import ProfileContainer from '../containers/ProfileContainer'

const Profile = () => <ProfileContainer {...contactData} />

Profile.navigationOptions = () => ({

})

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Profile