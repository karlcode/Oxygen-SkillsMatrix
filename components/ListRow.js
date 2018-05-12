import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TouchableHighlight } from 'react-native';
import { Avatar } from 'react-native-elements'
const width = Dimensions.get('window').width


const ListRow = (props) => {
  const { name, position, team, avatar } = props.item
	return(
    <TouchableOpacity onPress={() => props.navigation.navigate('Profile', {...props.item})}>
		<View style={styles.tile}>
			<Avatar
				rounded
				medium
        title={name.split(" ").map((n)=>n[0]).join(" ")}
        titleStyle={{fontSize: 18}}
        activeOpacity={0.7}
        source={{uri: avatar}}
			/>
			<Text style={{fontWeight: 'bold'}} >{name}</Text>
			<Text>{position}</Text>
			<Text>{team}</Text>
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
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },

});

export default ListRow;
