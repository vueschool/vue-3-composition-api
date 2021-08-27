<template>
  <p>
    <strong>{{ name }}</strong>
    <YummyMealPrice :price="price" />
    <button @click="addToCart">Add to Cart</button>
  </p>
</template>
<script setup>
const props = defineProps({
  name: String,
  price: Number,
});
const emit = defineEmit(["addToCart"]);
import YummyMealPrice from "./YummyMealPrice.vue";
const addToCart = () => emit("addToCart", props.name);
</script>
