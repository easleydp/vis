/**
 * This object contains all possible options. It will check if the types are correct, if required if the option is one
 * of the allowed values.
 *
 * __any__ means that the name of the property does not matter.
 * __type__ is a required field for all objects and contains the allowed types of all objects
 */
let string = 'string';
let bool = 'boolean'; // variable name is bool because boolean is a reserved word
let number = 'number';
let array = 'array';
let date = 'date';
let object = 'object'; // should only be in a __type__ property
let dom = 'dom';
let moment = 'moment';
let any = 'any';


let allOptions = {
  configure: {
    enabled: {bool},
    filter: {bool,'function': 'function'},
    container: {dom},
    __type__: {object,bool,'function': 'function'}
  },

  //globals :
  yAxisOrientation: {string:['left','right']},
  defaultGroup: {string},
  sort: {bool},
  sampling: {bool},
  stack:{bool},
  graphHeight: {string, number},
  shaded: {
    enabled: {bool},
    orientation: {string:['bottom','top','zero','group']}, // top, bottom, zero, group
    groupId: {object},
    __type__: {bool,object}
  },
  style: {string:['line','bar','points']}, // line, bar
  barChart: {
    width: {number},
    minWidth: {number},
    sideBySide: {bool},
    align: {string:['left','center','right']},
    __type__: {object}
  },
  interpolation: {
    enabled: {bool},
    parametrization: {string:['centripetal', 'chordal','uniform']}, // uniform (alpha = 0.0), chordal (alpha = 1.0), centripetal (alpha = 0.5)
    alpha: {number},
    __type__: {object,bool}
  },
  drawPoints: {
    enabled: {bool},
    onRender: { 'function': 'function' },
    size: {number},
    style: {string:['square','circle']}, // square, circle
    __type__: {object,bool,'function': 'function'}
  },
  dataAxis: {
    showMinorLabels: {bool},
    showMajorLabels: {bool},
    icons: {bool},
    width: {string, number},
    visible: {bool},
    alignZeros: {bool},
    left:{
      range: {min:{number},max:{number},__type__: {object}},
      format: {'function': 'function'},
      title: {text:{string,number},style:{string},__type__: {object}},
      __type__: {object}
    },
    right:{
      range: {min:{number},max:{number},__type__: {object}},
      format: {'function': 'function'},
      title: {text:{string,number},style:{string},__type__: {object}},
      __type__: {object}
    },
    __type__: {object}
  },
  legend: {
    enabled: {bool},
    icons: {bool},
    left: {
      visible: {bool},
      position: {string:['top-right','bottom-right','top-left','bottom-left']},
      __type__: {object}
    },
    right: {
      visible: {bool},
      position: {string:['top-right','bottom-right','top-left','bottom-left']},
      __type__: {object}
    },
    __type__: {object,bool}
  },
  groups: {
    visibility: {any},
    __type__: {object}
  },

  autoResize: {bool},
  clickToUse: {bool},
  end: {number, date, string, moment},
  format: {
    minorLabels: {
      millisecond: {string,'undefined': 'undefined'},
      second: {string,'undefined': 'undefined'},
      minute: {string,'undefined': 'undefined'},
      hour: {string,'undefined': 'undefined'},
      weekday: {string,'undefined': 'undefined'},
      day: {string,'undefined': 'undefined'},
      month: {string,'undefined': 'undefined'},
      year: {string,'undefined': 'undefined'},
      __type__: {object}
    },
    majorLabels: {
      millisecond: {string,'undefined': 'undefined'},
      second: {string,'undefined': 'undefined'},
      minute: {string,'undefined': 'undefined'},
      hour: {string,'undefined': 'undefined'},
      weekday: {string,'undefined': 'undefined'},
      day: {string,'undefined': 'undefined'},
      month: {string,'undefined': 'undefined'},
      year: {string,'undefined': 'undefined'},
      __type__: {object}
    },
    __type__: {object}
  },
  moment: {'function': 'function'},
  height: {string, number},
  hiddenDates: {
    start: {date, number, string, moment},
    end: {date, number, string, moment},
    repeat: {string},
    __type__: {object, array}
  },
  locale:{string},
  locales:{
    __any__: {any},
    __type__: {object}
  },
  max: {date, number, string, moment},
  maxHeight: {number, string},
  maxMinorChars: {number},
  min: {date, number, string, moment},
  minHeight: {number, string},
  moveable: {bool},
  multiselect: {bool},
  orientation: {string},
  showCurrentTime: {bool},
  showMajorLabels: {bool},
  showMinorLabels: {bool},
  start: {date, number, string, moment},
  timeAxis: {
    scale: {string,'undefined': 'undefined'},
    step: {number,'undefined': 'undefined'},
    __type__: {object}
  },
  width: {string, number},
  zoomable: {bool},
  zoomKey: {string: ['ctrlKey', 'altKey', 'metaKey', '']},
  zoomMax: {number},
  zoomMin: {number},
  zIndex: {number},
  __type__: {object}
};

let configureOptions = {
  global: {
    //yAxisOrientation: ['left','right'], // TDOO: enable as soon as Grahp2d doesn't crash when changing this on the fly
    sort: true,
    sampling: true,
    stack:false,
    shaded: {
      enabled: false,
      orientation: ['zero','top','bottom','group'] // zero, top, bottom
    },
    style: ['line','bar','points'], // line, bar
    barChart: {
      width: [50,5,100,5],
      minWidth: [50,5,100,5],
      sideBySide: false,
      align: ['left','center','right'] // left, center, right
    },
    interpolation: {
      enabled: true,
      parametrization: ['centripetal','chordal','uniform'] // uniform (alpha = 0.0), chordal (alpha = 1.0), centripetal (alpha = 0.5)
    },
    drawPoints: {
      enabled: true,
      size: [6,2,30,1],
      style: ['square', 'circle'] // square, circle
    },
    dataAxis: {
      showMinorLabels: true,
      showMajorLabels: true,
      icons: false,
      width: [40,0,200,1],
      visible: true,
      alignZeros: true,
      left:{
        //range: {min:'undefined': 'undefined'ined,max:'undefined': 'undefined'ined},
        //format: function (value) {return value;},
        title: {text:'',style:''}
      },
      right:{
        //range: {min:'undefined': 'undefined'ined,max:'undefined': 'undefined'ined},
        //format: function (value) {return value;},
        title: {text:'',style:''}
      }
    },
    legend: {
      enabled: false,
      icons: true,
      left: {
        visible: true,
        position: ['top-right','bottom-right','top-left','bottom-left'] // top/bottom - left,right
      },
      right: {
        visible: true,
        position: ['top-right','bottom-right','top-left','bottom-left'] // top/bottom - left,right
      }
    },

    autoResize: true,
    clickToUse: false,
    end: '',
    format: {
      minorLabels: {
        millisecond:'SSS',
        second:     's',
        minute:     'HH:mm',
        hour:       'HH:mm',
        weekday:    'ddd D',
        day:        'D',
        month:      'MMM',
        year:       'YYYY'
      },
      majorLabels: {
        millisecond:'HH:mm:ss',
        second:     'D MMMM HH:mm',
        minute:     'ddd D MMMM',
        hour:       'ddd D MMMM',
        weekday:    'MMMM YYYY',
        day:        'MMMM YYYY',
        month:      'YYYY',
        year:       ''
      }
    },

    height: '',
    locale: '',
    max: '',
    maxHeight: '',
    maxMinorChars: [7, 0, 20, 1],
    min: '',
    minHeight: '',
    moveable:true,
    orientation: ['both', 'bottom', 'top'],
    showCurrentTime: false,
    showMajorLabels: true,
    showMinorLabels: true,
    start: '',
    width: '100%',
    zoomable: true,
    zoomKey: ['ctrlKey', 'altKey', 'metaKey', ''],
    zoomMax: [315360000000000, 10, 315360000000000, 1],
    zoomMin: [10, 10, 315360000000000, 1],
    zIndex: 0
  }
};

export {allOptions, configureOptions};
