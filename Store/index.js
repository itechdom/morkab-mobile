import {extendObservable, observable, computed, autorun, action, reaction, toJS} from 'mobx';
import uuidV4 from 'uuid/v4';

export class ScreenshotOrganizer {

  constructor() {
    extendObservable(this, {
      componentList : [],
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
        "#999966"
      ]
    })
  }
}