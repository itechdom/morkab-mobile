import {extendObservable, observable, computed, autorun, action, reaction, toJS} from 'mobx';
import componentList from '../component-list';
import uuidV4 from 'uuid/v4';

export class Morkab {

  constructor() {
    extendObservable(this, {
      componentList : [],
      wrapper:{},
      library: [],
      page:[],
      exportedPage:"",
      exportedPageDialog:"",
      draggedComponent:{},
      editDialogOpen:false,
      edittedComponent:{},
      themeEditorDialogOpen:false,
      themeOptions:{},
      themeValues:{},
      toolboxOpen:'none',
      libraryList:[],
      previewMode:false,
      levelColors : [
        "#00ff00",
        "#9966ff",
        "#ffcc66",
        "#000099",
        "#999966"],
      addComponentToPage:action((comp)=>{
        let {element,tag,link,properties,serverLink,externalHTML} = comp;
        //to prevent properties from being updated
        let newProp = toJS(properties);
        this.page.push(new Component(element,tag,link,newProp,serverLink,externalHTML));
      })
    })
  }

  getComponentList(){
    this.componentList = componentList.map((library)=>{
      this.wrapper = library.wrapper;
      return library.componentList.map((component)=>{
        return new Component(component.element,component.tag,component.link,component.properties);
      });
    });
  }

}

export class Component {
  constructor(element,tag,link,properties,serverLink,externalHTML){
    this.id = uuidV4();
    this.tag = tag;
    this.link = link;
    this.element = element;
    this.serverLink= serverLink;
    extendObservable(this, {
      properties:properties,
      externalHTML:externalHTML
    })
  }
}
