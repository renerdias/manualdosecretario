<template>
  <div :class="['pg-divider', `pg-divider--${direction}`]">
    <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="['pg-divider__content', `is-${contentPosition}`]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PgDivider",
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].indexOf(val) !== -1;
      }
    },
    contentPosition: {
      type: String,
      default: "center",
      validator(val) {
        return ["left", "center", "right"].indexOf(val) !== -1;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
// @import url("../css/variables/color.scss");

.pg-divider {
  background-color: #DCDFE6;
  position: relative;

  &.pg-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
  }
  &.pg-divider--vertical {
    display: inline-block;
    width: 1px;
    height: 100%;
    min-height: 1em;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
  }

  .pg-divider__content {
    position: absolute;
    background-color: white;
    padding: 0 20px;
    font-weight: 500;
    color:  #606266;
    font-size: 14px;
    &.is-center {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    &.is-left {
      left: 20px;
      transform: translateY(-50%);
    }
    &.is-right {
      right: 20px;
      transform: translateY(-50%);
    }
  }
}
</style>
