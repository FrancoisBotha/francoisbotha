<template>
  <div class="site-wrapper">
    <DfcHeader></DfcHeader>
    <main class="content">
      <NuxtPage></NuxtPage>
    </main>
    <DfcFooter></DfcFooter>
  </div>
</template>

<style scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
}

.content {
  flex-grow: 1; /* Allow content to grow and fill available space */
}
</style>