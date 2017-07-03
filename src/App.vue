<template>
  <div class="row">
    <div class="col-md-2">
      <js-tree v-tree="treeData" @selectNode="selectNode" ref="pictureTree"></js-tree>
    </div>
    <div class="col-md-8" style="position: relative;">
      <div
        @click.self="$root.$emit('showCompleteInfo',{object: panelConfig});$root.$emit('selectPicture',panelConfig.design.path)"
        :style="style"
        style="background-size: 100% 100%;position:absolute"
        v-resize="panelConfig"
        @onResize="onJsonChange">
         <span style="cursor: pointer;"
               class="glyphicon glyphicon-plus text-info"
               @click="showAppend=true">添加子对象
    </span>
     <span style="cursor: pointer;"
           @click="showEdit=true"
           class="glyphicon glyphicon-edit text-info">编辑
    </span>
        <a :href="'data:application/json,'+json" download="export.json"
           class="glyphicon glyphicon-export text-info">导出JSON </a>
        <img-object v-for="(obj,i) in panelConfig.objects"
                    :object="obj"
                    :key="obj"
                    :path="path$(i)"
                    v-drag.relative="panelConfig.objects[i]"
                    v-resize="panelConfig.objects[i]"
                    @onDrag="onJsonChange"
                    @onResize="onJsonChange"
                    @change="onJsonChange"
                    :base-path="panelConfig.base_path">
      <span style="cursor: pointer"
            class="glyphicon glyphicon-remove"
            @click="panelConfig.objects.splice(i,1);onJsonChange()">删除</span>
        </img-object>

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

        <modal cancel-text="取消" ok-text="确认" :value="showEdit">
          <prop-form>
            <tex-field label="image_url" v-model="panelConfig.image_url" @input="onJsonChange"></tex-field>
            <tex-field label="base_path" v-model="panelConfig.base_path" @input="onJsonChange"></tex-field>
            <tex-field label="includes" v-for="(includes,i) in  panelConfig.includes"
                       v-model="panelConfig.includes[i]"
                       @input="onJsonChange">
              <label class="control-label col-sm-2">
            <span class="glyphicon glyphicon-remove" style="cursor: pointer"
                  @click="panelConfig.includes.splice(i,1);onJsonChange()"></span>
            <span class="glyphicon glyphicon-plus"
                  style="cursor: pointer"
                  @click="panelConfig.includes.push('');onJsonChange()"
                  v-if="panelConfig.includes.length-1 == i"
            ></span>
              </label>
            </tex-field>
            <label v-if="panelConfig.includes.length==0">
              <span class="glyphicon glyphicon-plus" style="cursor: pointer" @click="panelConfig.includes.push('')">添加includes</span>
            </label>
          </prop-form>
          <div slot="footer">
            <button type="button" class="btn btn-default" @click="showEdit=false">取消</button>
            <button type="button" class="btn btn-info" @click="showEdit=false">确认</button>
          </div>
        </modal>
      </div>
    </div>
    <div class="col-md-2">
      <prop-form>
        <tex-field
          v-if="object$Edit.base_path"
          label="base_path"
          label-span="4"
          v-model="object$Edit.base_path"
          control-span="7"></tex-field>
        <tex-field
          label="image_url"
          label-span="4"
          v-model="object$Edit.image_url"
          control-span="7"></tex-field>
        <tex-field
          label="width"
          label-span="4"
          v-model="object$Edit.width"
          control-span="7"></tex-field>
        <tex-field
          label="height"
          label-span="4"
          v-model="object$Edit.height"
          control-span="7"></tex-field>
        <tex-field
          v-if="object$Edit.x"
          label="x"
          label-span="4"
          v-model="object$Edit.x"
          control-span="7"></tex-field>
        <tex-field
          v-if="object$Edit.y"
          label="y"
          label-span="4"
          v-model="object$Edit.y"
          control-span="7"></tex-field>
      </prop-form>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import imgObject from './components/object'
  import { Modal } from 'uiv'
  import texField from './components/txt_field'
  import propForm from './components/form'
  var pathReg = /^\$([\/].+)+/;

  export default {
    data(){
      return {
        showEdit: false,
        showAppend: false,
        showJSON: false,
        panelConfig: JSON.parse(panelConfig),
        json: JSON.parse(panelConfig),
        treeData: {},
        object$Edit: {},
        path$Edit: []
      }
    },

    methods: {
      path$(i){
        var path = this.panelConfig.design.path.slice();
        path.push(i);
        return path
      },

      selectNode(v){
        this.$root.$emit('showCompleteInfo',

          {
            object: v.node.original.nodeData,
            path: v.node.original.path
          }
        );
      },

      appendChild(v){
        (this.panelConfig.objects = this.panelConfig.objects || []);
        this.panelConfig.objects.push(v);
        this.showAppend = false;
        this.onJsonChange()
      },

      onJsonChange(){
        this.json = JSON.stringify(this.panelConfig);
      },

      calcTreeData(){
        function calcNodeDesign(config) {
          var rest = {};
          rest = {...config.design};
          rest.id = rest.path.join("-");
          rest.nodeData = config;
          if (Array.isArray(config.objects)) {
            rest.children = [];
            config.objects.map(obj=> {
              rest.children.push(calcNodeDesign(obj))
            })
          }
          return rest
        }

        this.treeData = calcNodeDesign(this.panelConfig);
      }
    },

    computed: {
      style(){
        return {
          backgroundImage: pathReg.test(this.panelConfig.image_url) ?
          'url(' + applicationRoot + this.panelConfig.base_path + [].slice.call(this.panelConfig.image_url, 1).join("") + ')' :
          'url(' + applicationRoot + (this.panelConfig.object.image_url) + ')',
          width: this.panelConfig.width,
          height: this.panelConfig.height
        }
      }
    },

    created(){
      this.calcTreeData();

      this.$root.$on("showCompleteInfo", ({object,path}) => {
        this.object$Edit = object;
        this.path$Edit = path
      });

      this.$root.$on("selectPicture", path => {

        let instance = $(this.$refs.pictureTree.$el).jstree(true);
        instance.deselect_all();
        instance.select_node(path.join("-"))

      });

      this.$watch("object$Edit", v => {

        //path$Edit === undefined 为背景图设置
        let
          len = this.path$Edit ? this.path$Edit.length : 0,
          pathString = len && len !== 1 ? "this.panelConfig.objects" : "this.panelConfig";

        if (len !== 0 && len !== 1) {
          this.path$Edit.map((pathIndex, i) => {
            //path 的第一个成员表示 背景图 且一直为0
            if (i == 0)return;
            pathString += i == len - 1 ? `[${pathIndex}]` : `[${pathIndex}].objects`
          })
        }
        pathString += ` = object`;
        new Function("object", pathString).call(this, v)
      }, {deep: true})
    },

    components: {
      Modal,
      texField,
      propForm,
      imgObject
    }
  }
</script>

