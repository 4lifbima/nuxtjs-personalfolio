<script setup>
import { ref } from 'vue'

// State untuk mengontrol menu mobile
const isMobileMenuOpen = ref(false)

// Fungsi untuk menutup menu (dipanggil saat link diklik)
const closeMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav class="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex-shrink-0">
          <NuxtLink to="/#home" class="text-2xl font-bold text-gray-900 hover:text-primary-dark transition-colors">
            AlifBima.
          </NuxtLink>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/#about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/#skills" class="nav-link">Skills</NuxtLink>
          <NuxtLink to="/#projects" class="nav-link">Projects</NuxtLink>
          <NuxtLink 
            to="/#contact" 
            class="px-5 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5"
          >
            Contact Me
          </NuxtLink>
        </div>
        
        <div class="md:hidden">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen" 
            class="text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg v-if="!isMobileMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </div>
    </div>
    
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 -translate-y-4"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden absolute w-full bg-white shadow-lg py-4 border-t border-gray-100">
        <NuxtLink to="/#about" @click="closeMenu" class="mobile-nav-link">About</NuxtLink>
        <NuxtLink to="/#skills" @click="closeMenu" class="mobile-nav-link">Skills</NuxtLink>
        <NuxtLink to="/#projects" @click="closeMenu" class="mobile-nav-link">Projects</NuxtLink>
        <NuxtLink to="/#contact" @click="closeMenu" class="block px-5 py-3 text-base font-medium text-gray-700 hover:bg-primary/10 hover:text-primary">
          Contact Me
        </NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-primary font-medium transition-colors duration-300;
}
.mobile-nav-link {
  @apply block px-5 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors duration-200;
}
</style>