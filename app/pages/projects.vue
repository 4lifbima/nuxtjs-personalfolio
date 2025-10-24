<script setup>
// Fetch data proyek dari file JSON di folder /public
const { data: projects, pending, error } = await useFetch('/data/projects.json')
</script>

<template>
  <section id="projects" class="section-padding bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Featured <span class="text-primary">Projects</span></h2>
      <p class="section-subtitle">
        Beberapa proyek pilihan yang menunjukkan keahlian saya.
      </p>
      
      <div v-if="pending" class="text-center text-gray-500">Loading projects...</div>
      <div v-else-if="error" class="text-center text-red-500">Gagal memuat proyek.</div>
      
      <div v-else-if="projects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="project-card group"
        >
          <div class="overflow-hidden rounded-t-lg">
            <img 
              :src="project.thumbnail" 
              :alt="project.title" 
              class="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            >
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4 h-20 overflow-hidden">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tech in project.technologies" 
                :key="tech" 
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <NuxtLink 
                :to="`/projects/${project.slug}`" 
                class="font-medium text-primary hover:underline flex items-center"
              >
                Lihat Detail
                <Icon name="mdi:arrow-right" class="ml-1" />
              </NuxtLink>
              <a :href="project.repo_url" target="_blank" class="text-gray-500 hover:text-primary transition-colors">
                <Icon name="mdi:github" class="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ... (style .project-card dan .tech-tag tidak berubah) ... */
.project-card {
  @apply bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-primary/30 transform hover:-translate-y-2;
}
.tech-tag {
  @apply text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full;
}
</style>