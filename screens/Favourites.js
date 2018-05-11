import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../mocks/contact.json'
import FavouritesContainer from '../containers/FavouritesContainer'

const Favourites = ({ navigation }) => (
  <FavouritesContainer {...contactData} navigation={navigation} />
)

Favourites.navigationOptions = ({ navigation }) => ({
  
})

Favourites.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Favourites