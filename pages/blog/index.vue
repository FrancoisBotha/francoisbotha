<template>
  <div class="blog-container">
    <h1 class="text-3xl my-8 font-bold ">Blog Posts</h1>
    <p class="font-medium max-w-4xl">

      I like to write about anything thta I am currently working or something new that interests me. If you would like me
      to
      write about something or be a guest blogger on your blog please reach out to me on Twitter. If you would like to
      subscribe to an RSS feed you can find it here.
    </p>

    <section class="blog-grid">
      <Post :posts="posts" />
    </section>
  </div>
</template>

<script setup>
  const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog').find()
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

