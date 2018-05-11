/**
 * Created by TinySymphony on 2017-01-03.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  AppRegistry
} from 'react-native';
import LabelSelect from 'react-native-label-select';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.selectConfirm = this.selectConfirm.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  selectConfirm(list) {
    let {data} = this.props;
    for (let item of list) {
      let index = data.findIndex(ele => ele === item);
      if (~index) data[index].isSelected = true;
      else continue;
    }
    
  }
  deleteItem(item) {
    let {data} = this.props;
    let index = data.findIndex(a => a === item);
    data[index].isSelected = false;

  }
  render() {
    return (
      <View>
        {this.props.data ? 
        <LabelSelect
        title={this.props.title}
        ref="select"
        style={styles.labelSelect}
        //onConfirm={this.selectConfirm}
        onConfirm={this.props.selectConfirm}
      >
        {this.props.data.filter(item => item.isSelected).map((item, index) =>
          <LabelSelect.Label
            key={'label-' + index}
            data={item}
            //onCancel={() => {this.deleteItem(item)}}
            onCancel={() => {this.props.selectDelete(item)}}
          >{item.name}</LabelSelect.Label>
        )}
        {this.props.data.filter(item => !item.isSelected).map((item, index) =>
          <LabelSelect.ModalItem
            key={'modal-item-' + index}
            data={item}
          >{item.name}</LabelSelect.ModalItem>
        )}
      </LabelSelect>
      : null}
        
        
      </View>
    );
  }
}


mapStateToProps = (state, props) => {
  return {
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelect);


const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'flex-start',
  },
  labelSelect: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 5,
    height: 50,
    borderRadius: 5,
    elevation: 1
  },
});
