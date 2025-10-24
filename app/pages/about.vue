<template>
  <div class="section-padding">
    <section id="about" class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=687&q=80" 
            alt="Alif Bima Pradana" 
            class="rounded-xl shadow-2xl w-full max-w-md mx-auto aspect-[3/4] object-cover"
          >
        </div>
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">About <span class="text-primary">Me</span></h2>
          <p class="text-gray-600 text-lg mb-6">
            Hello! Saya Alif Bima Pradana, seorang full-stack developer yang berbasis di Indonesia. Saya memiliki hasrat mendalam untuk pengembangan web dan senang mengubah ide-ide kompleks menjadi desain yang sederhana, indah, dan intuitif.
          </p>
          <p class="text-gray-600 text-lg mb-8">
            Dengan pengalaman menggunakan Nuxt.js, Laravel, dan Tailwind CSS, saya selalu bersemangat untuk mempelajari teknologi baru dan mengasah keahlian saya untuk memberikan solusi digital terbaik.
          </p>
          <div class="flex gap-8">
            <div>
              <span class="text-5xl font-bold text-primary">3+</span>
              <p class="text-gray-500 font-medium mt-1">Tahun Pengalaman</p>
            </div>
            <div>
              <span class="text-5xl font-bold text-primary">20+</span>
              <p class="text-gray-500 font-medium mt-1">Proyek Selesai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="skills" class="container mx-auto px-4 sm:px-6 lg:px-8 mt-24">
      <h2 class="section-title">My <span class="text-primary">Tech Stack</span></h2>
      <p class="section-subtitle">
        Beberapa teknologi yang saya kuasai dan gunakan dalam proyek-proyek saya.
      </p>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
        <div class="skill-card">
          <Icon name="logos:nuxt-icon" class="text-6xl" />
          <span class="skill-name">Nuxt.js</span>
        </div>
        <div class="skill-card">
          <Icon name="logos:tailwindcss-icon" class="text-6xl" />
          <span class="skill-name">Tailwind CSS</span>
        </div>
        <div class="skill-card">
          <Icon name="logos:laravel" class="text-6xl" />
          <span class="skill-name">Laravel</span>
        </div>
        <div class="skill-card">
          <Icon name="logos:vue" class="text-6xl" />
          <span class="skill-name">Vue.js</span>
        </div>
        <div class="skill-card">
          <Icon name="logos:figma" class="text-6xl" />
          <span class="skill-name">Figma</span>
        </div>
        <div class="skill-card">
          <Icon name="logos:supabase-icon" class="text-6xl" />
          <span class="skill-name">Supabase</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.skill-card {
  @apply flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2;
}
.skill-name {
  @apply mt-4 font-semibold text-gray-700;
}
</style>