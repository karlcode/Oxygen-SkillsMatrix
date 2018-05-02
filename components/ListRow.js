import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements'
const width = Dimensions.get('window').width


const ListRow = ({ item }) => {
	return(
		<View style={styles.tile}>
			<Avatar
				rounded
				medium
				title="BP"
				onPress={() => console.log("Works!")}
				activeOpacity={0.7}
			/>
			<Text>{item.key}</Text>
		</View>

	)
}

const styles = StyleSheet.create({
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width / 2) - 15,
    height: 150,
    backgroundColor: 'pink',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    elevation: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

});

export default ListRow;
