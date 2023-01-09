<template>
  <button
    class="calc-button"
    :class="classes"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

type IVariant = "orange" | "grey";
type IVariantsClasses = {
  [key in IVariant]: string;
};

const props = defineProps({
  variant:  { 
    type:  String as PropType<IVariant>,
    required: false,
  },
});

const emits = defineEmits(['onClick']);

const classes = computed(() => {
  const variantsClasses: IVariantsClasses = {
      orange: "bg-orange-600 hover:bg-orange-500",
      grey: "bg-grey-600 hover:bg-grey-500",
    };
    return props.variant ? variantsClasses[props.variant]: "";
})

const onClick = () => {
  emits("onClick");
}
</script>

<style lang="scss" scoped>
.calc-button {
  border: none;
  border-radius: 2.5rem;
  border-color:  var(--color-text);
  background-color: var(--color-background-soft);
  font-size: 1.5rem;
  text-align: center;
  padding: 1.25rem;
  color: var(--color-text);

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
}

.bg-orange-600 {
  background-color: orange;
}

.bg-blue-600 {
  background-color: blue;

}

.bg-grey-600 {
    background-color: grey;
}

</style>