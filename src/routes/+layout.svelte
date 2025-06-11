<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
</script>

<div class="body-start">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  .body-start {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1;
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
</style>