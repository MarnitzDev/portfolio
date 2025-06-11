<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import projectsData from '$lib/projects.json';

  let projects = projectsData;
</script>

<svelte:head>
  <title>Marnitz Malan | Developer Portfolio</title>
</svelte:head>

<div class="section-wide">
  <div class="introduction">
    <h1 class="heading-jumbo">Hi! I’m Marnitz, a Full-Stack Developer. Welcome to my portfolio.</h1>
    <p class="intro-text">
      I specialize in crafting web applications that are both robust and scalable, with a keen focus on delivering seamless experiences through well-designed front-end and back-end technologies.
    </p>
  </div>
</div>

<div class="section-wide">
  <h2 class="section-title">Featured Projects</h2>
  <div class="projects-list">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</div>

<style>
  .section-wide {
    padding: 80px 0;
  }

  .introduction {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .heading-jumbo {
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 20px;
    font-weight: 300;
  }

  .intro-text {
    font-size: 18px;
    line-height: 1.6;
    color: #666;
    font-weight: 400;
  }

  .section-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 40px;
    text-align: center;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 60px;
    max-width: 1000px;
    margin: 0 auto;
  }
</style>