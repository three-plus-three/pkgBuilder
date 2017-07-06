<template>
  <div>
    <div class="col-md-2">
      <button class="btn btn-info" @click="showAppend=true">添加子节点</button>
      <button class="btn btn-danger" @click="removeNode">删除节点</button>
      <a :href="'data:application/json,'+json" download="export.json"><i class="glyphicon glyphicon-export"></i>
        导出JSON
      </a>
      <div style="height:400px;">
        <js-tree v-tree="treeData" @selectNode="selectNode" ref="pictureTree" style="margin-top :10px;"></js-tree>
      </div>
      <prop-form>
        <tex-field
          v-if="object$Edit.base_path"
          label="base_path"
          label-span="4"
          v-model="object$Edit.base_path"
          control-span="7"></tex-field>
        <textarea-field
          v-if="object$Edit.includes"
          label="includes"
          :is-json="true"
          label-span="4"
          v-model="object$Edit.includes"
          control-span="7"></textarea-field>
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
        <textarea-field
          label="instance"
          label-span="4"
          :is-json="true"
          v-model="object$Edit.instance"
          control-span="7"></textarea-field>
        <textarea-field
          label="backend"
          label-span="4"
          :is-json="true"
          v-model="object$Edit.backend"
          control-span="7"></textarea-field>
      </prop-form>
    </div>
    <div class="col-md-10" style="position: relative;">
      <div
        @click.self="$root.$emit('showCompleteInfo',{object: panelConfig});$root.$emit('selectPicture',panelConfig.design.path)"
        :style="style"
        style="background-size: 100% 100%;position:absolute"
        v-resize="panelConfig"
        @onResize="onJsonChange">

        <img-object v-for="(obj,i) in panelConfig.objects"
                    :object="obj"
                    :key="obj"
                    :parent-path="panelConfig.design.path"
                    v-drag.relative="panelConfig.objects[i]"
                    v-resize="panelConfig.objects[i]"
                    @onDrag="onJsonChange"
                    :index="i"
                    @onResize="onJsonChange"
                    @change="onJsonChange"
                    :base-path="panelConfig.base_path">
        </img-object>
        <prop-form @submit="appendChild" :need-validate="false">
          <modal cancel-text="取消" ok-text="确认" v-model="showAppend">
            <tex-field label="名称" name="text"></tex-field>
            <tex-field label="添加数量" name="repeat"></tex-field>
            <tex-field label="image_url" name="image_url"></tex-field>
            <tex-field label="width" value="100px" name="width"></tex-field>
            <tex-field label="height" value="100px" name="height"></tex-field>
            <textarea-field label="instance" name="instance" :is-json="true"></textarea-field>
            <textarea-field label="backend" name="backend" :is-json="true"></textarea-field>
            <tex-field label="x" value="100px" name="x"></tex-field>
            <tex-field label="y" value="100px" name="y"></tex-field>
            <div slot="footer">
              <button type="button" class="btn btn-default" @click="showAppend=false">取消</button>
              <button type="submit" class="btn btn-info">确认</button>
            </div>
          </modal>
        </prop-form>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import imgObject from './components/object'
  import { Modal } from 'uiv'
  import texField from './components/txt_field'
  import textareaField from './components/textarea_field'
  import propForm from './components/form'

  const pathReg = /^\$([\/].+)+/;

  export default {
    data(){
      return {
        showEdit: false,
        showAppend: false,
        showJSON: false,
        panelConfig: JSON.parse(panelConfig),
        json: panelConfig,
        treeData: {},
        object$Edit: {},
        path$Edit: []
      }
    },

    methods: {
      selectNode(v){
        this.$root.$emit('showCompleteInfo', {
            path: v.node.id.split("-")
          }
        );
      },

      instanceAndFirstSelected(){
        let
          instance = $(this.$refs.pictureTree.$el).jstree(true),
          selected = instance.get_selected(true);
        if (selected.length === 0)return [[], instance];
        return [selected[0], instance];
      },

      resetChildrenId(instance, node){
        node.children.map((id, i)=> {
          let node = instance.get_node(id);
          instance.set_id(node, id.substr(0, id.length - 1) + i.toString())
        })
      },

      removeNode(){
        let [selected,instance] = this.instanceAndFirstSelected();
        if (selected.parent === "#")return;

        let
          parentPath = this.searchObjectByPath(selected.parent.split("-")),
          childPath = selected.id.split("-"),
          index = childPath[childPath.length - 1];
        new Function(`${parentPath}.objects.splice(${index},1);`).call(this);
        this.panelConfig = {...this.panelConfig};

        instance.delete_node(selected);
        let parent = instance.get_node(selected.parent);
        this.resetChildrenId(instance, parent);
        this.$root.$emit("nodeUpdate");
        this.onJsonChange()
      },

      appendChild(object){
        this.$root.$emit("createNode", {object});
        this.showAppend = false;
        this.onJsonChange()
      },

      onJsonChange(){
        this.json = JSON.stringify(this.panelConfig);
      },

      calcTreeData(){
        function collectNodeDesign(config) {
          let rest = {};
          rest = {...config.design};
          rest.icon = "glyphicon glyphicon-picture";
          rest.id = rest.path.join("-");
          if (Array.isArray(config.objects)) {
            rest.children = [];
            config.objects.map(obj=> {
              rest.children.push(collectNodeDesign(obj))
            })
          }
          return rest
        }

        this.treeData = collectNodeDesign(this.panelConfig);
      },

      searchObjectByPath(path){
        //path === undefined 或者 为[0]时 为背景图设置
        let
          len = path ? path.length : 0,
          pathString = len && len !== 1 ? "this.panelConfig.objects" : "this.panelConfig";

        if (len !== 0 && len !== 1) {
          path.map((pathIndex, i) => {
            //path 的第一个成员表示 背景图 且一直为0
            if (i == 0)return;
            pathString += i == len - 1 ? `[${pathIndex}]` : `[${pathIndex}].objects`
          })
        }
        return pathString
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
      this.$root.$on("showCompleteInfo", ({path}) => {
        new Function("this.object$Edit = " + this.searchObjectByPath(path)).call(this);
        this.path$Edit = path
      });

      this.$root.$on("createNode", ({object})=> {

        let
          [selected,treeInstance] = this.instanceAndFirstSelected(),
          {height,image_url,instance,backend,repeat,text,width,x,y} = object;

        if (!~~repeat)return;

        let objectChildren = this.searchObjectByPath(selected.id.split("-")) + ".objects";
        let funcString = `(${objectChildren} = ${objectChildren} || []) ; ${objectChildren}.push(v)`;

        for (let i = 0; i < parseInt(repeat); i++) {
          let path = selected.id.split("-");
          let childPath = path.slice();
          childPath.push(selected.children.length);
          let options = {
            text,
            path: childPath,
            icon: "glyphicon glyphicon-picture",
            id: childPath.join("-")
          };
          treeInstance.create_node(selected.id, options);
          new Function("v", funcString).call(this, {
            width,
            x,
            y,
            backend,
            height,
            instance,
            image_url,
            design: {path: childPath, text}
          })
        }
        this.onJsonChange();
        this.$root.$emit("nodeUpdate");
      });

      this.$root.$on("selectPicture", path => {
        let instance = $(this.$refs.pictureTree.$el).jstree(true);
        instance.deselect_all();
        instance.select_node(path.join("-"))
      });

      this.$watch("object$Edit", v => {

        let
          currentPath = this.searchObjectByPath(this.path$Edit),

          currentPathArray = currentPath.split("["),

          currentPathIndex = currentPathArray[currentPathArray.length - 1].replace("]", "");

        currentPathArray.pop();

        let parentPath = currentPathArray.join("["),
          pathString = "";

        if (parentPath && currentPathIndex) {
          //如果不是背景节点   添加的root-level必须用$set 才能响应
          pathString = `this.$set(${parentPath},${currentPathIndex},object)`;
        } else {
          pathString = `${currentPath} = object`;
        }

        new Function("object", pathString).call(this, v);

        this.onJsonChange()
      }, {deep: true})
    },

    components: {
      textareaField,
      Modal,
      texField,
      propForm,
      imgObject
    }
  }
</script>

