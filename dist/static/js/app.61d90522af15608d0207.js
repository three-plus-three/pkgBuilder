webpackJsonp([1],{169:function(e,t,n){var a=n(14)(n(75),n(174),null,null,null);e.exports=a.exports},170:function(e,t,n){var a=n(14)(n(76),n(171),null,null,null);e.exports=a.exports},171:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group",attrs:{"data-vv-scope":e.validateScope}},[e.label?n("label",{staticClass:"control-label",class:"col-sm-"+e.labelSpan},[e._v(e._s(e.label))]):e._e(),e._v(" "),n("div",{class:(a={},a["col-sm-"+e.controlSpan]=!0,a)},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.innerValue,expression:"innerValue"}],staticClass:"form-control",attrs:{type:"text",name:e.name,disbaled:e.disabled,placeholder:e.placeholder,readonly:e.readonly},domProps:{value:e.value,value:e.innerValue},on:{input:function(t){t.target.composing||(e.innerValue=t.target.value)}}})]),e._v(" "),e.errorBag&&e.errorBag.has(e.name,e.validateScope)?n("i",{staticClass:"fa fa-warning"}):e._e(),e._v(" "),e.errorBag&&e.errorBag.has(e.name,e.validateScope)?n("span",{staticClass:"help text-danger"},[e._v(e._s(e.errorBag&&e.errorBag.first(e.name,e.validateScope)))]):e._e()]);var a},staticRenderFns:[]}},172:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("form",{staticClass:"form-horizontal",attrs:{novalidate:!e.needValidate,id:e.id,action:e.action,method:e.method,"data-vv-scope":e.validateScope},on:{submit:function(t){t.preventDefault(),e.beforeSubmit(t)}}},[e._t("default")],2)},staticRenderFns:[]}},173:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group",attrs:{"data-vv-scope":e.validateScope}},[e.label?n("label",{staticClass:"control-label",class:"col-sm-"+e.labelSpan},[e._v(e._s(e.label))]):e._e(),e._v(" "),n("div",{class:(a={},a["col-sm-"+e.controlSpan]=!0,a)},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.innerValue,expression:"innerValue"}],staticClass:"form-control",attrs:{type:"text",name:e.name,disbaled:e.disabled,placeholder:e.placeholder,readonly:e.readonly},domProps:{value:e.value,value:e.innerValue},on:{blur:e.blur,input:function(t){t.target.composing||(e.innerValue=t.target.value)}}})]),e._v(" "),e._t("default")],2);var a},staticRenderFns:[]}},174:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"absolute","background-size":"100% 100%","background-repeat":"no-repeat",overflow:"hidden"},style:e.style,on:{click:function(t){if(t.target!==t.currentTarget)return null;e.edit(t)}}},[e._t("default"),e._v(" "),e.object.objects?n("div",{staticStyle:{position:"relative"}},e._l(e.object.objects,function(t,a){return n("img-object",{directives:[{name:"drag",rawName:"v-drag",value:e.object.objects[a],expression:"object.objects[i]"},{name:"resize",rawName:"v-resize",value:e.object.objects[a],expression:"object.objects[i]"}],key:t,attrs:{object:t,"parent-path":e.currentPath,index:a,"base-path":e.basePath},on:{onDrag:function(t){e.$emit("onDrag")},onResize:function(t){e.$emit("onResize")},change:function(t){e.$emit("change")}}})})):e._e()],2)},staticRenderFns:[]}},175:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"col-md-2"},[n("button",{staticClass:"btn btn-info",on:{click:e.showAppendModal}},[e._v("添加子节点")]),e._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:e.removeNode}},[e._v("删除节点")]),e._v(" "),n("a",{attrs:{href:"data:application/json,"+e.json,download:"export.json"}},[n("i",{staticClass:"glyphicon glyphicon-export"}),e._v("\n      导出JSON\n    ")]),e._v(" "),n("div",{staticStyle:{height:"400px"}},[n("js-tree",{directives:[{name:"tree",rawName:"v-tree",value:e.treeData,expression:"treeData"}],ref:"pictureTree",staticStyle:{"margin-top":"10px"},on:{selectNode:e.selectNode}})],1),e._v(" "),n("prop-form",[e.object$Edit.base_path?n("tex-field",{attrs:{label:"base_path","label-span":"4","control-span":"7"},model:{value:e.object$Edit.base_path,callback:function(t){e.object$Edit.base_path=t},expression:"object$Edit.base_path"}}):e._e(),e._v(" "),e.object$Edit.includes?n("textarea-field",{attrs:{label:"includes","is-json":!0,"label-span":"4","control-span":"7"},model:{value:e.object$Edit.includes,callback:function(t){e.object$Edit.includes=t},expression:"object$Edit.includes"}}):e._e(),e._v(" "),n("tex-field",{attrs:{label:"image_url","label-span":"4","control-span":"7"},model:{value:e.object$Edit.image_url,callback:function(t){e.object$Edit.image_url=t},expression:"object$Edit.image_url"}}),e._v(" "),n("tex-field",{attrs:{label:"width","label-span":"4","control-span":"7"},model:{value:e.object$Edit.width,callback:function(t){e.object$Edit.width=t},expression:"object$Edit.width"}}),e._v(" "),n("tex-field",{attrs:{label:"height","label-span":"4","control-span":"7"},model:{value:e.object$Edit.height,callback:function(t){e.object$Edit.height=t},expression:"object$Edit.height"}}),e._v(" "),e.object$Edit.x?n("tex-field",{attrs:{label:"x","label-span":"4","control-span":"7"},model:{value:e.object$Edit.x,callback:function(t){e.object$Edit.x=t},expression:"object$Edit.x"}}):e._e(),e._v(" "),e.object$Edit.y?n("tex-field",{attrs:{label:"y","label-span":"4","control-span":"7"},model:{value:e.object$Edit.y,callback:function(t){e.object$Edit.y=t},expression:"object$Edit.y"}}):e._e(),e._v(" "),n("textarea-field",{attrs:{label:"instance","label-span":"4","is-json":!0,"control-span":"7"},model:{value:e.object$Edit.instance,callback:function(t){e.object$Edit.instance=t},expression:"object$Edit.instance"}}),e._v(" "),n("textarea-field",{attrs:{label:"backend","label-span":"4","is-json":!0,"control-span":"7"},model:{value:e.object$Edit.backend,callback:function(t){e.object$Edit.backend=t},expression:"object$Edit.backend"}})],1)],1),e._v(" "),n("div",{staticClass:"col-md-10",staticStyle:{position:"relative"}},[n("div",{directives:[{name:"resize",rawName:"v-resize",value:e.panelConfig,expression:"panelConfig"}],staticStyle:{"background-size":"100% 100%",position:"absolute"},style:e.style,on:{click:function(t){if(t.target!==t.currentTarget)return null;e.$root.$emit("showCompleteInfo",{object:e.panelConfig}),e.$root.$emit("selectPicture",e.panelConfig.design.path)},onResize:e.onJsonChange}},[e._l(e.panelConfig.objects,function(t,a){return n("img-object",{directives:[{name:"drag",rawName:"v-drag.relative",value:e.panelConfig.objects[a],expression:"panelConfig.objects[i]",modifiers:{relative:!0}},{name:"resize",rawName:"v-resize",value:e.panelConfig.objects[a],expression:"panelConfig.objects[i]"}],key:t,attrs:{object:t,"parent-path":e.panelConfig.design.path,index:a,"base-path":e.panelConfig.base_path},on:{onDrag:e.onJsonChange,onResize:e.onJsonChange,change:e.onJsonChange}})}),e._v(" "),n("prop-form",{attrs:{"need-validate":!1},on:{submit:e.appendChild}},[n("modal",{attrs:{"cancel-text":"取消","ok-text":"确认"},model:{value:e.showAppend,callback:function(t){e.showAppend=t},expression:"showAppend"}},[n("tex-field",{attrs:{label:"名称",name:"text"}}),e._v(" "),n("tex-field",{attrs:{label:"添加数量",name:"repeat"}}),e._v(" "),n("tex-field",{attrs:{label:"image_url",name:"image_url"}}),e._v(" "),n("tex-field",{attrs:{label:"width",value:"100px",name:"width"}}),e._v(" "),n("tex-field",{attrs:{label:"height",value:"100px",name:"height"}}),e._v(" "),n("textarea-field",{attrs:{label:"instance",value:"{}",name:"instance","is-json":!0}}),e._v(" "),n("textarea-field",{attrs:{label:"backend",value:"{}",name:"backend","is-json":!0}}),e._v(" "),n("tex-field",{attrs:{label:"x",value:"100px",name:"x"}}),e._v(" "),n("tex-field",{attrs:{label:"y",value:"100px",name:"y"}}),e._v(" "),n("div",{slot:"footer"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(t){e.showAppend=!1}}},[e._v("取消")]),e._v(" "),n("button",{staticClass:"btn btn-info",attrs:{type:"submit"}},[e._v("确认")])])],1)],1)],2)])])},staticRenderFns:[]}},68:function(e,t,n){var a=n(14)(n(74),n(172),null,null,null);e.exports=a.exports},69:function(e,t,n){var a=n(14)(n(77),n(173),null,null,null);e.exports=a.exports},71:function(e,t,n){var a=n(14)(n(73),n(175),null,null,null);e.exports=a.exports},73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(40),i=n.n(a),o=n(83),r=n.n(o),l=n(41),s=n.n(l),c=n(169),u=n.n(c),d=n(53),p=(n.n(d),n(69)),h=n.n(p),f=n(170),v=n.n(f),b=n(68),m=n.n(b),g=/^\$([\/].+)+/;t.default={data:function(){return{showEdit:!1,showAppend:!1,showJSON:!1,panelConfig:JSON.parse(panelConfig),json:panelConfig,treeData:{},object$Edit:{},path$Edit:[]}},methods:{selectNode:function(e){this.$root.$emit("showCompleteInfo",{path:e.node.id.split("-")})},instanceAndFirstSelected:function(){var e=$(this.$refs.pictureTree.$el).jstree(!0),t=e.get_selected(!0);return 0===t.length?[null,e]:[t[0],e]},resetChildrenId:function(e,t){t.children.map(function(t,n){var a=e.get_node(t);e.set_id(a,t.substr(0,t.length-1)+n.toString())})},showAppendModal:function(){var e=this.instanceAndFirstSelected(),t=s()(e,1),n=t[0];this.showAppend=!!n,!n&&alert("请选择一个节点作为父节点")},removeNode:function(){var e=this.instanceAndFirstSelected(),t=s()(e,2),n=t[0],a=t[1];if("#"!==n.parent){var i=this.searchObjectByPath(n.parent.split("-")),o=n.id.split("-"),l=o[o.length-1];new Function(i+".objects.splice("+l+",1);").call(this),this.panelConfig=r()({},this.panelConfig),a.delete_node(n);var c=a.get_node(n.parent);this.resetChildrenId(a,c),this.$root.$emit("nodeUpdate"),this.onJsonChange()}},appendChild:function(e){this.$root.$emit("createNode",{object:e}),this.showAppend=!1,this.onJsonChange()},onJsonChange:function(){this.json=i()(this.panelConfig)},calcTreeData:function(){function e(t){var n={};return n=r()({},t.design),n.icon="glyphicon glyphicon-picture",n.id=n.path.join("-"),Array.isArray(t.objects)&&(n.children=[],t.objects.map(function(t){n.children.push(e(t))})),n}this.treeData=e(this.panelConfig)},searchObjectByPath:function(e){var t=e?e.length:0,n=t&&1!==t?"this.panelConfig.objects":"this.panelConfig";return 0!==t&&1!==t&&e.map(function(e,a){0!=a&&(n+=a==t-1?"["+e+"]":"["+e+"].objects")}),n}},computed:{style:function(){return{backgroundImage:g.test(this.panelConfig.image_url)?"url("+applicationRoot+this.panelConfig.base_path+[].slice.call(this.panelConfig.image_url,1).join("")+")":"url("+applicationRoot+this.panelConfig.object.image_url+")",width:this.panelConfig.width,height:this.panelConfig.height}}},created:function(){var e=this;this.calcTreeData(),this.$root.$on("showCompleteInfo",function(t){var n=t.path;new Function("this.object$Edit = "+e.searchObjectByPath(n)).call(e),e.path$Edit=n}),this.$root.$on("createNode",function(t){var n=t.object,a=e.instanceAndFirstSelected(),i=s()(a,2),o=i[0],r=i[1],l=n.height,c=n.image_url,u=n.instance,d=n.backend,p=n.repeat,h=n.text,f=n.width,v=n.x,b=n.y;if(~~p){for(var m=e.searchObjectByPath(o.id.split("-"))+".objects",g="("+m+" = "+m+" || []) ; "+m+".push(v)",j=0;j<parseInt(p);j++){var _=o.id.split("-"),x=_.slice();x.push(o.children.length);var $={text:h,path:x,icon:"glyphicon glyphicon-picture",id:x.join("-")};r.create_node(o.id,$),new Function("v",g).call(e,{width:f,x:v,y:b,backend:d,height:l,instance:u,image_url:c,design:{path:x,text:h}})}e.onJsonChange(),e.$root.$emit("nodeUpdate")}}),this.$root.$on("selectPicture",function(t){var n=$(e.$refs.pictureTree.$el).jstree(!0);n.deselect_all(),n.select_node(t.join("-"))}),this.$watch("object$Edit",function(t){var n=e.instanceAndFirstSelected();if(!s()(n,1)[0])return alert("请选择需要编辑的节点");var a=e.searchObjectByPath(e.path$Edit),i=a.split("["),o=i[i.length-1].replace("]","");i.pop();var r=i.join("["),l="";l=r&&o?"this.$set("+r+","+o+",object)":a+" = object",new Function("object",l).call(e,t),e.onJsonChange()},{deep:!0})},components:{textareaField:v.a,Modal:d.Modal,texField:h.a,propForm:m.a,imgObject:u.a}}},74:function(e,t,n){"use strict";function a(e,t,a){var i=e,o=!0,r=!1,c=void 0;try{for(var u,d=l()(t);!(o=(u=d.next()).done);o=!0){var p=u.value;if(a&&(p=n.i(s.underscored)(p)),void 0===i)return;i=i[p]}}catch(e){r=!0,c=e}finally{try{!o&&d.return&&d.return()}finally{if(r)throw c}}return i}Object.defineProperty(t,"__esModule",{value:!0});var i=n(41),o=n.n(i),r=n(39),l=n.n(r),s=n(131);n.n(s);t.default={props:{splitName:{default:function(){return!0}},id:String,underscored:{type:Boolean,default:function(){return!0}},needValidate:Boolean,validator:{},action:{default:function(){return"#"}},method:{default:function(){return"POST"}},validateScope:{default:function(){return"valid"}}},methods:{fillForm:function(e,t){if(1===arguments.length&&(t=e,e=this.$children),Array.isArray(e)&&0!=e.length){var n=!0,i=!1,r=void 0;try{for(var c,u=l()(e);!(n=(c=u.next()).done);n=!0){var d=c.value;if("function"==typeof d.formValue&&void 0!==d.name&&d.name){var p,h;if(-1!=d.name.indexOf("[")&&-1!=d.name.indexOf("]")){var f=d.name.replace("]","").split("["),v=o()(f,2);p=v[0],h=v[1],p=[p]}else p=this.splitName?d.name.split("."):[d.name];var b=a(t,p,s.underscored);void 0!==b&&(Array.isArray(b)&&h&&(b=b[h]),d.formValue(b))}this.fillForm(d.$children,t)}}catch(e){i=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw r}}}},formData:function(e,t){var a=this;void 0===t&&(t={});var i=!0,r=!1,c=void 0;try{for(var u,d=l()(e);!(i=(u=d.next()).done);i=!0){var p=u.value;if("function"!=typeof p.formValue)Array.isArray(p.$children)&&this.formData(p.$children,t);else{var h,f,v=p.formValue();if(void 0!==v.value&&void 0!==v.name)if(v.name.indexOf(".")>0&&this.splitName){var b=v.name.split("."),m=t;b.forEach(function(e){a.underscored&&(e=n.i(s.underscored)(e)),void 0===m[e]&&(m[e]={}),b.indexOf(e)===b.length-1?m[e]=v.value:m=m[e]})}else if(-1!=v.name.indexOf("[")&&-1!=v.name.indexOf("]")){var g=v.name.replace("]","").split("["),j=o()(g,2);h=j[0],f=j[1],this.underscored&&(h=n.i(s.underscored)(h)),t[h]||(t[h]=[]),t[h][f]=v.value}else h=v.name,this.underscored&&(h=n.i(s.underscored)(h)),t[h]=v.value}}}catch(e){r=!0,c=e}finally{try{!i&&d.return&&d.return()}finally{if(r)throw c}}return t},beforeSubmit:function(){var e=this;this.needValidate?this.validator.validateAll(this.validateScope).then(function(t){e.$nextTick(function(){t&&!e.errors.any()&&e.$emit("submit",e.formData(e.$children))})},function(t){console.log(e.validator)}):this.$emit("submit",this.formData(this.$children))}}}},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(53),i=(n.n(a),n(69)),o=n.n(i),r=n(68),l=n.n(r),s=/^\$([\/].+)+/;t.default={name:"imgObject",data:function(){return{img_color:"",currentPath:[],object$:this.object}},watch:{index:function(){this.resetCurrentPath()}},props:{parentPath:Array,object:Object,basePath:String,index:Number},methods:{edit:function(){this.$root.$emit("showCompleteInfo",{path:this.currentPath}),this.$root.$emit("selectPicture",this.currentPath)},resetCurrentPath:function(){this.currentPath=this.parentPath.slice(),this.currentPath.push(this.index),this.object.design.path=this.currentPath}},computed:{style:function(){if(this&&this.object)return{top:this.object.y,left:this.object.x,backgroundImage:s.test(this.image_url)?"url("+applicationRoot+this.basePath+[].slice.call(this.image_url,1).join("")+")":"url("+applicationRoot+this.image_url+")",width:this.object.width,height:this.object.height}},image_url:function(){if(this.object.image_url){var e=this.object.image_url.split(".");return e[0]+this.img_color+"."+e[1]}return""}},created:function(){var e=this;this.$root.$on("nodeUpdate",function(){e.$forceUpdate()}),this.resetCurrentPath()},components:{propForm:l.a,texField:o.a,Modal:a.Modal}}},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(40),i=n.n(a),o=n(84),r=n.n(o);t.default={data:function(){return{innerValue:this.value}},props:{isJson:Boolean,label:String,name:String,value:{default:function(){return""}},disabled:Boolean,placeholder:String,readonly:String,controlSpan:{type:String,default:function(){return"8"}},labelSpan:{type:String,default:function(){return"2"}},isNumber:{type:Boolean,default:function(){return!1}},validateScope:{type:String,default:function(){return"valid"}},errorBag:{}},watch:{innerValue:function(e){if(this.isJson){if("object"===(void 0===e?"undefined":r()(e)))this.$emit("input",e);else if("string"==typeof e)try{this.$emit("input",JSON.parse(e))}catch(e){console.error("无效JSON")}}else this.$emit("input",e)},value:function(e){this.isJson&&"object"===(void 0===e?"undefined":r()(e))?this.innerValue=i()(e):this.innerValue=e}},methods:{formValue:function(e){if(void 0===e){var t={};if(this.isJson)if("object"===r()(this.innerValue))t=this.innerValue;else if("string"==typeof this.innerValue)try{t=JSON.parse(this.innerValue)}catch(e){console.error("无效JSON"),t="无效JSON"}return this.disabled?{}:{name:this.name,value:this.isJson?t:this.innerValue}}this.innerValue=e}},created:function(){this.isJson&&"object"===r()(this.innerValue)&&(this.innerValue=i()(this.innerValue))}}},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{innerValue:this.value,valueJointedPrefix:this.valuePrefix+this.innerValue}},props:{valuePrefix:String,labelPosition:{default:function(){return"before"}},label:String,name:String,value:{default:function(){return""}},disabled:Boolean,placeholder:String,readonly:Boolean,controlSpan:{type:String,default:function(){return"8"}},helpText:String,labelSpan:{type:String,default:function(){return"2"}},isNumber:{type:Boolean,default:function(){return!1}},validateScope:{type:String,default:function(){return"valid"}},mask:{default:function(){return""}},errorBag:{}},watch:{innerValue:function(e){this.$emit("input",e?e.toString():e)},value:function(e){this.innerValue=e}},methods:{blur:function(){},formValue:function(e){if(void 0===e)return this.disabled?{}:{name:this.name,value:this.isNumber?parseFloat(this.innerValue):this.innerValue};this.innerValue=e}}}},78:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(72),i=n(71),o=n.n(i);a.a.config.productionTip=!1,a.a.directive("drag",{bind:function(e,t,n){$(e).draggable({drag:function(e,a){t.value&&(t.value.x=a.position.left+"px",t.value.y=a.position.top+"px"),n.componentInstance&&n.componentInstance.$emit("onDrag")}})},unbind:function(e){$(e).draggable("destroy")}}),a.a.directive("resize",{bind:function(e,t,n){$(e).resizable({resize:function(e,a){t.value&&(t.value.width=a.size.width+"px",t.value.height=a.size.height+"px"),n.componentInstance&&n.componentInstance.$emit("onResize")}})},unbind:function(e){$(e).resize("destroy")}}),a.a.component("jsTree",{render:function(e){return e("div",null,[])}}),a.a.directive("tree",{bind:function(e,t,n){$(e).jstree({core:{check_callback:!0,data:t.value}}),$(e).on("select_node.jstree",function(){n.componentInstance.$emit("selectNode",arguments[1])}),n.componentInstance.$emit("treeMounted",$(e).jstree(!0))}}),new a.a({el:"#app",render:function(){return(0,arguments[0])(o.a,null,[])},components:{App:o.a}})}},[78]);
//# sourceMappingURL=app.61d90522af15608d0207.js.map