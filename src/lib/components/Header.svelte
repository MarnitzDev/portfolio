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
          class="navigation-item"
          class:active={$page.url.pathname === item.href}
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>
</header>

<style lang="scss">
  $max-width: 1200px;
  $primary-color: #333333;
  $background-color: #ffffff;

  .navigation {
    padding: 42px 20px;
    background-color: $background-color;

    &-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: $max-width;
      margin: 0 auto;
    }

    &-wrap {
      display: flex;
    }

    &-item {
      color: $primary-color;
      text-decoration: none;
      padding: 10px;
      margin-left: 20px;
      font-size: 18px;
      transition: font-weight 0.3s ease;

      &.active {
        font-weight: 600;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .logo-link {
    text-decoration: none;
  }

  .heading-4 {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: $primary-color;
  }
</style>