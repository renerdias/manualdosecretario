<template>
<button class="button">
asda
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
