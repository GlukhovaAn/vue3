<template>
  <div class="product-card">
    <img :src="imageUrl" alt="Product Image" class="product-image" />
    <div class="product-info">
      <h2 class="product-title">{{ title }}</h2>
      <p class="product-category">Category: {{ category }}</p>
      <p class="product-price">Price: {{ price }}$</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  background: #1a1a1a;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  color: white;
  width: 200px;
}

.product-image {
  width: 100%;
  border-radius: 10px;
}

.product-info {
  padding: 10px 0;
}

.product-title {
  font-size: 1.2em;
  font-weight: bold;
}

.product-category,
.product-price {
  font-size: 0.9em;
}
</style>
