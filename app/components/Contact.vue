<template>
  <section id="contact" class="py-24 bg-gray-50/50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Get In <span class="text-primary">Touch</span></h2>
      <p class="section-subtitle">
        Punya proyek atau hanya ingin menyapa? Kirimkan saya pesan!
      </p>
      
      <div class="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-2xl">
        <form action="#" method="POST">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="form-label">Full Name</label>
              <input type="text" name="name" id="name" class="form-input" placeholder="Alif Bima Pradana">
            </div>
            <div>
              <label for="email" class="form-label">Email</label>
              <input type="email" name="email" id="email" class="form-input" placeholder="you@example.com">
            </div>
          </div>
          <div class="mt-6">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" name="subject" id="subject" class="form-input" placeholder="Penawaran Proyek Website">
          </div>
          <div class="mt-6">
            <label for="message" class="form-label">Message</label>
            <textarea name="message" id="message" rows="5" class="form-input" placeholder="Halo Alif, saya tertarik..."></textarea>
          </div>
          <div class="mt-8 text-center">
            <button type="submit" class="btn-primary w-full sm:w-auto text-base">
              Kirim Pesan Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-label {
  @apply block text-sm font-medium text-gray-700 mb-2;
}
.form-input {
  @apply w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300;
}
</style>