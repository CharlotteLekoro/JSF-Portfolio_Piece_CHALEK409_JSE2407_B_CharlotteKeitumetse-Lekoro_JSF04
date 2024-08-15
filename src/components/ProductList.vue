<template>
  <div>
    <div v-if="isHomePage">
      <button 
        @click="toggleProducts" 
        class="fixed bottom-0 left-0 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {{ displayProducts ? 'Hide Discounted Products' : 'Show Discounted Products' }}
      </button>
      
      <p class="text-gray-700 mb-2">Product data has been saved to local storage.</p>
    </div>

    <div v-if="displayProducts && isHomePage" class="mt-4">
      <carousel 
        :items-to-show="3" 
        :items-to-scroll="1" 
        :wrap-around="true"
        :navigation-enabled="true"
        :mouse-drag="true"
        :touch-drag="true"
        :autoplay="true"
        :autoplay-speed="9000"
        :transition-duration="1000" 
        class="carousel"
      >
        <slide v-for="product in products" :key="product.id">
          <div class="p-4 border rounded-lg shadow-md bg-white">
            <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
            <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover mb-2">
            <p class="text-gray-700">Price: {{ product.price | currency }}</p>
            <p v-if="product.discount" class="text-red-500 font-bold">Discount: {{ product.discount }}%</p>
            <p v-if="product.discountedPrice" class="text-green-600">Discounted Price: {{ product.discountedPrice | currency }}</p>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      products: [],
      displayProducts: false, // Control when to display products
    };
  },
  setup() {
    const route = useRoute();
    const isHomePage = computed(() => route.path === '/');

    return { isHomePage };
  },
  async created() {
    if (this.isHomePage) {
      // Fetch all products from the API
      const response = await fetch('https://fakestoreapi.com/products');
      const allProducts = await response.json();
      
      // Apply discounts to 5 random products
      const discountedProducts = this.applyDiscountsToFiveRandomProducts(allProducts);
      
      // Save only discounted products to local storage
      localStorage.setItem('discountedProducts', JSON.stringify(discountedProducts));
    }
  },
  methods: {
    applyDiscountsToFiveRandomProducts(products) {
      const discountedProducts = [];
      const selectedIndexes = [];

      while (selectedIndexes.length < 5) {
        const randomIndex = Math.floor(Math.random() * products.length);
        if (!selectedIndexes.includes(randomIndex)) {
          selectedIndexes.push(randomIndex);
          const discount = Math.floor(Math.random() * 21) + 10; // Random discount between 10% and 30%
          products[randomIndex].discount = discount;
          products[randomIndex].discountedPrice = products[randomIndex].price * (1 - discount / 100);
          discountedProducts.push(products[randomIndex]);
        }
      }

      return discountedProducts;
    },
    toggleProducts() {
      // Retrieve discounted products from local storage and display them
      if (!this.displayProducts) {
        const storedProducts = localStorage.getItem('discountedProducts');
        if (storedProducts) {
          this.products = JSON.parse(storedProducts);
        }
      }
      this.displayProducts = !this.displayProducts;
    }
  },
  filters: {
    currency(value) {
      return `$${value.toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
.text-red-500 {
  color: #ff0000; /* Red color */
}

.text-green-600 {
  color: #38a169; /* Green color */
}

.carousel {
  width: 100%;
  max-width: 1200px; /* Adjust as needed */
  margin: 0 auto;
}
</style>
