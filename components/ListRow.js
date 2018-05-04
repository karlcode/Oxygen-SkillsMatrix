import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TouchableHighlight } from 'react-native';
import { Avatar } from 'react-native-elements'
const width = Dimensions.get('window').width


const ListRow = ({ item }) => {
	return(
    <TouchableHighlight>
		<View style={styles.tile}>
			<Avatar
				rounded
				medium
				title={item.key}
				onPress={() => console.log("Works!")}
				activeOpacity={0.7}
			/>
			<Text>{item.key}</Text>
		</View>
    </TouchableHighlight>
	)
}

const styles = StyleSheet.create({
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width / 2) - 15,
    height: 150,
    backgroundColor: 'blue',
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
