!function(a){"use strict";var n=function(){};n.prototype.init=function(){a("#world-map-markers").vectorMap({map:"world_mill_en",scaleColors:["#4d79f6","#4d79f6"],normalizeFunction:"polynomial",hoverOpacity:.7,hoverColor:!1,regionStyle:{initial:{fill:"#7984ab"}},markerStyle:{initial:{r:9,fill:"#4d79f6","fill-opacity":.9,stroke:"#fff","stroke-width":4,"stroke-opacity":.4},hover:{stroke:"#fff","fill-opacity":1,"stroke-width":1}},backgroundColor:"transparent",markers:[{latLng:[-8.51,179.21],name:"Tuvalu"},{latLng:[3.2,73.22],name:"Maldives"},{latLng:[35.88,14.5],name:"Malta"},{latLng:[12.05,-61.75],name:"Grenada"},{latLng:[7.35,134.46],name:"Palau"},{latLng:[42.5,1.51],name:"Andorra"},{latLng:[26.02,50.55],name:"Bahrain"}]}),a("#usa").vectorMap({map:"us_aea_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#7984ab"}}}),a("#canada").vectorMap({map:"ca_lcc",backgroundColor:"transparent",regionStyle:{initial:{fill:"#7984ab"}}}),a("#uk").vectorMap({map:"uk_mill_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#7984ab"}}}),a("#chicago").vectorMap({map:"us-il-chicago_mill_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#7984ab"}}})},a.VectorMap=new n,a.VectorMap.Constructor=n}(window.jQuery),function(a){"use strict";window.jQuery.VectorMap.init()}();