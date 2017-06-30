// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.directive("drag", {
  bind (el, binding, vnode) {
    $(el).draggable({
      drag: function (event, ui) {
        if(binding.value){
          binding.value.x = ui.position.left +"px" ;
          binding.value.y = ui.position.top +"px" ;
        }
        vnode.componentInstance &&  vnode.componentInstance.$emit("onDrag")
      }
    })
  },

  unbind(el){
    $(el).draggable("destroy")
  }
});

Vue.directive("resize", {
  bind (el, binding, vnode) {
    $(el).resizable({
      resize: function (event, ui) {
        if(binding.value){
          binding.value.width = ui.size.width + "px";
          binding.value.height = ui.size.height + "px";
        }
        vnode.componentInstance && vnode.componentInstance.$emit("onResize")
      }
    })
  },
  unbind(el){
    $(el).resize("destroy")
  }
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
});
