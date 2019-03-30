<template>
<button class="button" :class="classNames" @click.capture="onClick" @click.capture.native="onClick">
  <pl-icon v-if="iconLeft" :icon="iconLeft" :class="{'is-left': iconLeft}"></pl-icon>
  <pl-icon v-if="icon" :icon="icon"></pl-icon>
    <slot></slot>{{label}}
    <pl-icon v-if="iconRight" :icon="iconRight" :class="{'is-right': iconRight}"></pl-icon>
  </button>
</template>

<script>
export default {
  name: "pl-button",
  props: {
    color: String,
    type: String,
    label: String,
    size: String,
    icon: {
      type: String,
      default: null
    },
    iconLeft: {
      type: String,
      default: null
    },
    iconRight: {
      type: String,
      default: null
    }
  },
  computed: {
    classNames() {
      let classNames = [];
      this.size ? classNames.push(`is-${this.size}`) : "";
      this.color ? classNames.push(`is-${this.color}`) : "";
      this.type ? classNames.push(`is-${this.type}`) : "";
      return classNames;
    }
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>
