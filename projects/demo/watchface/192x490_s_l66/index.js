try{(()=>{var e=__$$hmAppManager$$__.currentApp;var t=e.current,{px:a}=(new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(e,t)),e.app.__globals__);function s(e,t=null){let i;if("object"==typeof e)if(Array.isArray(e)){i=[];for(let t in e)i.push(s(e[t]))}else if(null===e)i=null;else if(e.constructor===RegExp)i=e;else{i={};for(let t in e)i[t]=s(e[t])}else i=e;if(null!=t)for(let e in t)i[e]=t[e];return i}class h{constructor(e){this.widget=hmUI.createWidget(hmUI.widget.IMG,e),"url"in e&&this.href(e.url)}href(e){this.widget.addEventListener(hmUI.event.CLICK_UP,(function(t){hmApp.startApp({url:e,native:!0})}))}}class p{constructor(e,t){if(this.option=e,this.editType=t,this.editType){for(let e=0,t=this.option.optional_types.length;e<t;e++)if(this.option.optional_types[e].type==this.editType){for(let t in this.option.optional_types[e])"preview"!=t&&"type"!=t&&(this.option[t]=this.option.optional_types[e][t]);delete this.option.optional_types,this.widget=hmUI.createWidget(hmUI.widget.TEXT_IMG,this.option);break}}else this.widget=hmUI.createWidget(hmUI.widget.TEXT_IMG,this.option)}}class o{constructor(e,t){this.option=e,this.editType=t}colorLevel(){if(this.editType)if("number"!=typeof this.option.color){for(let e=0,t=this.option.color.length;e<t;e++)if(this.option.color[e].type==this.editType){this.option.color=this.option.color[e].color,this.Widget=hmUI.createWidget(hmUI.widget.ARC_PROGRESS,this.option);break}}else this.Widget=hmUI.createWidget(hmUI.widget.ARC_PROGRESS,this.option);else this.Widget=hmUI.createWidget(hmUI.widget.ARC_PROGRESS,this.option)}pointerLevel(){if(this.editType)if("string"!=typeof this.option.src){for(let e=0,t=this.option.src.length;e<t;e++)if(this.option.src[e].type==this.editType){this.option.src=this.option.src[e].path,this.Widget=hmUI.createWidget(hmUI.widget.IMG_POINTER,this.option);break}}else this.Widget=hmUI.createWidget(hmUI.widget.IMG_POINTER,this.option);else this.Widget=hmUI.createWidget(hmUI.widget.IMG_POINTER,this.option)}imgLevel(){this.editType?(this.option.image_array[0],this.widget=hmUI.createWidget(hmUI.widget.IMG_LEVEL,this.option)):this.widget=hmUI.createWidget(hmUI.widget.IMG_LEVEL,this.option)}}const n=[];class g{constructor(e){this.editGroup=hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP,e),this.editType=this.editGroup.getProperty(hmUI.prop.CURRENT_TYPE),this.skewX=0,this.skewY=0,this.dateType()}dateType(){switch(this.editType){case hmUI.edit_type.STEP:this.dataType=hmUI.data_type.STEP;break;case hmUI.edit_type.BATTERY:this.dataType=hmUI.data_type.BATTERY;break;case hmUI.edit_type.HEART:this.dataType=hmUI.data_type.HEART;break;case hmUI.edit_type.CAL:this.dataType=hmUI.data_type.CAL;break;case hmUI.edit_type.PAI_WEEKLY:this.dataType=hmUI.data_type.PAI_WEEKLY;break;case hmUI.edit_type.DISTANCE:this.dataType=hmUI.data_type.DISTANCE;break;case hmUI.edit_type.AQI:this.dataType=hmUI.data_type.AQI;break;case hmUI.edit_type.HUMIDITY:this.dataType=hmUI.data_type.HUMIDITY;break;case hmUI.edit_type.UVI:this.dataType=hmUI.data_type.UVI;break;case hmUI.edit_type.STAND:this.dataType=hmUI.data_type.STAND;break;case hmUI.edit_type.WIND:this.dataType=hmUI.data_type.WIND;break;case hmUI.edit_type.SPO2:this.dataType=hmUI.data_type.SPO2;break;case hmUI.edit_type.STRESS:this.dataType=hmUI.data_type.STRESS;break;case hmUI.edit_type.FAT_BURN:this.dataType=hmUI.data_type.FAT_BURNING;break;case hmUI.edit_type.WEATHER:case hmUI.edit_type.TEMPERATURE:this.dataType=hmUI.data_type.WEATHER_CURRENT;break;case hmUI.edit_type.ALTIMETER:this.dataType=hmUI.data_type.ALTIMETER;break;case hmUI.edit_type.ALARM_CLOCK:this.dataType=hmUI.data_type.ALARM_CLOCK}}groupImg(e){this.groupImgOption=s(e),this.groupImgOption.x+=this.skewX,this.groupImgOption.y+=this.skewY;for(let e=0,t=this.groupImgOption.src.length;e<t;e++)if(this.groupImgOption.src[e].type==this.editType){this.groupImgOption.src=this.groupImgOption.src[e].path,this.imgWidget=new h(this.groupImgOption);break}}groupLevel(e){return e.type=this.dataType,this.groupLevelOption=s(e),"color"in this.groupLevelOption?(this.groupLevelOption.center_x+=this.skewX,this.groupLevelOption.center_y+=this.skewY,void new o(this.groupLevelOption,this.editType).colorLevel()):"image_array"in e?(this.groupLevelOption.x+=this.skewX,this.groupLevelOption.y+=this.skewY,void new o(this.groupLevelOption,this.editType).imgLevel()):(this.groupLevelOption.center_x+=this.skewX,this.groupLevelOption.center_y+=this.skewY,void new o(this.groupLevelOption,this.editType).pointerLevel())}groupText(e){e.type=this.dataType,this.groupTextOption=s(e),this.groupTextOption.x+=this.skewX,this.groupTextOption.y+=this.skewY,new p(this.groupTextOption,this.editType)}execute(e,t){n.push({arr:e,callback:t}),e.includes(this.editType)&&t.apply(this)}move(e,t){this.skewX=e,this.skewY=t;for(let e=0,t=n.length;e<t;e++){n[e].arr.includes(this.editType)&&n[e].callback.apply(this)}}}try{(()=>{var e=__$$hmAppManager$$__.currentApp,t=e.current;new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(e,t),"drink");console.log("-----\x3e>>current"),console.log(__$$hmAppManager$$__.currentApp.pid),console.log(__$$hmAppManager$$__.currentApp.current);const a=[],s=[],h=[],p=[],o=[],n=[],_=[],r=[],m=[],l=[],d=[],y=[],I=[],c=[],U=[];for(i=1;i<8;i++)y.push(`images/weeken/${i}.png`),I.push(`images/weeksc/${i}.png`),c.push(`images/weektc/${i}.png`);for(i=1;i<=8;i++)m.push(`images/pai/level/${i}.png`);for(i=0;i<10;i++)l.push(`images/timeaod/hour/${i}.png`),d.push(`images/timeaod/minute/${i}.png`),a.push(`images/font/${i}.png`),o.push(`images/pai/num/${i}.png`),s.push(`images/step/num/${i}.png`),h.push(`images/stress/num/${i}.png`),p.push(`images/power/num/${i}.png`);for(i=1;i<=10;i++)r.push(`images/power/level/${i}.png`),n.push(`images/step/level/${i}.png`),_.push(`images/stress/level/${i}.png`);for(i=0;i<29;i++)U.push(`images/weather/${i}.png`);let u={x:0,y:0,src:"images/background.png",show_level:hmUI.show_level.ONLY_NORMAL},T={x:66,y:127,week_en:y,week_tc:c,week_sc:I,show_level:hmUI.show_level.ONLY_NORMAL|hmUI.show_level.ONAL_AOD},w={x:66,y:127,week_en:y,week_tc:c,week_sc:I,show_level:hmUI.show_level.ONAL_EDIT},E={hour_zero:!0,hour_startX:55,hour_startY:165,hour_array:l,hour_space:0,hour_align:hmUI.align.LEFT,minute_zero:!0,minute_startX:55,minute_startY:250,minute_array:d,minute_space:0,minute_align:hmUI.align.LEFT,show_level:hmUI.show_level.ONLY_NORMAL|hmUI.show_level.ONAL_AOD},v={month_startX:60,month_startY:338,month_align:hmUI.align.CENTER_H,month_zero:0,month_sc_array:a,month_tc_array:a,month_en_array:a,month_unit_tc:"images/datexiegang.png",month_unit_sc:"images/datexiegang.png",month_unit_en:"images/datexiegang.png",day_zero:0,day_follow:1,day_en_array:a,day_sc_array:a,day_tc_array:a},A={x:139,y:209,w:50,type:hmUI.data_type.HEART,font_array:a,h_space:0,align_h:hmUI.align.CENTER_H,show_level:hmUI.show_level.ONLY_NORMAL,invalid_image:"images/null.png"},L={x:140,y:295,w:50,type:hmUI.data_type.HUMIDITY,font_array:a,h_space:0,align_h:hmUI.align.CENTER_H,show_level:hmUI.show_level.ONLY_NORMAL,invalid_image:"images/null.png"},R={x:1,y:295,w:50,type:hmUI.data_type.UVI,font_array:a,h_space:0,align_h:hmUI.align.CENTER_H,show_level:hmUI.show_level.ONLY_NORMAL,invalid_image:"images/null.png"},O={x:1,y:209,w:50,type:hmUI.data_type.WEATHER_CURRENT,font_array:a,h_space:0,align_h:hmUI.align.CENTER_H,show_level:hmUI.show_level.ONLY_NORMAL,invalid_image:"images/null.png",negative_image:"images/fu.png",unit_sc:"images/du.png",unit_tc:"images/du.png",unit_en:"images/du.png"},k={x:6,y:162,h:64,image_array:U,image_length:U.length,type:hmUI.data_type.WEATHER,show_level:hmUI.show_level.ONLY_NORMAL},N=[{type:hmUI.edit_type.PAI_WEEKLY,preview:"images/editpreview/pai.png"},{type:hmUI.edit_type.STEP,preview:"images/editpreview/step.png"}],f=[{type:hmUI.edit_type.STRESS,preview:"images/editpreview/stress.png"},{type:hmUI.edit_type.BATTERY,preview:"images/editpreview/bat.png"}],W={edit_id:105,x:0,y:0,w:192,h:122,select_image:"images/select/topchecked.png",un_select_image:"images/select/topunchecked.png",default_type:hmUI.edit_type.STEP,optional_types:N,count:N.length,tips_BG:"images/select/tip.png",tips_x:40,tips_y:140,tips_width:112,tips_margin:10},x={edit_id:106,x:0,y:374,w:192,h:122,select_image:"images/select/bottomchecked.png",un_select_image:"images/select/bottomunchecked.png",default_type:hmUI.edit_type.BATTERY,optional_types:f,count:f.length,tips_BG:"images/select/tip.png",tips_x:40,tips_y:-50,tips_width:112,tips_margin:10},M=[{type:hmUI.edit_type.PAI_WEEKLY,path:"images/pai/level/0.png"},{type:hmUI.edit_type.STEP,path:"images/step/level/0.png"}],Y=[{type:hmUI.edit_type.STRESS,path:"images/stress/level/0.png"},{type:hmUI.edit_type.BATTERY,path:"images/power/level/0.png"}];const S={x:0,y:0,w:192,h:122,src:M,show_level:hmUI.show_level.ONLY_NORMAL},b={x:55,y:40,w:85,h:21,font_array:o,align_h:hmUI.align.CENTER_H,padding:!1,optional_types:N,show_level:hmUI.show_level.ONLY_NORMAL},C={...S,x:0,y:374,src:Y},$={x:55,y:430,w:85,h:21,font_array:p,align_h:hmUI.align.CENTER_H,padding:!1,optional_types:f,show_level:hmUI.show_level.ONLY_NORMAL},D={x:0,y:0,image_array:n,image_length:n.length,show_level:hmUI.show_level.ONLY_NORMAL},G={x:0,y:374,image_array:r,image_length:r.length,show_level:hmUI.show_level.ONLY_NORMAL};let P={x:0,y:0,w:192,h:490,src:"images/mask100.png",show_level:hmUI.show_level.ONLY_EDIT},H={x:0,y:0,w:192,h:490,src:"images/mask70.png",show_level:hmUI.show_level.ONLY_EDIT};const X=[hmUI.edit_type.STEP,hmUI.edit_type.PAI_WEEKLY],K=[hmUI.edit_type.STRESS,hmUI.edit_type.BATTERY];DeviceRuntimeCore.HmLogger.getLogger("sanjiao");t.module=DeviceRuntimeCore.WatchFace({init_view(){hmUI.createWidget(hmUI.widget.IMG,u),hmUI.createWidget(hmUI.widget.IMG_WEEK,T),hmUI.createWidget(hmUI.widget.TEXT_IMG,A),hmUI.createWidget(hmUI.widget.TEXT_IMG,L),hmUI.createWidget(hmUI.widget.TEXT_IMG,R),hmUI.createWidget(hmUI.widget.TEXT_IMG,O),hmUI.createWidget(hmUI.widget.IMG_LEVEL,k),hmUI.createWidget(hmUI.widget.IMG_DATE,v),hmUI.createWidget(hmUI.widget.IMG_TIME,E);const e=new g(W);switch(e.editType){case hmUI.edit_type.STEP:b.font_array=s,D.image_array=n,D.image_length=n.length;break;case hmUI.edit_type.PAI_WEEKLY:b.font_array=o,b.invalid_image="images/null.png",D.image_array=m,D.image_length=m.length}e.execute(X,(function(){this.groupImg(S),this.groupLevel(D),this.groupText(b)}));const t=new g(x);switch(t.editType){case hmUI.edit_type.STRESS:$.font_array=h,$.invalid_image="images/null.png",G.image_array=_,G.image_length=_.length;break;case hmUI.edit_type.BATTERY:$.x=50,$.font_array=p,$.invalid_image="images/null.png",$.unit_sc="images/power/batsymblo.png",$.unit_tc="images/power/batsymblo.png",$.unit_en="images/power/batsymblo.png",G.image_array=r,G.image_length=r.length}t.execute(K,(function(){this.groupImg(C),this.groupText($),this.groupLevel(G)})),hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_MASK,P),hmUI.createWidget(hmUI.widget.IMG_WEEK,w),hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_MASK,H)},onInit(){console.log("index page.js on init invoke"),this.init_view()},onReady(){console.log("index page.js on ready invoke")},onShow(){console.log("index page.js on show invoke")},onHide(){console.log("index page.js on hide invoke")},onDestory(){console.log("index page.js on destory invoke")}})})()}catch(e){console.log(e)}})()}catch(e){console.log(e)}