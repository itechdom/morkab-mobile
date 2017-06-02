import React from 'react';
import {
  Text,
  View,
  LayoutAnimation,
  Alert,
  ScrollView
} from 'react-native';

import {
  DragContainer,
  Draggable,
  DropZone
} from '../react-native-dnd';


class MyDropZoneContent extends React.Component {
  componentWillReceiveProps({dragOver}) {
    if (dragOver !== this.props.dragOver) LayoutAnimation.easeInEaseOut();
  }
  render() {
    return <View style={{width: this.props.dragOver ? 110 : 100, height:  this.props.dragOver ? 110 : 100, backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>{"LET GO"}</Text>
      </View>
    </View>
  }
}

class DraggyInner extends React.Component {
  render() {
    if (this.props.dragOver && !this.props.ghost && !this.props.dragging) {
      return <View style={{height: 100, width: 100, backgroundColor: 'green'}} />
    }
    let shadows = {shadowColor: 'black', shadowOffset: {width: 0, height: 20}, shadowOpacity: .5, shadowRadius: 20, opacity: .5};
    return <View style={[{height: 100, width: 100, backgroundColor: this.props.ghost ? '#777' : '#777'}, this.props.dragging ? shadows : null]} />
  }
}


class Draggy extends React.Component {
  render() {
    return <Draggable data="Whatevs" style={{margin: 7.5}}>
      <DropZone>
        <DraggyInner />
      </DropZone>
    </Draggable>
  }
}

class DragDropTest extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'DragDropTest';
  }
  render() {
    return <DragContainer>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <DropZone onDrop={e => console.log("hello")}>
          <MyDropZoneContent />
        </DropZone>
      </View>
      <View style={{height: 115}}>
        <ScrollView horizontal={true}>
          <View style={{justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row'}}>
            <Draggy />
            <Draggy />
            <Draggy />
            <Draggy />
            <Draggy />
            <Draggy />
            <Draggy />
          </View>
        </ScrollView>
      </View>
    </DragContainer>
  }
}

export default DragDropTest;
