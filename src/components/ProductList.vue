<template>
    <div>
      <p class="text-gray-700 mb-2">Product data has been saved to local storage.</p>
      <button @click="showProductsFromLocalStorage" class="bg-blue-500 text-white px-4 py-2 rounded">
        Show Products
      </button>
  
      <div v-if="displayProducts" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="p-4 border rounded-lg shadow-md bg-white"
        >
          <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
          <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover mb-2">
          <p class="text-gray-700">Price: {{ product.price | currency }}</p>
          <p v-if="product.discount" class="text-red-500 font-bold">Discount: {{ product.discount }}%</p>
          <p v-if="product.discountedPrice" class="text-green-600">Discounted Price: {{ product.discountedPrice | currency }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        displayProducts: false, // Control when to display products
      };
    },
    async created() {
      // Fetch products from the API
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      
      // Apply discounts to 5 random products
      this.applyDiscountsToFiveRandomProducts(data);
      
      // Save products to local storage
      localStorage.setItem('products', JSON.stringify(data));
    },
    methods: {
      applyDiscountsToFiveRandomProducts(products) {
        const selectedProducts = [];
        while (selectedProducts.length < 5) {
          const randomIndex = Math.floor(Math.random() * products.length);
          if (!selectedProducts.includes(randomIndex)) {
            selectedProducts.push(randomIndex);
          }
        }
  
        selectedProducts.forEach(index => {
          const discount = Math.floor(Math.random() * 21) + 10; // Random discount between 10% and 30%
          products[index].discount = discount;
          products[index].discountedPrice = products[index].price * (1 - discount / 100);
        });
      },
      showProductsFromLocalStorage() {
        // Retrieve products from local storage and display them
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
          this.products = JSON.parse(storedProducts);
          this.displayProducts = true;
        }
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
  </style>
  