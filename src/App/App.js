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
    //if (dragOver !== this.props.dragOver) LayoutAnimation.easeInEaseOut();
  }
  render() {
    let Wrapper = this.props.wrapper;
    return <View style={{backgroundColor: '#ddd', flexDirection:'column',height:300,width:300}}>
      <Wrapper>
        {
          this.props.page.map((comp)=>{
            let Element = comp.element;
            return <Element
              {...comp.properties}
            />
          })
        }
      </Wrapper>
    </View>
  }
}

class DraggyInner extends React.Component {
  render() {
    if (this.props.dragOver && !this.props.ghost && !this.props.dragging) {
      return <View style={{height: 100, width: 100, backgroundColor: 'green'}} />
    }
    let shadows = {shadowColor: 'black', shadowOffset: {width: 0, height: 20}, shadowOpacity: .5, shadowRadius: 20, opacity: .5};
    return <View style={[{height: 100, width: 100, backgroundColor: this.props.ghost ? '#777' : '#777'}, this.props.dragging ? shadows : null]}>
      <Text>
        {this.props.title}
      </Text>
    </View>
  }
}

class Draggy extends React.Component {
  render() {
    return <Draggable data={this.props.comp} style={{margin: 7.5}}>
      <DropZone>
        <DraggyInner title={`${this.props.comp.tag}`} />
      </DropZone>
    </Draggable>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'DragDropTest';
  }
  render() {
    return <DragContainer>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <DropZone onDrop={comp => this.props.onDrop(comp)}>
          <MyDropZoneContent wrapper={this.props.store.wrapper} page={this.props.store.page} />
        </DropZone>
      </View>
      <View style={{height: 115}}>
        <ScrollView horizontal={true}>
          <View style={{justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row'}}>
            {
              this.props.store.componentList[0].map((comp)=>{
                return <Draggy comp={comp}/>
              })
            }
          </View>
        </ScrollView>
      </View>
    </DragContainer>
  }
}

export default App;
