<template>
  <section id="home" class="section-padding flex items-center bg-gray-50/50" style="min-height: calc(100vh - 80px);">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="text-center lg:text-left">
          <span class="text-primary font-semibold text-lg">Alif Bima Pradana</span>
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
            Creative
            <span class="text-primary">Fullstack</span>
            Developer
          </h1>
          <p class="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-10">
            Saya merancang dan membangun website yang modern, mewah, dan responsif dari awal dengan passion.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NuxtLink to="/projects" class="btn-primary">Lihat Proyek Saya</NuxtLink>
            <NuxtLink to="/about" class="btn-secondary">Tentang Saya</NuxtLink>
          </div>
        </div>
        
        <div class="hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1470&q=80" 
            alt="Hero Image" 
            class="rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Impor style tombol */
.btn-primary {
  @apply px-8 py-3 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/40 transform hover:-translate-y-1;
}
.btn-secondary {
  @apply px-8 py-3 rounded-lg bg-white text-gray-800 font-semibold text-lg border-2 border-gray-300 hover:border-primary hover:text-primary transition-all duration-300 transform hover:-translate-y-1;
}
</style>