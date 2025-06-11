<script>
  import { page } from '$app/stores';

  const navItems = [
    { href: '/', label: 'Work' },
    { href: '/about', label: 'About' },
  ];
</script>

<header class="navigation">
  <div class="navigation-items">
    <a href="/" class="logo-link">
      <h4 class="heading-4">Marnitz Malan</h4>
    </a>
    <nav class="navigation-wrap">
      {#each navItems as item}
        <a
          href={item.href}
          class="navigation-item {$page.url.pathname === item.href ? 'active' : ''}"
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>
</header>

<style>
  .navigation {
    padding: 42px 20px;
    background-color: #ffffff;
  }

  .navigation-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo-link {
    text-decoration: none;
  }

  .heading-4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
  }

  .navigation-wrap {
    display: flex;
  }

  .navigation-item {
    color: #333333;
    text-decoration: none;
    padding: 10px;
    margin-left: 20px;
    font-size: 18px;
  }

  .active {
    font-weight: 600;
  }
</style>