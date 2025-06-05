<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  // Add your projects data here
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', link: '/projects/1' },
    { title: 'Project 2', description: 'Description of project 2', link: '/projects/2' },
    // Add more projects as needed
  ];
</script>

<svelte:head>
  <title>My Developer Portfolio</title>
</svelte:head>

<h1 class="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>

<section>
  <h2 class="text-2xl font-semibold mb-4">Featured Projects</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>