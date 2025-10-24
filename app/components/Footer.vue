<template>
  <footer class="bg-primary text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p class="text-gray-300 text-sm">
          &copy; {{ new Date().getFullYear() }} Alif Bima Pradana. Dibuat dengan <Icon name="mdi:heart" class="text-red-400" /> & Nuxt.js
        </p>
        
        <div class="flex space-x-6 mt-6 md:mt-0">
          <a href="#" class="text-gray-300 hover:text-white transition-colors">
            <Icon name="mdi:github" class="text-2xl" />
          </a>
          <a href="#" class="text-gray-300 hover:text-white transition-colors">
            <Icon name="mdi:linkedin" class="text-2xl" />
          </a>
          <a href="#" class="text-gray-300 hover:text-white transition-colors">
            <Icon name="mdi:instagram" class="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>