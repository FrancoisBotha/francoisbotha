<template>
  <div v-for="post in props.posts" :key="post.slug" class="blog-post">
    <NuxtLink :to="post._path">
      <img :src="`/images/blog/${post.cover}`" alt="Blog Post Cover Image" class="post-image">
    </NuxtLink>
    <div class="post-content">
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="post-description">{{ post.description }}</p>
      <NuxtLink :to="post._path" class="read-more">Read More</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['posts'])
</script>

<style scoped>
.blog-post {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: opacity 0.5s, transform 0.5s;
  will-change: opacity, transform;
  opacity: 1;
  transform: scale(1);
  margin-bottom: 1rem;
}

.blog-post:hover {
  opacity: 0.95;
  transform: scale(1.05);
}

.post-image {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.post-content {
  padding: 1.5rem;
}

.post-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.post-description {
  color: #4a5568;
  margin-bottom: 1rem;
}

.read-more {
  display: inline-block;
  background-color: #1e4b70de;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.5s, transform 0.5s;
  will-change: background-color, transform;
}

.read-more:hover {
  color: #ffffff;
  transform: scale(1.1);
  cursor: pointer;
}
</style>