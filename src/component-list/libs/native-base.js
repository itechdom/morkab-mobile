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
];
