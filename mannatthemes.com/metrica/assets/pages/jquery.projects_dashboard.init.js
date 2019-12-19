$(function(){"use strict";new ApexCharts(document.querySelector("#d2_performance"),{chart:{type:"radialBar",height:300,dropShadow:{enabled:!0,top:5,left:0,bottom:0,right:0,blur:5,color:"#b6c2e4",opacity:.35}},plotOptions:{radialBar:{offsetY:-10,startAngle:0,endAngle:270,hollow:{margin:5,size:"50%",background:"transparent"},track:{show:!1},dataLabels:{name:{fontSize:"18px"},value:{fontSize:"16px",color:"#50649c"}}}},colors:["#1ecab8","#fd3c97","#6d81f5"],stroke:{lineCap:"round"},series:[71,63,100],labels:["Completed","Active","Assigned"],legend:{show:!0,floating:!0,position:"left",offsetX:60,offsetY:0},responsive:[{breakpoint:480,options:{legend:{show:!0,floating:!0,position:"left",offsetX:10,offsetY:0}}}]}).render(),Morris.Bar({element:"morris-bar-chart",data:[{y:"Marketech World",a:1e4,b:8e3,c:7800},{y:"Book My World",a:8500,b:7e3,c:6500},{y:"Organic Farming",a:9e3,b:7500,c:7e3},{y:"Transfer money",a:9500,b:8500,c:7500},{y:"Trading System",a:7500,b:5500,c:5e3},{y:"Banking",a:7500,b:5500,c:5e3}],barGap:8,barSizeRatio:.3,barShape:"soft",barRadius:[5,5,5,5],xkey:"y",ykeys:["a","b","c"],labels:["Total","Used","Target"],barColors:["#2c77f4","#1ecab8","#f3cd6d"],hideHover:"auto",preUnits:"$",gridLineColor:"#d2d6e6",gridTextColor:"#8997bd",resize:!0}),$(function(){var t=$(".todo-list"),a=$(".todo-list-input");$(".add-new-todo-btn").on("click",function(e){e.preventDefault();var o=$(this).prevAll(".todo-list-input").val();o&&(t.append("<div class='todo-box'><i class='remove far fa-trash-alt'></i><div class='todo-task'><label class='ckbox'><input type='checkbox'/><span>"+o+"</span><i class='input-helper'></i></label></div></div>"),a.val(""))}),t.on("change",".ckbox",function(){$(this).attr("checked")?$(this).removeAttr("checked"):$(this).attr("checked","checked"),$(this).closest(".todo-box").toggleClass("completed")}),t.on("click",".remove",function(){$(this).parent().remove()})})}),Morris.Donut({element:"work_load",data:[{label:"P1",value:50},{label:"P3",value:114},{label:"P2",value:230}],resize:!0,colors:["#1ecab8","#fd3c97","#6d81f5"],labelColor:"#50649c",backgroundColor:"transparent",fillOpacity:.1,formatter:function(e){return e+"h"}});