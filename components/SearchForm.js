import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, StatusBar } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LabelSelect from 'react-native-label-select';

export default class SearchForm extends React.PureComponent { 
  constructor(props){
    super(props);

    this.state = {
        selectedIndex: 1,
    };
    this.updateIndex = this.updateIndex.bind(this)
    
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render(){

    const buttons = ['P&T', 'Finance', 'BI']
    const { selectedIndex } = this.state
      return(
        <View style={styles.container}>
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 30}}
            />
            <LabelSelect
            ref="labelSelect"
            title="Make Choices"
            enable={true}
            readOnly={false}
            enableAddBtn={true}
            style={yourStyle}
            onConfirm={(list) => {...}}>

            <LabelSelect.Label
                key={...}
                data={itemA}
                onCancel={func}>selected ItemA</LabelSelect.Label>
            <LabelSelect.ModalItem
                key={...}
                data={itemB}>Item B</LabelSelect.ModalItem>
            </LabelSelect>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <Button
                title="Apply"
                //loading
                //loadingProps={{ size: "large", color: "rgba(29, 208, 93, 1)" }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "rgba(29, 208, 93, 1)",
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 15,
                }}
                containerStyle={{ marginTop: 20 }}
                />
                </View>
                <View style={{flex: 1}}>
                <Button
                title="Cancel"
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "rgba(255, 90, 95, 1)",
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 15,
                }}
                containerStyle={{ marginTop: 20 }}
                />
                </View>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    elevation: 20,
    backgroundColor: '#2D3037',
    padding: 20,
    paddingTop: (Platform.OS === 'ios' ? 20 :  StatusBar.currentHeight),
  },
  title: {
    color: 'white',
    fontSize: 30,
    flex: 1
  },

});