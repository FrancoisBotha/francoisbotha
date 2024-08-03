<template>
    <header class="main-header">
        <button class="toggle-button">
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
        </button>
        <div>
            <nuxt-link to="/" class="brand">FrancoisBotha.io</nuxt-link>
        </div>
        <nav class="main-nav">
            <ul class="main-nav__items">
                <li class="main-nav__item" v-for="(item, index) in navigation" :key="index">
                    <nuxt-link :to="item.href" :class="{ 'current': item.current }">{{ item.name }}</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const navigation = computed(() => [
  { name: 'Home', href: '/', current: route.name === 'index' },
  { name: 'Blog', href: '/blog', current: route.name && route.name.includes('blog') },
  { name: 'Articles', href: '/articles', current: route.name && route.name.includes('articles') },
  { name: 'Scratch Pad', href: '/scratchpad', current: route.name && route.name.includes('scratchpad') },
  { name: 'Contact', href: '/contact', current: route.name === 'contact' }
]);
</script>