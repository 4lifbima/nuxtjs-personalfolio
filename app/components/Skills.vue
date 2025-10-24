<template>
  <section id="skills" class="py-24 bg-gray-50/50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">My <span class="text-primary">Tech Stack</span></h2>
      <p class="section-subtitle">
        Beberapa teknologi yang saya kuasai dan gunakan dalam proyek-proyek saya.
      </p>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
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
    </div>
  </section>
</template>

<style scoped>
.skill-card {
  @apply flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2;
}
.skill-name {
  @apply mt-4 font-semibold text-gray-700;
}
</style>