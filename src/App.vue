<template>
  <div id="app"
       :style="style"
       style="background-size: 100% 100%;position:relative"
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
    <span style="cursor: pointer;" @click="showJSON=!showJSON"
          class="glyphicon glyphicon-eye-open text-info">显示JSON</span>
    <div style="background-color: #fff; z-index: 1000;height:500px;width:500px;overflow:scroll;word-wrap: break-word;"
         v-drag v-show="showJSON">
      <span @click="showJSON=false" style="cursor: pointer" class="glyphicon glyphicon-remove text-muted">关闭 </span>
      <a :href="'data:application/json,'+json" download="export.json"
         class="glyphicon glyphicon-export text-muted">导出 </a>
      <div id="json-view"></div>
    </div>
    <img-object v-for="(obj,i) in panelConfig.objects"
                :object="obj"
                :key="obj"
                v-drag.relative="panelConfig.objects[i]"
                v-resize="panelConfig.objects[i]"
                @onDrag="onJsonChange"
                @onResize="onJsonChange"
                @change="onJsonChange"
                :base-path="panelConfig.base_path">
      <span style="cursor: pointer" class="glyphicon glyphicon-remove"
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
        <tex-field label="includes" v-for="(includes,i) in  panelConfig.includes" v-model="panelConfig.includes[i]"
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
        json: JSON.parse(panelConfig)
      }
    },

    methods: {
      appendChild(v){
        (this.panelConfig.objects = this.panelConfig.objects || []);
        this.panelConfig.objects.push(v);
        this.showAppend = false;
        this.onJsonChange()
      },

      onJsonChange(){
        this.json = JSON.stringify(this.panelConfig);
        $("#json-view").JSONView(this.json)
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

    mounted(){
      $("#json-view").JSONView(this.json)
    },

    components: {
      Modal,
      texField,
      propForm,
      imgObject
    }
  }
</script>

