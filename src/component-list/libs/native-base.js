import React from 'react';
import {
  View,
  Text
} from 'react-native';
import * as NativeBase from 'native-base';

const docWebsite = "https://docs.nativebase.io/Components.html";

const listData = [
  "item 1",
  "item 2",
  "item 3"
];

const iconData = [
  "restore",
  "favorite"
]

const objectList = [
  {text:"example1"},
  {text:"example2"}
]

export const wrapper = ({children})=>{return<NativeBase.Container><NativeBase.Content>{children}</NativeBase.Content></NativeBase.Container>};

export const componentList = [
  {
    "element":NativeBase.Button,
    "tag":"button",
    "link":`${docWebsite}`,
    "properties":{
      children:[
        (<Text>Button Example</Text>)
      ]
    }
  },
  {
    "element":NativeBase.Header,
    "tag":"header",
    "link":`${docWebsite}`,
    "properties":{
      children:[
        (<NativeBase.Left>
          <NativeBase.Button transparent>
            <NativeBase.Icon name='arrow-back' />
          </NativeBase.Button>
        </NativeBase.Left>),
        (<NativeBase.Body>
          <Text>Header</Text>
        </NativeBase.Body>),
        (<NativeBase.Right>
          <NativeBase.Button transparent>
            <NativeBase.Icon name='menu' />
          </NativeBase.Button>
        </NativeBase.Right>)
      ]
    }
  },
  {
    "element":NativeBase.Footer,
    "tag":"Footer",
    "link":`${docWebsite}`,
    "properties":{
      children:[
        (<NativeBase.FooterTab>
          <NativeBase.Button active badge vertical>
            <NativeBase.Badge><NativeBase.Text>51</NativeBase.Text></NativeBase.Badge>
            <NativeBase.Icon active name="navigate" />
            <NativeBase.Text>Tab1</NativeBase.Text>
          </NativeBase.Button>
          <NativeBase.Button badge vertical>
            <NativeBase.Badge><NativeBase.Text>51</NativeBase.Text></NativeBase.Badge>
            <NativeBase.Icon name="navigate" />
            <NativeBase.Text>Tab2</NativeBase.Text>
          </NativeBase.Button>
        </NativeBase.FooterTab>)
      ]
    }
  },
  {
    "element":NativeBase.Button,
    "tag":"Actionsheet",
    "link":`${docWebsite}`,
    "properties":{
      onPress:()=>{NativeBase.ActionSheet.show(
        {
          options: listData,
          cancelButtonIndex: 0,
          destructiveButtonIndex: 1,
          title: 'ActionSheet'
        },
        (buttonIndex) => {
          console.log(buttonIndex);
        }
      )},
      children:[
        (<NativeBase.Text>Actionsheet</NativeBase.Text>)
      ]
    }
  },
  {
    "element":NativeBase.DeckSwiper,
    "tag":"DeckSwiper",
    "link":`${docWebsite}`,
    "properties":{
      dataSource:objectList,
      renderItem:(item)=>{
        return <NativeBase.Card style={{ elevation: 3 }}>
          <NativeBase.CardItem>
            <NativeBase.Icon name="heart" style={{ color: '#ED4A6A' }} />
            <NativeBase.Text>{item.title}</NativeBase.Text>
          </NativeBase.CardItem>
        </NativeBase.Card>
      }
    }
  },
  {
    "element":NativeBase.Header,
    "tag":"Segment Header",
    "link":`${docWebsite}`,
    "properties":{
      children:[
        (<NativeBase.Left>
          <NativeBase.Button transparent>
            <NativeBase.Icon name="arrow-back" />
          </NativeBase.Button>
        </NativeBase.Left>),
        (<NativeBase.Body>
          <NativeBase.Segment>
            <NativeBase.Button first><NativeBase.Text>Puppies</NativeBase.Text></NativeBase.Button>
            <NativeBase.Button last active><NativeBase.Text>Cubs</NativeBase.Text></NativeBase.Button>
          </NativeBase.Segment>
        </NativeBase.Body>),
        (<NativeBase.Right>
          <NativeBase.Button transparent>
            <NativeBase.Icon name="search" />
          </NativeBase.Button>
        </NativeBase.Right>)
      ]
    }
  },
  {
    "element":NativeBase.Button,
    "tag":"Toast",
    "link":`${docWebsite}`,
    "properties":{
      onPress:()=>{NativeBase.Toast.show({
        supportedOrientations: ['potrait','landscape'],
        text: 'Wrong password!',
        position: 'bottom',
        buttonText: 'Okay'
      })},
      children:[
        (<NativeBase.Text>Show Toast</NativeBase.Text>)
      ]
    }
  },
];
