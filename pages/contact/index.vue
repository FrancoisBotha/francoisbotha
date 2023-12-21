<template>

    <section id="contact-banner">
        <h1 class="contact-banner__title">Contact</h1>
    </section>

    <div class="contact-container">
      <div class="contact-form">
        <!-- <div class="info">
          <div class="email">Email: hey@francoisbotha.io</div>
          <div class="social-media">
            Social Media:
            <a href="#" class="icon">LinkedIn</a>
            <a href="#" class="icon">TikTok</a>
            <a href="#" class="icon">Instagram</a>
            <a href="#" class="icon">YouTube</a>
          </div>
        </div> -->
        <form action="index.html" class="contact-form">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Email *" />
            <label for="message">Message</label>
            <textarea placeholder="Message" id="message"></textarea>
            <button type="submit" class="button">Send</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    methods: {
      submitForm() {
        // Form submission logic goes here
        console.log('Form submitted');
      },
    },
  };
  </script>
  
  <style scoped>

  @import url("~/assets/css/contact.css");

  </style>