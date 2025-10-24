<script setup>
import { computed } from 'vue'
const route = useRoute()
const { slug } = route.params

// 1. Ambil state pending dan error dari useFetch
const { data: projects, pending, error } = await useFetch('/data/projects.json')

// 2. Gunakan computed untuk mencari proyek HANYA JIKA data sudah ada
const project = computed(() => {
  // Jika data belum ada (masih pending) atau kosong, kembalikan null
  if (!projects.value) {
    return null
  }
  return projects.value.find(p => p.slug === slug)
})

// 3. Set judul halaman dengan aman menggunakan computed
useHead({
  title: computed(() => project.value ? `${project.value.title} - Portofolio Alif` : 'Detail Proyek'),
  meta: [
    { name: 'description', content: computed(() => project.value?.description || 'Detail proyek portofolio.') }
  ]
})
</script>

<template>
  <main class="section-padding">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <div v-if="pending" class="text-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p class="text-lg text-gray-600 mt-4">Memuat Proyek...</p>
      </div>
      
      <div v-else-if="error" class="text-center py-20">
        <h2 class="text-3xl font-bold text-red-600 mb-4">Oops! Terjadi Kesalahan</h2>
        <p class="text-gray-500 mb-8">Gagal memuat data proyek. Silakan coba lagi nanti.</p>
        <NuxtLink to="/" class="btn-primary">Kembali ke Beranda</NuxtLink>
      </div>
      
      <div v-else-if="project" class="max-w-4xl mx-auto">
        <NuxtLink to="/projects" class="flex items-center text-primary font-medium hover:underline mb-8">
          <Icon name="mdi:arrow-left" class="mr-1" />
          Kembali ke Semua Proyek
        </NuxtLink>
        
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{{ project.title }}</h1>
        
        <div class="flex flex-wrap gap-3 mb-8">
          <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
        
        <img :src="project.thumbnail" :alt="project.title" class="w-full h-auto rounded-xl shadow-lg mb-10 aspect-video object-cover">
        
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
        <h2 class="text-3xl font-bold text-gray-700 mb-4">Proyek Tidak Ditemukan</h2>
        <p class="text-gray-500 mb-8">Maaf, kami tidak dapat menemukan proyek yang Anda cari.</p>
        <NuxtLink to="/projects" class="btn-primary">Kembali ke Semua Proyek</NuxtLink>
      </div>
      
    </div>
  </main>
</template>

<style scoped>
/* Style tombol dan tag (bisa dipindah ke CSS global jika mau) */
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