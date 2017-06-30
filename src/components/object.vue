<template>
  <div style="position:absolute;background-size: 100% 100%;background-repeat: no-repeat;overflow: hidden"
       :style="style">
    <span style="cursor: pointer"
          @click="showEdit=true"
          class="glyphicon glyphicon-edit">编辑
    </span>

    <span style="cursor: pointer"
          class="glyphicon glyphicon-plus"
          @click="showAppend=true">添加子对象
    </span>

    <slot></slot>

    <div style="position: relative" v-if="object.objects">
      <img-object
        v-for="(subObj,i) in object.objects"
        :object="subObj"
        v-drag="object.objects[i]"
        v-resize="object.objects[i]"
        @onDrag="$emit('onDrag')"
        @onResize="$emit('onResize')"
        @change="$emit('change')"
        :key="subObj"
        :base-path="basePath">
        <span style="cursor: pointer"
              class="glyphicon glyphicon-remove"
              @click="object.objects.splice(i,1);$emit('change')">删除</span>
      </img-object>
    </div>
    <modal cancel-text="取消" ok-text="确认" v-model="showEdit">
      <prop-form>
        <tex-field label="image_url" v-model="object.image_url" @input="imageChange"></tex-field>
      </prop-form>
    </modal>

    <prop-form @submit="appendChild" :need-validate="false">
      <modal cancel-text="取消" ok-text="确认" v-model="showAppend">
        <tex-field label="image_url" name="image_url"></tex-field>
        <tex-field label="width" value="100px" name="width"></tex-field>
        <tex-field label="height" value="100px" name="height"></tex-field>
        <tex-field label="x" value="100px" name="x"></tex-field>
        <tex-field label="y" value="100px" name="y"></tex-field>
        <div slot="footer">
          <button type="button" class="btn btn-default" @click="showAppend=false">取消</button>
          <button type="submit" class="btn btn-info">确认</button>
        </div>
      </modal>
    </prop-form>
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
        showEdit: false,
        img_color: "",
        showAppend: false
      }
    },

    watch: {
      ["object.image_url"](){
        this.$emit('change')
      }
    },

    props: {
      object: Object,
      basePath: String
    },

    methods: {
      imageChange(){
        this.object = {...this.object};
        this.$emit('change')
      },

      appendChild(v){
        (this.object.objects = this.object.objects || []);
        this.object.objects.push(v);
        this.showAppend = false;
        this.$emit('change')
      }
    },

    computed: {
      style(){
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
        var splitUrl = this.object.image_url.split(".");
        return splitUrl[0] + this.img_color + "." + splitUrl[1]
      }
    },

    components: {
      propForm,
      texField,
      Modal
    }

  }
</script>
