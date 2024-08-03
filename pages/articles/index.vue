<template>

    <section id="blog-banner">
      <h1 class="blog-banner__title">Articles</h1>
  </section>

  <div class="blog-container">
    <section class="blog-grid">
      <Post :posts="posts" />
    </section>
  </div>
</template>

<script setup>
  const { data: posts } = await useAsyncData('articles', () =>
    queryContent('/articles').find()
  )
</script>

<style scoped>

@import url("~/assets/css/blog.css");
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Three columns in medium screens */
  grid-gap: 1.5rem;
  /* Adjust the gap as needed */
  margin-top: 2rem;
  /* Adjust the top margin as needed */
  margin-bottom: 2rem;
  /* Adjust the bottom margin as needed */
}

/* Media query for smaller screens (e.g., mobile) */
@media screen and (max-width: 768px) {
  .blog-grid {
    grid-template-columns: repeat(1, 1fr);
    /* Single column on small screens */
  }
}
</style>

