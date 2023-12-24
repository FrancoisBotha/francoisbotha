<template>
        <header class="main-header">
        <button class="toggle-button">
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
        </button>
        <div>
            <a href="index.html" class="brand">FrancoisBotha.io</a>
        </div>
        <nav class="main-nav">
            <ul class="main-nav__items">
                <li class="main-nav__item" v-for="(item, index) in navigation" :key="index">
                    <a :href="item.href" :class="{ 'current': item.current }">{{ item.name }}</a>
                </li>
                <!-- <li class="main-nav__item main-nav__item--cta">
                    <a href="pages/start-hosting/index.html">Explore Courses</a>
                </li> -->
            </ul>
        </nav>
    </header>
</template>

<script setup>

const route = useRoute();

const navigation = [
  { name: 'Home', href: '/', current: route.name == 'index' },
  { name: 'Blog', href: '/blog', current: route.name.includes('blog') },
  { name: 'Scratch Pad', href: '/scratchpad', current: route.name.includes('scratchpad') },
  { name: 'Contact', href: '/contact', current: route.name == 'contact' }
]
</script>