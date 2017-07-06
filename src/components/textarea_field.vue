<template>
  <div :data-vv-scope="validateScope" class="form-group">
    <label class="control-label" :class="'col-sm-'+labelSpan" v-if="label">{{label}}</label>
    <div :class="{['col-sm-'+controlSpan]:true}">
    <textarea type="text"
              class="form-control"
              v-model="innerValue"
              :name="name"
              :value="value"
              :disbaled="disabled"
              :placeholder="placeholder"
              :readonly="readonly"></textarea>
    </div>
    <i v-if="errorBag && errorBag.has(name,validateScope)" class="fa fa-warning"></i>
    <span v-if="errorBag && errorBag.has(name,validateScope)" class="help text-danger">{{ errorBag && errorBag.first(name,validateScope) }}</span>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        innerValue: this.value,
      }
    },
    props: {
      "isJson": Boolean,
      "label": String,
      'name': String,
      "value": {
        default(){
          return ""
        }
      },
      "disabled": Boolean,
      "placeholder": String,
      "readonly": String,
      controlSpan: {
        type: String,
        default(){
          return "8"
        }
      },
      labelSpan: {
        type: String,
        default(){
          return "2"
        }
      },
      "isNumber": {
        type: Boolean,
        default() {
          return false;
        }
      },
      "validateScope": {
        type: String,
        default() {
          return "valid";
        }
      },
      errorBag: {}
    },
    watch: {
      innerValue(value) {
        if (this.isJson) {
          if (typeof value === "object") {
            this.$emit('input', value);
          } else if (typeof value === "string") {
            try {
              this.$emit('input', JSON.parse(value))
            } catch (err) {
              console.error("无效JSON")
            }
          }
        } else {
          this.$emit('input', value);
        }
      },

      value(value){
        if (this.isJson) {
          if (typeof value === "object") {
            this.innerValue = JSON.stringify(value)
          }else{
            this.innerValue = value
          }
        }else{
          this.innerValue =  value
        }
      }
    },
    methods: {
      formValue(newVal) {
        if (typeof newVal !== "undefined") {
          this.innerValue = newVal;
        } else {

          let value = {};

          if (this.isJson) {
            if (typeof this.innerValue === "object") {
              value = this.innerValue
            } else if (typeof this.innerValue === "string") {
              try {
                value = JSON.parse(this.innerValue)
              } catch (err) {
                console.error("无效JSON");
                value = "无效JSON"
              }
            }
          }

          return this.disabled ? {} : {
            name: this.name,
            value: this.isJson ? value : this.innerValue
          };
        }
      }
    },
    created(){
      if (this.isJson) {
        if (typeof this.innerValue === "object") {
          this.innerValue = JSON.stringify(this.innerValue)
        }
      }
    }
  }
</script>
