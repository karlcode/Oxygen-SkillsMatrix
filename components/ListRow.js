import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TouchableHighlight } from 'react-native';
import { Avatar } from 'react-native-elements'
const width = Dimensions.get('window').width


const ListRow = (props) => {
	return(
    <TouchableOpacity onPress={() => props.navigation.navigate({key: 'Profile', routeName: 'Profile', params: ({...props.item})})}>
		<View style={styles.tile}>
			<Avatar
				rounded
				medium
				title={props.item.Name}
				activeOpacity={0.7}
			/>
			<Text style={{fontWeight: 'bold'}} >{props.item.Name}</Text>
		</View>
    </TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width / 2) - 15,
    height: 150,
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    elevation: 3,
    //borderTopLeftRadius: 20,
    //borderTopRightRadius: 20,
    //borderBottomLeftRadius: 20,
    //borderBottomRightRadius: 20,
  },

});

export default ListRow;
