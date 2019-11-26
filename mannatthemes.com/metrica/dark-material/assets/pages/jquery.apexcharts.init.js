var options={chart:{height:374,type:"line",dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},stroke:{width:5,curve:"smooth"},series:[{name:"Likes",data:[4,3,10,9,29,19,22,9,12,7,19,5,13,9,17,2,7,5]}],xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"]},title:{text:"Social Media",align:"left",style:{fontSize:"14px",color:"#8997bd"}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#43cea2"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:4,opacity:.9,colors:["#ffbc00"],strokeColor:"#fff",strokeWidth:2,style:"inverted",hover:{size:7}},yaxis:{min:-10,max:40,title:{text:"Engagement"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#185a9d"},tooltip:{theme:"dark"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]};(chart=new ApexCharts(document.querySelector("#apex_line1"),options)).render();options={chart:{height:380,type:"line",zoom:{enabled:!1},toolbar:{show:!1},dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},colors:["#f6d365","#0acf97"],dataLabels:{enabled:!0},stroke:{width:[3,3],curve:"smooth"},series:[{name:"High - 2018",data:[28,29,33,36,32,32,33]},{name:"Low - 2018",data:[12,11,14,18,17,13,13]}],title:{text:"Average High & Low Temperature",align:"left",style:{fontSize:"14px",color:"#8997bd"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},markers:{style:"inverted",size:6},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},yaxis:{title:{text:"Temperature"},min:5,max:40},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},tooltip:{theme:"dark"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]};(chart=new ApexCharts(document.querySelector("#apex_line2"),options)).render();for(var ts2=14844186e5,dates=[],spikes=[5,-5,3,-3,8,-8],i=0;i<120;i++){var innerArr=[ts2+=864e5,dataSeries[1][i].value];dates.push(innerArr)}options={chart:{type:"area",stacked:!1,height:380,zoom:{enabled:!0},dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{line:{curve:"smooth"}},dataLabels:{enabled:!1},stroke:{width:[3]},series:[{name:"XYZ MOTORS",data:dates}],markers:{size:0,style:"full"},colors:["#fa5c7c"],title:{text:"Stock Price Movement",align:"left",style:{fontSize:"14px",color:"#8997bd"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},fill:{gradient:{enabled:!0,shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:.1,stops:[0,70,80,100]}},yaxis:{min:2e7,max:25e7,labels:{formatter:function(e){return(e/1e6).toFixed(0)}},title:{text:"Price"}},xaxis:{type:"datetime"},tooltip:{theme:"dark",shared:!1,y:{formatter:function(e){return(e/1e6).toFixed(0)}}},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]};(chart=new ApexCharts(document.querySelector("#apex_line3"),options)).render();var ts1=13885344e5,ts3=(ts2=13886208e5,13890528e5),dataSet=[[],[],[]];for(i=0;i<12;i++){innerArr=[ts1+=864e5,dataSeries[2][i].value];dataSet[0].push(innerArr)}for(i=0;i<18;i++){innerArr=[ts2+=864e5,dataSeries[1][i].value];dataSet[1].push(innerArr)}for(i=0;i<12;i++){innerArr=[ts3+=864e5,dataSeries[0][i].value];dataSet[2].push(innerArr)}options={chart:{type:"area",stacked:!1,height:350,zoom:{enabled:!1},dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{line:{curve:"smooth"}},dataLabels:{enabled:!1},series:[{name:"PRODUCT A",data:dataSet[0]},{name:"PRODUCT B",data:dataSet[1]},{name:"PRODUCT C",data:dataSet[2]}],markers:{size:0,style:"full"},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},yaxis:{labels:{style:{color:"#8e8da4"},offsetX:0,formatter:function(e){return(e/1e6).toFixed(2)}},axisBorder:{show:!1},axisTicks:{show:!1}},xaxis:{type:"datetime",tickAmount:8,min:new Date("01/01/2014").getTime(),max:new Date("01/20/2014").getTime(),labels:{rotate:-15,rotateAlways:!0,formatter:function(e,t){return moment(new Date(t)).format("DD MMM YYYY")}}},title:{text:"Irregular Data in Time Series",align:"left",offsetX:14,style:{fontSize:"14px",color:"#8997bd"}},colors:["#f93b7a","#00bcd4","#fbb624"],tooltip:{shared:!0,theme:"dark"},legend:{position:"top",horizontalAlign:"right",offsetX:-10}};(chart=new ApexCharts(document.querySelector("#apex_area1"),options)).render(),$(document).ready(function(){var e={annotations:{yaxis:[{y:30,borderColor:"#999",label:{show:!0,text:"Support",style:{color:"#fff",background:"#00E396"}}}],xaxis:[{x:new Date("14 Nov 2012").getTime(),borderColor:"#999",yAxisIndex:0,label:{show:!0,text:"Rally",style:{color:"#fff",background:"#775DD0"}}}]},chart:{type:"area",height:350,dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},dataLabels:{enabled:!1},series:[{data:[[13273596e5,30.95],[1327446e6,31.34],[13275324e5,31.18],[13276188e5,31.05],[1327878e6,31],[13279644e5,30.95],[13280508e5,31.24],[13281372e5,31.29],[13282236e5,31.85],[13284828e5,31.86],[13285692e5,32.28],[13286556e5,32.1],[1328742e6,32.65],[13288284e5,32.21],[13290876e5,32.35],[1329174e6,32.44],[13292604e5,32.46],[13293468e5,32.86],[13294332e5,32.75],[13297788e5,32.54],[13298652e5,32.33],[13299516e5,32.97],[1330038e6,33.41],[13302972e5,33.27],[13303836e5,33.27],[133047e7,32.89],[13305564e5,33.1],[13306428e5,33.73],[1330902e6,33.22],[13309884e5,31.99],[13310748e5,32.41],[13311612e5,33.05],[13312476e5,33.64],[13315068e5,33.56],[13315932e5,34.22],[13316796e5,33.77],[1331766e6,34.17],[13318524e5,33.82],[13321116e5,34.51],[1332198e6,33.16],[13322844e5,33.56],[13323708e5,33.71],[13324572e5,33.81],[13327128e5,34.4],[13327992e5,34.63],[13328856e5,34.46],[1332972e6,34.48],[13330584e5,34.31],[13333176e5,34.7],[1333404e6,34.31],[13334904e5,33.46],[13335768e5,33.59],[13339224e5,33.22],[13340088e5,32.61],[13340952e5,33.01],[13341816e5,33.55],[1334268e6,33.18],[13345272e5,32.84],[13346136e5,33.84],[13347e8,33.39],[13347864e5,32.91],[13348728e5,33.06],[1335132e6,32.62],[13352184e5,32.4],[13353048e5,33.13],[13353912e5,33.26],[13354776e5,33.58],[13357368e5,33.55],[13358232e5,33.77],[13359096e5,33.76],[1335996e6,33.32],[13360824e5,32.61],[13363416e5,32.52],[1336428e6,32.67],[13365144e5,32.52],[13366008e5,31.92],[13366872e5,32.2],[13369464e5,32.23],[13370328e5,32.33],[13371192e5,32.36],[13372056e5,32.01],[1337292e6,31.31],[13375512e5,32.01],[13376376e5,32.01],[1337724e6,32.18],[13378104e5,31.54],[13378968e5,31.6],[13382424e5,32.05],[13383288e5,31.29],[13384152e5,31.05],[13385016e5,29.82],[13387608e5,30.31],[13388472e5,30.7],[13389336e5,31.69],[133902e7,31.32],[13391064e5,31.65],[13393656e5,31.13],[1339452e6,31.77],[13395384e5,31.79],[13396248e5,31.67],[13397112e5,32.39],[13399704e5,32.63],[13400568e5,32.89],[13401432e5,31.99],[13402296e5,31.23],[1340316e6,31.57],[13405752e5,30.84],[13406616e5,31.07],[1340748e6,31.41],[13408344e5,31.17],[13409208e5,32.37],[134118e7,32.19],[13412664e5,32.51],[13414392e5,32.53],[13415256e5,31.37],[13417848e5,30.43],[13418712e5,30.44],[13419576e5,30.2],[1342044e6,30.14],[13421304e5,30.65],[13423896e5,30.4],[1342476e6,30.65],[13425624e5,31.43],[13426488e5,31.89],[13427352e5,31.38],[13429944e5,30.64],[13430808e5,30.02],[13431672e5,30.33],[13432536e5,30.95],[134334e7,31.89],[13435992e5,31.01],[13436856e5,30.88],[1343772e6,30.69],[13438584e5,30.58],[13439448e5,32.02],[1344204e6,32.14],[13442904e5,32.37],[13443768e5,32.51],[13444632e5,32.65],[13445496e5,32.64],[13448088e5,32.27],[13448952e5,32.1],[13449816e5,32.91],[1345068e6,33.65],[13451544e5,33.8],[13454136e5,33.92],[13455e8,33.75],[13455864e5,33.84],[13456728e5,33.5],[13457592e5,32.26],[13460184e5,32.32],[13461048e5,32.06],[13461912e5,31.96],[13462776e5,31.46],[1346364e6,31.27],[13467096e5,31.43],[1346796e6,32.26],[13468824e5,32.79],[13469688e5,32.46],[1347228e6,32.13],[13473144e5,32.43],[13474008e5,32.42],[13474872e5,32.81],[13475736e5,33.34],[13478328e5,33.41],[13479192e5,32.57],[13480056e5,33.12],[1348092e6,34.53],[13481784e5,33.83],[13484376e5,33.41],[1348524e6,32.9],[13486104e5,32.53],[13486968e5,32.8],[13487832e5,32.44],[13490424e5,32.62],[13491288e5,32.57],[13492152e5,32.6],[13493016e5,32.68],[1349388e6,32.47],[13496472e5,32.23],[13497336e5,31.68],[134982e7,31.51],[13499064e5,31.78],[13499928e5,31.94],[1350252e6,32.33],[13503384e5,33.24],[13504248e5,33.44],[13505112e5,33.48],[13505976e5,33.24],[13508568e5,33.49],[13509432e5,33.31],[13510296e5,33.36],[1351116e6,33.4],[13512024e5,34.01],[1351638e6,34.02],[13517244e5,34.36],[13518108e5,34.39],[135207e7,34.24],[13521564e5,34.39],[13522428e5,33.47],[13523292e5,32.98],[13524156e5,32.9],[13526748e5,32.7],[13527612e5,32.54],[13528476e5,32.23],[1352934e6,32.64],[13530204e5,32.65],[13532796e5,32.92],[1353366e6,32.64],[13534524e5,32.84],[13536252e5,33.4],[13538844e5,33.3],[13539708e5,33.18],[13540572e5,33.88],[13541436e5,34.09],[135423e7,34.61],[13544892e5,34.7],[13545756e5,35.3],[1354662e6,35.4],[13547484e5,35.14],[13548348e5,35.48],[1355094e6,35.75],[13551804e5,35.54],[13552668e5,35.96],[13553532e5,35.53],[13554396e5,37.56],[13556988e5,37.42],[13557852e5,37.49],[13558716e5,38.09],[1355958e6,37.87],[13560444e5,37.71],[13563036e5,37.53],[13564764e5,37.55],[13565628e5,37.3],[13566492e5,36.9],[13569084e5,37.68],[13570812e5,38.34],[13571676e5,37.75],[1357254e6,38.13],[13575132e5,37.94],[13575996e5,38.14],[1357686e6,38.66],[13577724e5,38.62],[13578588e5,38.09],[1358118e6,38.16],[13582044e5,38.15],[13582908e5,37.88],[13583772e5,37.73],[13584636e5,37.98],[13588092e5,37.95],[13588956e5,38.25],[1358982e6,38.1],[13590684e5,38.32],[13593276e5,38.24],[1359414e6,38.52],[13595004e5,37.94],[13595868e5,37.83],[13596732e5,38.34],[13599324e5,38.1],[13600188e5,38.51],[13601052e5,38.4],[13601916e5,38.07],[1360278e6,39.12],[13605372e5,38.64],[13606236e5,38.89],[136071e7,38.81],[13607964e5,38.61],[13608828e5,38.63],[13612284e5,38.99],[13613148e5,38.77],[13614012e5,38.34],[13614876e5,38.55],[13617468e5,38.11],[13618332e5,38.59],[13619196e5,39.6]]}],markers:{size:0,style:"hollow"},xaxis:{type:"datetime",min:new Date("01 Mar 2012").getTime(),tickAmount:6},colors:["#dfa579"],tooltip:{theme:"dark",x:{format:"dd MMM yyyy"}},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,100]}}},t=new ApexCharts(document.querySelector("#apex_area2"),e);t.render();var o=function(e){var t=document.querySelectorAll("button");Array.prototype.forEach.call(t,function(e){e.classList.remove("active")}),e.target.classList.add("active")};document.querySelector("#one_month").addEventListener("click",function(e){o(e),t.updateOptions({xaxis:{min:new Date("28 Jan 2013").getTime(),max:new Date("27 Feb 2013").getTime()}})}),document.querySelector("#six_months").addEventListener("click",function(e){o(e),t.updateOptions({xaxis:{min:new Date("27 Sep 2012").getTime(),max:new Date("27 Feb 2013").getTime()}})}),document.querySelector("#one_year").addEventListener("click",function(e){o(e),t.updateOptions({xaxis:{min:new Date("27 Feb 2012").getTime(),max:new Date("27 Feb 2013").getTime()}})}),document.querySelector("#ytd").addEventListener("click",function(e){o(e),t.updateOptions({xaxis:{min:new Date("01 Jan 2013").getTime(),max:new Date("27 Feb 2013").getTime()}})}),document.querySelector("#all").addEventListener("click",function(e){o(e),t.updateOptions({xaxis:{min:void 0,max:void 0}})}),document.querySelector("#ytd").addEventListener("click",function(){})});options={chart:{height:396,type:"bar",toolbar:{show:!1},dropShadow:{enabled:!0,top:0,left:10,bottom:5,right:0,blur:5,color:"#010f42",opacity:.35}},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},colors:["#5766da","#1ecab8","#fbb624"],series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},legend:{offsetY:-10},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"},tooltip:{theme:"dark",y:{formatter:function(e){return"$ "+e+" thousands"}}}};(chart=new ApexCharts(document.querySelector("#apex_column1"),options)).render();options={chart:{height:380,type:"bar",toolbar:{show:!1},dropShadow:{enabled:!0,top:0,left:10,bottom:5,right:0,blur:5,color:"#010f42",opacity:.35}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(e){return e+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#aeb4ce"]}},colors:["#4facfe"],series:[{name:"Inflation",data:[2.3,3.1,4,10.1,4,3.6,3.2,2.3,1.4,.8,.5,.2]}],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0,offsetY:-35,theme:"dark"}},fill:{gradient:{enabled:!1,shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(e){return e+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:350,align:"center",style:{color:"#aeb4ce"}},grid:{row:{colors:["#202846","#1a203a"],opacity:.2},borderColor:"#f1f3fa"},tooltip:{theme:"dark"}};(chart=new ApexCharts(document.querySelector("#apex_column2"),options)).render();options={chart:{height:380,type:"bar",toolbar:{show:!1},dropShadow:{enabled:!0,top:10,left:5,bottom:0,right:0,blur:5,color:"#010f42",opacity:.35}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},series:[{data:[400,430,448,470,540,580,690,1100,1200,1380]}],colors:["#95a6bf"],xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]},states:{hover:{filter:"none"}},grid:{borderColor:"#f1f3fa"},tooltip:{theme:"dark"}};(chart=new ApexCharts(document.querySelector("#apex_bar1"),options)).render();options={chart:{height:380,type:"bar",stacked:!0,toolbar:{show:!1},dropShadow:{enabled:!0,top:10,left:5,bottom:0,right:0,blur:5,color:"#010f42",opacity:.35}},colors:["#ffab96","#185a9d"],plotOptions:{bar:{horizontal:!0,barHeight:"80%"}},dataLabels:{enabled:!1},stroke:{width:1,colors:["#fff"]},series:[{name:"Males",data:[.4,.65,.76,.88,1.5,2.1,2.9,3.8,3.9,4.2,4,4.3,4.1,4.2,4.5,3.9,3.5,3]},{name:"Females",data:[-.8,-1.05,-1.06,-1.18,-1.4,-2.2,-2.85,-3.7,-3.96,-4.22,-4.3,-4.4,-4.1,-4,-4.1,-3.4,-3.1,-2.8]}],grid:{xaxis:{showLines:!1}},yaxis:{min:-5,max:5,title:{}},tooltip:{shared:!1,theme:"dark",x:{formatter:function(e){return e}},y:{formatter:function(e){return Math.abs(e)+"%"}}},xaxis:{categories:["85+","80-84","75-79","70-74","65-69","60-64","55-59","50-54","45-49","40-44","35-39","30-34","25-29","20-24","15-19","10-14","5-9","0-4"],title:{text:"Percent"},labels:{formatter:function(e){return Math.abs(Math.round(e))+"%"}}},legend:{offsetY:-10},grid:{borderColor:"#f1f3fa"}};(chart=new ApexCharts(document.querySelector("#apex_bar2"),options)).render();options={chart:{height:380,type:"line",stacked:!1,toolbar:{show:!1},dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},stroke:{width:[0,2,4],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},colors:["#1ecab8","#fbb624","#f93b7a"],series:[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},legend:{offsetY:-10},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,theme:"dark",y:{formatter:function(e){return void 0!==e?e.toFixed(0)+" points":e}}},grid:{borderColor:"#f1f3fa"}};(chart=new ApexCharts(document.querySelector("#apex_mixed1"),options)).render();options={chart:{height:380,type:"line",stacked:!1,toolbar:{show:!1},dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},dataLabels:{enabled:!1},stroke:{width:[0,0,3]},series:[{name:"Income",type:"column",data:[1.4,2,2.5,1.5,2.5,2.8,3.8,4.6]},{name:"Cashflow",type:"column",data:[1.1,3,3.1,4,4.1,4.9,6.5,8.5]},{name:"Revenue",type:"line",data:[20,29,37,36,44,45,50,58]}],colors:["#20016c","#77d0ba","#fa5c7c"],xaxis:{categories:[2009,2010,2011,2012,2013,2014,2015,2016]},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#20016c"},labels:{style:{color:"#20016c"}},title:{text:"Income (thousand crores)"}},{axisTicks:{show:!0},axisBorder:{show:!0,color:"#77d0ba"},labels:{style:{color:"#77d0ba"},offsetX:10},title:{text:"Operating Cashflow (thousand crores)"}},{opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#fa5c7c"},labels:{style:{color:"#fa5c7c"}},title:{text:"Revenue (thousand crores)"}}],tooltip:{theme:"dark",followCursor:!0,y:{formatter:function(e){return void 0!==e?e+" thousand crores":e}}},grid:{borderColor:"#f1f3fa"},legend:{offsetY:-10},responsive:[{breakpoint:600,options:{yaxis:{show:!1},legend:{show:!1}}}]};(chart=new ApexCharts(document.querySelector("#apex_mixed2"),options)).render();options={chart:{height:380,type:"line",toolbar:{show:!1},dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},stroke:{curve:"smooth",width:2},series:[{name:"Team A",type:"area",data:[3,25,5,10,22,12,5,3,27,10,5,22,12,5]},{name:"Team B",type:"line",data:[8,33,10,15,30,17,10,8,35,15,10,27,17,10]}],fill:{type:"solid",opacity:[.35,1]},labels:["Dec 01","Dec 02","Dec 03","Dec 04","Dec 05","Dec 06","Dec 07","Dec 08","Dec 09 ","Dec 10","Dec 11"],markers:{size:0},legend:{offsetY:-10},colors:["#30a6d3","#f7cda0"],yaxis:[{title:{text:"Series A"}},{opposite:!0,title:{text:"Series B"}}],tooltip:{shared:!0,intersect:!1,theme:"dark",y:{formatter:function(e){return void 0!==e?e.toFixed(0)+" points":e}}},grid:{borderColor:"#f1f3fa"},responsive:[{breakpoint:600,options:{yaxis:{show:!1},legend:{show:!1}}}]};function generateData(e,t,o){for(var a=0,r=[];a<t;){var i=Math.floor(750*Math.random())+1,n=Math.floor(Math.random()*(o.max-o.min+1))+o.min,s=Math.floor(61*Math.random())+15;r.push([i,n,s]),864e5,a++}return r}(chart=new ApexCharts(document.querySelector("#apex_mixed3"),options)).render();options={chart:{height:380,type:"bubble",toolbar:{show:!1},dropShadow:{enabled:!0,top:6,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},dataLabels:{enabled:!1},series:[{name:"Bubble 1",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble 2",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble 3",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],fill:{opacity:.8,gradient:{enabled:!1}},colors:["#e1a52e","#01ae9a","#bbc46a"],xaxis:{tickAmount:12,type:"category"},yaxis:{max:70},grid:{borderColor:"#f1f3fa"},legend:{offsetY:-10},tooltip:{theme:"dark"}};function generateData1(e,t,o){for(var a=0,r=[];a<t;){var i=Math.floor(Math.random()*(o.max-o.min+1))+o.min,n=Math.floor(61*Math.random())+15;r.push([e,i,n]),e+=864e5,a++}return r}(chart=new ApexCharts(document.querySelector("#apex_bubble1"),options)).render();var options2={chart:{height:380,type:"bubble",toolbar:{show:!1},dropShadow:{enabled:!0,top:6,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},dataLabels:{enabled:!1},series:[{name:"Product 1",data:generateData1(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product 2",data:generateData1(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product 3",data:generateData1(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product 4",data:generateData1(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],fill:{type:"gradient"},colors:["#727cf5","#0acf97","#fa5c7c","#39afd1"],xaxis:{tickAmount:12,type:"datetime",labels:{rotate:0}},yaxis:{max:70},legend:{offsetY:-10},grid:{borderColor:"#f1f3fa"},tooltip:{theme:"dark"}};(chart=new ApexCharts(document.querySelector("#apex_bubble2"),options2)).render();options={chart:{height:380,type:"scatter",zoom:{enabled:!1},dropShadow:{enabled:!0,top:6,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},series:[{name:"Sample A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"Sample B",data:[[6.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"Sample C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}],xaxis:{tickAmount:10},yaxis:{tickAmount:7},colors:["#727cf5","#0acf97","#fa5c7c"],grid:{borderColor:"#f1f3fa"},legend:{offsetY:-10},tooltip:{theme:"dark"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]};(chart=new ApexCharts(document.querySelector("#apex_scatter1"),options)).render();options={chart:{height:380,type:"scatter",zoom:{type:"xy"},dropShadow:{enabled:!0,top:6,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},series:[{name:"Team 1",data:generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Team 2",data:generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Team 3",data:generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),30,{min:10,max:60})},{name:"Team 4",data:generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),10,{min:10,max:60})},{name:"Team 5",data:generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(),30,{min:10,max:60})}],dataLabels:{enabled:!1},colors:["#39afd1","#0acf97","#e3eaef","#6c757d","#ffbc00"],grid:{borderColor:"#f1f3fa",xaxis:{showLines:!0},yaxis:{showLines:!0}},legend:{offsetY:-10},xaxis:{type:"datetime"},yaxis:{max:70},tooltip:{theme:"dark"},responsive:[{breakpoint:600,options:{chart:{toolbar:{show:!1}},legend:{show:!1}}}]};function generateDayWiseTimeSeries(e,t,o){for(var a=0,r=[];a<t;){var i=Math.floor(Math.random()*(o.max-o.min+1))+o.min;r.push([e,i]),e+=864e5,a++}return r}(chart=new ApexCharts(document.querySelector("#apex_scatter2"),options)).render();options={chart:{height:400,type:"candlestick",dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{candlestick:{colors:{upward:"#4e7e9b",downward:"#e4b1c5"}}},series:[{data:seriesData}],stroke:{show:!0,colors:"#f1f3fa",width:[1,4]},xaxis:{type:"datetime"},grid:{borderColor:"#f1f3fa"},tooltip:{theme:"dark"}};(chart=new ApexCharts(document.querySelector("#apex_candlestick1"),options)).render();var optionsCandlestick={chart:{height:240,type:"candlestick",toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},series:[{data:seriesData}],plotOptions:{candlestick:{colors:{upward:"#99b9c9",downward:"#b7a96f"}}},xaxis:{type:"datetime"},grid:{borderColor:"#f1f3fa"},tooltip:{theme:"dark"}},chartCandlestick=new ApexCharts(document.querySelector("#apex_candlestick2"),optionsCandlestick);chartCandlestick.render();options={chart:{height:160,type:"bar",toolbar:{show:!1,autoSelected:"selection"},dropShadow:{enabled:!0,top:12,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35},selection:{xaxis:{min:new Date("20 Jan 2017").getTime(),max:new Date("10 Dec 2017").getTime()},fill:{color:"#6c757d",opacity:.4},stroke:{color:"#6c757d"}},events:{selection:function(e,t){chartCandlestick.updateOptions({xaxis:{min:t.xaxis.min,max:t.xaxis.max}},!1,!1)}}},dataLabels:{enabled:!1},plotOptions:{bar:{columnWidth:"80%",colors:{ranges:[{from:-1e3,to:0,color:"#ee6c62"},{from:1,to:1e4,color:"#08aeb0"}]}}},series:[{name:"volume",data:seriesDataLinear}],xaxis:{type:"datetime",axisBorder:{offsetX:13}},yaxis:{labels:{show:!1}},grid:{borderColor:"#f1f3fa"},tooltip:{theme:"dark"}};(chart=new ApexCharts(document.querySelector("#apex_candlestick3"),options)).render();options={chart:{height:320,type:"pie",dropShadow:{enabled:!0,top:6,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},stroke:{show:!0,width:2,colors:["transparent"]},series:[44,55,41,17,15],labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#a3cae0","#232f5b","#f06a6c","#f1e299","#08aeb0"],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},tooltip:{theme:"dark",style:{color:"#fff"}},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]};(chart=new ApexCharts(document.querySelector("#apex_pie1"),options)).render();options={chart:{height:320,type:"donut",dropShadow:{enabled:!0,top:6,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},series:[44,55,41,17,15],legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},stroke:{show:!0,width:2,colors:["transparent"]},labels:["Series 1","Series 2","Series 3","Series 4","Series 5"],colors:["#a3cae0","#232f5b","#f06a6c","#f1e299","#08aeb0"],responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}],fill:{type:"gradient"}};(chart=new ApexCharts(document.querySelector("#apex_pie2"),options)).render();options={chart:{height:320,type:"donut",dropShadow:{enabled:!0,top:6,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},stroke:{show:!0,width:2,colors:["#28365f"]},series:[44,55,41,17,15],colors:["#a3cae0","#232f5b","#f06a6c","#f1e299","#08aeb0"],labels:["Comedy","Action","SciFi","Drama","Horror"],dataLabels:{dropShadow:{blur:3,opacity:.8}},fill:{type:"pattern",opacity:1,pattern:{enabled:!0,style:["verticalLines","squares","horizontalLines","circles","slantedLines"]}},states:{hover:{enabled:!1}},legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]};(chart=new ApexCharts(document.querySelector("#apex_pie3"),options)).render();options={chart:{height:320,type:"pie",dropShadow:{enabled:!0,top:6,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},labels:["Series 1","Series 2","Series 3","Series 4"],colors:["#39afd1","#ffbc00","#727cf5","#0acf97"],series:[44,33,54,45],fill:{type:"image",opacity:.85,image:{src:["../assets/images/small/img-1.jpg","../assets/images/small/img-2.jpg","../assets/images/small/img-3.jpg","../assets/images/small/img-4.jpg"],width:25,imagedHeight:25}},stroke:{width:2,colors:["#28365f"]},dataLabels:{enabled:!1},legend:{show:!0,position:"bottom",horizontalAlign:"center",verticalAlign:"middle",floating:!1,fontSize:"14px",offsetX:0,offsetY:-10},responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]};(chart=new ApexCharts(document.querySelector("#apex_pie4"),options)).render();options={chart:{height:320,type:"radialBar",dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{radialBar:{hollow:{size:"70%"},track:{background:"#394b7b",dropShadow:{enabled:!0,top:2,left:0,blur:4,opacity:.15}},dataLabels:{name:{fontSize:"18px"},value:{fontSize:"16px",color:"#b9c2d6"}}}},colors:["#68823f"],series:[70],labels:["CRICKET"]};(chart=new ApexCharts(document.querySelector("#apex_radialbar1"),options)).render();options={chart:{height:350,type:"radialBar",dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{radialBar:{track:{background:"#394b7b"},dataLabels:{name:{fontSize:"18px"},value:{fontSize:"16px",color:"#b9c2d6"},total:{show:!0,label:"Total",formatter:function(e){return 249}}}}},series:[44,55,67,83],labels:["Apples","Oranges","Bananas","Berries"]};(chart=new ApexCharts(document.querySelector("#apex_radialbar2"),options)).render();options={chart:{height:380,type:"radialBar",dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{radialBar:{startAngle:-135,endAngle:135,track:{background:"#394b7b"},dataLabels:{name:{fontSize:"18px",color:void 0,offsetY:120},value:{offsetY:76,fontSize:"16px",color:"#b9c2d6",formatter:function(e){return e+"%"}}}}},fill:{gradient:{enabled:!0,shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},colors:["#727cf5"],series:[67],labels:["Median Ratio"],responsive:[{breakpoint:380,options:{chart:{height:280}}}]};(chart=new ApexCharts(document.querySelector("#apex_radialbar3"),options)).render();var chart;options={chart:{height:380,type:"radialBar",toolbar:{show:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#293450",image:void 0,imageOffsetX:0,imageOffsetY:0,position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#394b7b",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{showOn:"always",name:{offsetY:-10,show:!0,color:"#b9c2d6",fontSize:"17px"},value:{formatter:function(e){return parseInt(e)},color:"#b9c2d6",fontSize:"36px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#cba280","#2c3e50"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},series:[75],stroke:{lineCap:"round"},labels:["Percent"]};(chart=new ApexCharts(document.querySelector("#apex_radialbar4"),options)).render(),Apex.grid={padding:{right:0,left:0}},Apex.dataLabels={enabled:!1};var randomizeArray=function(e){for(var t,o,a=e.slice(),r=a.length;0!==r;)o=Math.floor(Math.random()*r),t=a[r-=1],a[r]=a[o],a[o]=t;return a},sparklineData=[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,93,53,61,27,54,43,19,46],colorPalette=["#00D8B6","#008FFB","#FEB019","#FF4560","#775DD0"],spark1={chart:{type:"area",height:160,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},stroke:{width:2,curve:"straight"},fill:{opacity:.2},series:[{name:"Metrica Sales ",data:randomizeArray(sparklineData)}],yaxis:{min:0},colors:["#f93b7a"],title:{text:"$424,652",offsetX:20,style:{fontSize:"24px",color:"#aeb4ce"}},tooltip:{theme:"dark"},subtitle:{text:"Sales",offsetX:20,style:{fontSize:"14px",color:"#7a88af"}}};new ApexCharts(document.querySelector("#spark1"),spark1).render();var spark2={chart:{type:"area",height:160,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},stroke:{width:2,curve:"straight"},fill:{opacity:.2},series:[{name:"Metrica Expenses ",data:randomizeArray(sparklineData)}],yaxis:{min:0},colors:["#fbb624"],title:{text:"$235,312",offsetX:20,style:{fontSize:"24px",color:"#aeb4ce"}},tooltip:{theme:"dark"},subtitle:{text:"Expenses",offsetX:20,style:{fontSize:"14px",color:"#7a88af"}}};new ApexCharts(document.querySelector("#spark2"),spark2).render();var spark3={chart:{type:"area",height:160,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},stroke:{width:2,curve:"straight"},fill:{opacity:.2},series:[{name:"Net Profits ",data:randomizeArray(sparklineData)}],xaxis:{crosshairs:{width:1}},yaxis:{min:0},colors:["#0acf97"],title:{text:"$135,965",offsetX:20,style:{fontSize:"24px",color:"#aeb4ce"}},tooltip:{theme:"dark"},subtitle:{text:"Profits",offsetX:20,style:{fontSize:"14px",color:"#7a88af"}}};new ApexCharts(document.querySelector("#spark3"),spark3).render();var options1={chart:{type:"line",width:140,height:60,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},series:[{data:[25,66,41,89,63,25,44,12,36,9,54]}],stroke:{width:2,curve:"smooth"},markers:{size:0},colors:["#727cf5"],tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},options3=(options2={chart:{type:"line",width:140,height:60,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},colors:["#0acf97"],series:[{data:[12,14,2,47,42,15,47,75,65,19,14]}],stroke:{width:2,curve:"smooth"},markers:{size:0},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},{chart:{type:"line",width:140,height:60,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},colors:["#ffbc00"],series:[{data:[47,45,74,14,56,74,14,11,7,39,82]}],stroke:{width:2,curve:"smooth"},markers:{size:0},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}}),options4={chart:{type:"line",width:140,height:60,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},colors:["#fa5c7c"],series:[{data:[15,75,47,65,14,2,41,54,4,27,15]}],stroke:{width:2,curve:"smooth"},markers:{size:0},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},options5={chart:{type:"bar",width:100,height:60,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{bar:{columnWidth:"80%"}},colors:["#727cf5"],series:[{data:[25,66,41,89,63,25,44,12,36,9,54]}],labels:[1,2,3,4,5,6,7,8,9,10,11],xaxis:{crosshairs:{width:1}},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},options6={chart:{type:"bar",width:100,height:60,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{bar:{columnWidth:"80%"}},colors:["#0acf97"],series:[{data:[12,14,2,47,42,15,47,75,65,19,14]}],labels:[1,2,3,4,5,6,7,8,9,10,11],xaxis:{crosshairs:{width:1}},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},options7={chart:{type:"bar",width:100,height:60,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{bar:{columnWidth:"80%"}},colors:["#ffbc00"],series:[{data:[47,45,74,14,56,74,14,11,7,39,82]}],labels:[1,2,3,4,5,6,7,8,9,10,11],xaxis:{crosshairs:{width:1}},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},options8={chart:{type:"bar",width:100,height:60,sparkline:{enabled:!0},dropShadow:{enabled:!0,top:10,left:0,bottom:0,right:0,blur:2,color:"#010f42",opacity:.35}},plotOptions:{bar:{columnWidth:"80%"}},colors:["#fa5c7c"],series:[{data:[25,66,41,89,63,25,44,12,36,9,54]}],labels:[1,2,3,4,5,6,7,8,9,10,11],xaxis:{crosshairs:{width:1}},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};new ApexCharts(document.querySelector("#chart1"),options1).render(),new ApexCharts(document.querySelector("#chart2"),options2).render(),new ApexCharts(document.querySelector("#chart3"),options3).render(),new ApexCharts(document.querySelector("#chart4"),options4).render(),new ApexCharts(document.querySelector("#chart5"),options5).render(),new ApexCharts(document.querySelector("#chart6"),options6).render(),new ApexCharts(document.querySelector("#chart7"),options7).render(),new ApexCharts(document.querySelector("#chart8"),options8).render();