<template>
  <form :novalidate="!needValidate" :id="id" :action="action" :method="method" class="form-horizontal"
        @submit.prevent="beforeSubmit" :data-vv-scope="validateScope">
    <slot></slot>
  </form>
</template>
<script type="text/ecmascript-6">
  import {underscored} from 'underscore.string'

  function resolveValue(obj, keys, camelized) {
    let result = obj;
    for (let key of keys) {
      if (camelized) {
        key = underscored(key);
      }
      if (typeof result !== "undefined") {
        result = result[key];
      } else
        return undefined;
    }

    return result;
  }

  export default{
    props: {
      splitName: {
        default(){
          return true
        }
      },
      "id": String,
      "underscored": {
        type: Boolean,
        default() {
          return true;
        }
      },
      "needValidate": Boolean,
      "validator": {},
      "action": {
        default() {
          return "#";
        }
      },
      "method": {
        default() {
          return "POST";
        }
      },
      validateScope: {
        default (){
          return 'valid'
        }
      }
    },
    methods: {
      fillForm(children, obj) {
        if (arguments.length === 1) {
          obj = children;
          children = this.$children;
        }
        if (!Array.isArray(children) || children.length == 0)
          return;

        for (let child of children) {
          if (typeof(child.formValue) === "function"
            && typeof child.name !== "undefined"
            && child.name) {
            var name, index;

            if (child.name.indexOf("[") != -1 &&
              child.name.indexOf("]") != -1) {
              [name, index] = child.name.replace("]", "").split("[");
              name = [name]
            } else
              name = this.splitName ? child.name.split(".") : [child.name];
            let val = resolveValue(obj, name, underscored);

            if (typeof val !== "undefined") {
              Array.isArray(val) && index && (val = val[index]);
              child.formValue(val);
            }
          }
          this.fillForm(child.$children, obj);
        }
      },

      formData(children, obj) {
        if (typeof obj === "undefined") {
          obj = {};
        }

        for (let child of children) {
          if (typeof(child.formValue) !== "function") {
            if (Array.isArray(child.$children))
              this.formData(child.$children, obj);
          } else {
            var formValue = child.formValue(), fieldName, index;
            if (typeof formValue.value != "undefined" && typeof formValue.name != "undefined") {
              if (formValue.name.indexOf(".") > 0 && this.splitName) {// <input name="obj.sub" value="hah"> => obj:{sub:'hah'}
                var parts = formValue.name.split(".");
                var currentObj = obj;
                parts.forEach(el => {
                  if (this.underscored) {
                    el = underscored(el);
                  }

                  if (typeof currentObj[el] === "undefined") {
                    currentObj[el] = {};
                  }

                  if (parts.indexOf(el) === parts.length - 1) {
                    currentObj[el] = formValue.value;
                  } else {
                    currentObj = currentObj[el];
                  }
                })
              } else if (formValue.name.indexOf("[") != -1
                && formValue.name.indexOf("]") != -1) { //<input name="arr[1]" value="hah"> => arr : ['','hah']
                [fieldName, index] = formValue.name.replace("]", "").split("[");

                if (this.underscored) {
                  fieldName = underscored(fieldName);
                }

                if (!obj[fieldName]) {
                  obj[fieldName] = []
                }

                obj[fieldName][index] = formValue.value

              } else {
                fieldName = formValue.name;
                if (this.underscored) {
                  fieldName = underscored(fieldName);
                }
                obj[fieldName] = formValue.value;
              }
            }
          }
        }
        return obj;
      },

      beforeSubmit() {
        if (this.needValidate) {
          this.validator.validateAll(this.validateScope).then(success => {
            this.$nextTick(()=> {
              if (success && !this.errors.any()) {
                this.$emit("submit", this.formData(this.$children));
              }
            })
          }, err=> {
            console.log(this.validator)
          });
        } else {
          this.$emit("submit", this.formData(this.$children));
        }
      }
    }
  }
</script>
