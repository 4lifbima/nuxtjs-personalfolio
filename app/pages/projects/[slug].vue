<script setup>
// Ambil 'slug' dari URL
const route = useRoute()
const { slug } = route.params

// Fetch semua data proyek
const { data: projects } = await useFetch('/data/projects.json')

// Cari proyek yang spesifik berdasarkan slug
const project = computed(() => {
  // Pastikan projects.value tidak null sebelum mencari
  if (!projects.value) return null
  return projects.value.find(p => p.slug === slug)
})

// Set judul halaman
useHead({
  title: project.value ? `${project.value.title} - Portofolio Alif` : 'Detail Proyek',
  meta: [
    { name: 'description', content: project.value?.description || 'Detail proyek portofolio.' }
  ]
})
</script>

<template>
  <main class="section-padding">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <div v-if="project" class="max-w-4xl mx-auto">
        
        <NuxtLink to="/#projects" class="flex items-center text-primary font-medium hover:underline mb-8">
          <Icon name="mdi:arrow-left" class="mr-1" />
          Kembali ke Proyek
        </NuxtLink>
        
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{{ project.title }}</h1>
        
        <div class="flex flex-wrap gap-3 mb-8">
          <span 
            v-for="tech in project.technologies" 
            :key="tech" 
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>
        
        <img 
          :src="project.thumbnail" 
          :alt="project.title" 
          class="w-full h-auto rounded-xl shadow-lg mb-10 aspect-video object-cover"
        >
        
        <div class="prose prose-lg max-w-none text-gray-700">
          <p>{{ project.long_description }}</p>
          </div>
        
        <div class="flex flex-col sm:flex-row gap-4 mt-12">
          <a :href="project.live_url" target="_blank" class="btn-primary text-center">
            <Icon name="mdi:web" class="mr-2" />
            Lihat Live Demo
          </a>
          <a :href="project.repo_url" target="_blank" class="btn-secondary text-center">
            <Icon name="mdi:github" class="mr-2" />
            Lihat di GitHub
          </a>
        </div>
        
      </div>
      
      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Proyek Tidak Ditemukan</h2>
        <p class="text-gray-500 mb-8">Maaf, kami tidak dapat menemukan proyek yang Anda cari.</p>
        <NuxtLink to="/#projects" class="btn-primary">Kembali ke Proyek</NuxtLink>
      </div>
      
    </div>
  </main>
</template>

<style scoped>
/* Import style tombol dari Hero.vue (atau letakkan di CSS global jika Anda mau) */
.btn-primary {
  @apply px-8 py-3 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/40 transform hover:-translate-y-1 inline-flex items-center justify-center;
}
.btn-secondary {
  @apply px-8 py-3 rounded-lg bg-white text-gray-800 font-semibold text-lg border-2 border-gray-300 hover:border-primary hover:text-primary transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center;
}
.tech-tag {
  @apply text-sm font-medium bg-primary/10 text-primary px-4 py-1 rounded-full;
}
</style>