for(var ts2=14844186e5,dates=[],spikes=[5,-5,3,-3,8,-8],i=0;i<120;i++){var innerArr=[ts2+=864e5,dataSeries[1][i].value];dates.push(innerArr)}var chart,options={chart:{type:"area",stacked:!1,height:345,zoom:{type:"x",enabled:!0},toolbar:{show:!1,autoSelected:"zoom"}},colors:["#4d79f6"],dataLabels:{enabled:!1},series:[{name:"Bitcoin",data:dates}],markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!0,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},yaxis:{min:2e7,max:25e7,labels:{formatter:function(e){return"$"+(e/1e6).toFixed(0)}},title:{text:"Price"}},xaxis:{type:"datetime",axisBorder:{show:!0,color:"#bec7e0"},axisTicks:{show:!0,color:"#bec7e0"}},tooltip:{shared:!1,y:{formatter:function(e){return"$"+(e/1e6).toFixed(0)}}}};(chart=new ApexCharts(document.querySelector("#crypto_dash_main"),options)).render(),(chart=new Chartist.Pie("#animating-donut",{series:[20,20,20,20,20],labels:[1,2,3,4,5]},{donut:!0,showLabel:!1,donutWidth:15,plugins:[Chartist.plugins.tooltip()]})).on("draw",function(e){if("slice"===e.type){var t=e.element._node.getTotalLength();e.element.attr({"stroke-dasharray":t+"px "+t+"px"});var a={"stroke-dashoffset":{id:"anim"+e.index,dur:1e3,from:-t+"px",to:"0px",easing:Chartist.Svg.Easing.easeOutQuint,fill:"freeze"}};0!==e.index&&(a["stroke-dashoffset"].begin="anim"+(e.index-1)+".end"),e.element.attr({"stroke-dashoffset":-t+"px"}),e.element.animate(a,!1)}}),chart.on("created",function(){window.__anim21278907124&&(clearTimeout(window.__anim21278907124),window.__anim21278907124=null),window.__anim21278907124=setTimeout(chart.update.bind(chart),1e4)});