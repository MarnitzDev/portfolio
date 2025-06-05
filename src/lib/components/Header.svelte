<script>
  import { page } from '$app/stores';

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];
</script>

<header class="bg-white shadow-md">
  <div class="container mx-auto px-4 py-6 flex justify-between items-center">
    <a href="/" class="text-2xl font-bold text-gray-800">Marnitz Malan</a>

    <nav>
      <ul class="flex space-x-6">
        {#each navItems as item}
          <li>
            <a
              href={item.href}
              class="text-gray-600 hover:text-gray-900 transition-colors duration-200 {$page.url.pathname === item.href ? 'font-semibold' : ''}"
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>