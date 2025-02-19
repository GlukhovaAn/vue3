<template>
  <main class="app-container">
    <ProductCard
      v-for="(product, index) in products"
      :key="index"
      :imageUrl="product.images[0]"
      :title="product.title"
      :category="product.category"
      :price="product.price"
    />
  </main>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
      limit: 12,
      skip: 24,
      isLoading: false,
    };
  },
  async created() {
    await this.loadProducts();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async loadProducts() {
      if (this.isLoading) return;
      this.isLoading = true;
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${this.limit}&skip=${this.skip}`
        );
        const data = await response.json();
        this.products = [...this.products, ...data.products];
        this.skip += this.limit;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      this.isLoading = false;
    },
    handleScroll() {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 50
      ) {
        this.loadProducts();
      }
    },
  },
};
</script>

<style>
.app-container {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background: #121212;
  max-width: 900px;
}
</style>
