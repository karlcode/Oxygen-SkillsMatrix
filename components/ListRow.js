import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TouchableHighlight } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements'
const width = Dimensions.get('window').width


const ListRow = (props) => {
  const { FirstName, LastName, Position, Team, avatar, Id, Location  } = props.item
	return(
    <TouchableOpacity onPress={() => props.navigation.navigate('Profile', {...props.item})}>
		{/*<View style={styles.tile}>
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
  </View>*/}
  <View styles={{width: '100%'}}>
    <ListItem
        //onPress={() => navigate('SecondScreen', ({...item}))}
        key={Id}
        roundAvatar
        //avatar={{ uri: avatar } }
        title={<Text><Text style={{fontSize: 18, fontWeight: 'bold'}}>{FirstName} {LastName}</Text> <Text style={{fontSize: 12}}>{Location.Code}</Text></Text>}
        subtitle={<Text style={{fontSize: 12, fontWeight: 'bold', color: 'grey'}}>{Position.Name}</Text>}
        /*containerStyle={{ borderBottomWidth: 0, borderBottomLeftRadius: 10, borderTopRightRadius: 10, marginRight:15,
          marginLeft:15,
          marginTop:7,
          marginBottom:7,
          
          elevation: 2,
          backgroundColor:'rgb(255,255,255)', }}*/
        containerStyle={{ backgroundColor: '#EFF4F9',borderBottomWidth: 0, marginLeft: 10, marginRight: 10, marginTop:5, marginBottom:5,  }}
        />
    </View>
    </TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
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
