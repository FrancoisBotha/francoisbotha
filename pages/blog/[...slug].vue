<template>
    <div class="blog-container">
      <NuxtLink to='/blog' class="back-button">Back</NuxtLink>
      <ContentRenderer :value="data" class="markdown-body" ref="markdownContent" />
      <div class="my-8 ">
        <a v-for="tag in  data.tags " :key="tag" 
          class="tag">
          <Icon name="pajamas:label" size="1.5rem" class="text-gray-100 mr-2" /> {{ tag }}
        </a>
      </div>
    </div>
  </template>

<script setup>
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github.css';
  import 'highlight.js/styles/vs.css'; // Import the chosen theme's CSS'

  const { path } = useRoute()

  const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent()
      .where({ _path: path })
      .findOne()
  })

  const highlightCodeBlocks = () => {
    const markdownContentElement = document.querySelector('.markdown-body');

    if (markdownContentElement) {
      const codeBlocks = markdownContentElement.querySelectorAll('pre code');

      codeBlocks.forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  };

  onMounted(() => {
    highlightCodeBlocks();
  });

</script>

<style>

  @import url("~/assets/css/blog.css"); 

</style>