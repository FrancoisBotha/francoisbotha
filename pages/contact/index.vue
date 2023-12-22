<template>
  <section id="contact-banner">
    <h1 class="contact-banner__title">Contact</h1>
  </section>

  <section id="contact-form-section">
    <div class="contact-container-grid">
      <div class="col-1">
      </div>
      <div class="col-2">
        <div>
          <div class="info">
          <p></p>
          <div class="email-label">Email: </div>
          <div class="email-text">hey@francoisbotha.io </div>
          
          <p></p>
          <div class="social-media">
            Social Media:
            <p>
              <a href="https://github.com/francoisbotha" class="contact-page__social-btn"> <Icon name="entypo-social:github-with-circle" size="1.5rem" class="icon" /></a>
              <Icon name="entypo-social:twitter" size="1.5rem" class="icon" />
              <a href="https://www.linkedin.com/in/fran-botha" class="contact-page__social-btn"> <Icon name="entypo-social:linkedin-with-circle" size="1.5rem" class="icon" /></a>
            </p>
          </div>
        </div>
        </div>

      </div>
      <div class="col-3">
        <div >
          <form action="" class="contact-form">
            <p>
              <label for="first-name">First Name</label>
              <input type="text" id="first-name">
            </p>
            <p>
              <label for="last-name">Last Name</label>
              <input type="text" id="last-name">
            </p>
            <p class="full-width">
              <label for="email">Email</label>
              <input type="email" id="email"  />
            </p>
            <p class="full-width">
              <label for="">Message</label>
              <textarea name="" id="" cols="30" rows="7"></textarea>
            </p>
            <p class="full-width">
              <button type="submit" class="button">Send</button>
            </p>
          </form>
      </div>
    </div>
    <div class="col-4">
    </div>
    </div>
  </section>
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