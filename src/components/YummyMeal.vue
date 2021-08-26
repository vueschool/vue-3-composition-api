<template>
  <p>
    <strong>{{ name }}</strong>
    {{ pricePretty }}
    <button @click="addToCart">Add to Cart</button>
  </p>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    name: String,
    price: Number,
  },
  setup(props, { emit }) {
    const addToCart = () => emit("addToCart", props.name);
    const pricePretty = computed(() => `$${props.price.toFixed(2)}`);
    return { addToCart, pricePretty };
  },
};
</script>
