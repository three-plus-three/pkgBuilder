<template>
  <div class="form-group" :data-vv-scope="validateScope">
    <label class="control-label" :class="'col-sm-'+labelSpan" v-if="label">{{label}}</label>
    <div :class="{['col-sm-'+controlSpan]:true}">
      <input type="text"
             class="form-control"
             @blur="blur"
             v-model="innerValue"
             :name="name"
             :value="value"
             :disbaled="disabled"
             :placeholder="placeholder"
             :readonly="readonly">
    </div>
    <slot>
    </slot>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        innerValue: this.value,
        valueJointedPrefix: this.valuePrefix + this.innerValue
      }
    },
    props: {
      valuePrefix: String,
      labelPosition: {
        default(){
          return 'before'
        }
      },
      label: String,
      name: String,
      value: {
        default(){
          return ""
        }
      },
      disabled: Boolean,
      placeholder: String,
      readonly: Boolean,
      controlSpan: {
        type: String,
        default(){
          return "8"
        }
      },
      helpText: String,
      labelSpan: {
        type: String,
        default(){
          return "2"
        }
      },
      isNumber: {
        type: Boolean,
        default() {
          return false;
        }
      },
      validateScope: {
        type: String,
        default() {
          return "valid";
        }
      },
      mask: {
        default(){
          return ""
        }
      },
      errorBag: {}
    },
    watch: {
            innerValue(value) {      //监听表单输入事件 <input v-model='innerValue'>
        this.$emit('input', value ? value.toString() : value);
      },

      value(value){
        this.innerValue = value;
      }
    },
    methods: {
      blur(){//监听失去焦点事件 <input @blur='blur'>
//        this.valueJointedPrefix = this.valuePrefix + this.innerValue;
//        this.$emit('input', this.innerValue);
      },

      formValue(newVal) {
        if (typeof newVal !== "undefined")
          this.innerValue = newVal;
        else
          return this.disabled ? {} : {
            name: this.name,
            value: this.isNumber ? parseFloat(this.innerValue) : this.innerValue
          };
      }
    }
  }
</script>
