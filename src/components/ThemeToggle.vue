<template>
    <div class="wrapper">
      <button class="toggle" @click="toggleTheme">
        <div class="toggle-btn" :class="{ 'left-1/2 bg-blue-900': isNightMode, 'left-1/4 bg-yellow-500': !isNightMode }"></div>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isNightMode: false,
      };
    },
    methods: {
      toggleTheme() {
        this.isNightMode = !this.isNightMode;
        if (this.isNightMode) {
          document.body.classList.add("night");
          document.documentElement.classList.add("night");
        } else {
          document.body.classList.remove("night");
          document.documentElement.classList.remove("night");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .wrapper {
    margin: 0;
    padding: 0;
    position: relative;
    transform: scale(0.4); /* Scale down by 85% */
  }
  
  .toggle {
    margin: 0;
    padding: 20px;
    cursor: pointer;
    width: 100.5px; /* 85% of 170px */
    height: 50px;    /* 85% of 100px */
    background-color: #a690be;
    border-radius: 50px;
    position: absolute;
  }
  
  .toggle-btn {
    width: 39.5px;  /* 85% of 70px */
    height: 35.5px; /* 85% of 70px */
    position: absolute;
    bottom: 12.75px; /* 85% of 15px */
    transition: all 0.5s ease-in;
    border-radius: 50%; /* Make the toggle button circular */
  }
  
 
  </style>
  