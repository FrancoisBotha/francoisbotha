<template>
    <div class="main-footer">
      <p class="main-footer__copyright">&copy; Francois Botha 2024. All Rights Reserved</p>
      <div class="main-footer__socials">
        <a v-for="link in links" :key="link.name" :href="link.href" class="main-footer__social">
          <Icon :name="link.icon" size="1.5rem" class="icon" />
        </a>
      </div>
    </div>
  </template>

<script setup>
    const links = [
        {name: 'GitHub', href: 'https://github.com/francoisbotha', icon: 'entypo-social:github-with-circle'},
        // {name: 'Twitter', href: 'https://twitter.com', icon: 'entypo-social:twitter'},
        {name: 'LinkedIn', href: 'https://www.linkedin.com/in/fran-botha', icon: 'entypo-social:linkedin-with-circle'}
    ]
</script>

<style scoped>

</style>