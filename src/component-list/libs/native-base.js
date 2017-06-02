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
];
