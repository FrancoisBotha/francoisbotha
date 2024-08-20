<template>
    <section id="home-banner">
        <h1 class="home-banner__title">Hey!</h1>
        <div class="francois-image-container">
            <img class="francois-image" src="~/assets/images/francois1.jpg" alt="Francois Botha"/>
        </div>
    </section>

    <div class="home-container">

        <section>
            <p>
                Welcome to my professional space! I'm François Botha, a seasoned Senior Analyst at Nukon and a full-stack developer with a rich background in digital transformation and software engineering. My journey in the tech world has been marked by significant roles across diverse industries, from leading agile development teams to spearheading major digital initiatives. With a career spanning over two decades, I've honed my skills in a variety of technologies, including Java Spring Boot, Apache Camel, Cucumber BDD testing, and Vue.js. My expertise lies in developing robust solutions for complex business challenges, particularly in the realms of supply chain management and digital integration.
            </p>
            <p>
                My professional path is a blend of technical prowess and strategic insight, shaped by experiences at reputable organizations like PwC and a strong academic foundation with a Master's in Software Engineering from the University of Liverpool. At Nukon, I've played a pivotal role in implementing cutting-edge digital solutions for large-scale operations, including a bespoke barrel management system for Treasury Wine Estates and a transport planning solution for Mars Wrigley. My approach is always geared towards leveraging technology to enhance efficiency, streamline operations, and drive business growth. I'm passionate about exploring new technologies and methodologies, constantly seeking to expand my skill set and contribute to the success of forward-thinking organizations.
            </p>
        </section>

        <section>
            <h2 class="header-title">Latest Blog Posts</h2>
            <div class="posts-grid">
                <Post :posts="posts" />
            </div>
        </section>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog')
        .sort({ date: -1 })
        .limit(3)
        .find()
)
</script>

<style>
@import url("~/assets/css/home.css");
</style>