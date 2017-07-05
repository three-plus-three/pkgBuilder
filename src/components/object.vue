<template>
  <div style="position:absolute;background-size: 100% 100%;background-repeat: no-repeat;overflow: hidden"
       :style="style" @click.self="edit">
    <slot></slot>
    <div style="position: relative" v-if="object.objects">
      <img-object
        v-for="(subObj,i) in object.objects"
        :object="subObj"
        :parent-path="currentPath"
        :index="i"
        v-drag="object.objects[i]"
        v-resize="object.objects[i]"
        @onDrag="$emit('onDrag')"
        @onResize="$emit('onResize')"
        @change="$emit('change')"
        :key="subObj"
        :base-path="basePath">
      </img-object>
    </div>
    <!--<modal cancel-text="取消" ok-text="确认" v-model="showEdit">-->
    <!--<prop-form>-->
    <!--<tex-field label="image_url" v-model="object.image_url" @input="imageChange"></tex-field>-->
    <!--</prop-form>-->
    <!--</modal>-->

    <!--<prop-form @submit="appendChild" :need-validate="false">-->
    <!--<modal cancel-text="取消" ok-text="确认" v-model="showAppend">-->
    <!--<tex-field label="image_url" name="image_url"></tex-field>-->
    <!--<tex-field label="width" value="100px" name="width"></tex-field>-->
    <!--<tex-field label="height" value="100px" name="height"></tex-field>-->
    <!--<tex-field label="x" value="100px" name="x"></tex-field>-->
    <!--<tex-field label="y" value="100px" name="y"></tex-field>-->
    <!--<div slot="footer">-->
    <!--<button type="button" class="btn btn-default" @click="showAppend=false">取消</button>-->
    <!--<button type="submit" class="btn btn-info">确认</button>-->
    <!--</div>-->
    <!--</modal>-->
    <!--</prop-form>-->
  </div>
</template>
<script type="text/ecmascript-6">

  // $/abc/abc
  var pathReg = /^\$([\/].+)+/;

  import { Modal } from 'uiv'
  import texField from './txt_field'
  import propForm from './form'
  export default{
    name: "imgObject",

    data (){
      return {
        img_color: "",
        currentPath: [],
        object$: this.object
      }
    },

    watch: {
      index(){
        this.calcCurrentPath()
      }
    },

    props: {
      parentPath: Array,
      object: Object,
      basePath: String,
      index: Number
    },


    methods: {
      edit(){
        this.$root.$emit("showCompleteInfo", {path: this.currentPath});
        this.$root.$emit("selectPicture", this.currentPath)
      },



//      imageChange(){
//        this.object = {...this.object};
//        this.$emit('change')
//      },

//      appendChild(v){
//        (this.object.objects = this.object.objects || []);
//        this.object.objects.push(v);
//        this.showAppend = false;
//        this.$emit('change')
//      },

      calcCurrentPath(){
        this.currentPath = this.parentPath.slice();
        this.currentPath.push(this.index);
        this.object.design.path = this.currentPath
      }
    },

    computed: {
      style(){
        if (this && this.object)
          return {
            top: this.object.y,
            left: this.object.x,
            backgroundImage: pathReg.test(this.image_url) ?
            'url(' + applicationRoot + this.basePath + [].slice.call(this.image_url, 1).join("") + ')' :
            'url(' + applicationRoot + (this.image_url) + ')',
            width: this.object.width,
            height: this.object.height
          }
      },

      image_url (){
        if (this.object.image_url) {
          var splitUrl = this.object.image_url.split(".");
          return splitUrl[0] + this.img_color + "." + splitUrl[1]
        }
        return ""
      }
    },

    created(){
      this.$root.$on("nodeUpdate", ()=> {
        console.log(this.object)
        this.$forceUpdate();
      });
      this.calcCurrentPath()
    },

    components: {
      propForm,
      texField,
      Modal
    }

  }
</script>
