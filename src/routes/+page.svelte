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
    <h1 class="heading-jumbo">Hi! I'm Marnitz, a Full-Stack Developer. Welcome to my portfolio.</h1>
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

<style lang="scss">
  $max-width-intro: 800px;
  $max-width-projects: 1000px;
  $primary-font-color: #333;
  $secondary-font-color: #666;

  .section-wide {
    padding: 80px 0;
  }

  .introduction {
    max-width: $max-width-intro;
    margin: 0 auto;
    text-align: center;
  }

  .heading-jumbo {
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 20px;
    font-weight: 300;
    color: $primary-font-color;
  }

  .intro-text {
    font-size: 18px;
    line-height: 1.6;
    color: $secondary-font-color;
    font-weight: 400;
  }

  .section-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 40px;
    text-align: center;
    color: $primary-font-color;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 60px;
    max-width: $max-width-projects;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .heading-jumbo {
      font-size: 36px;
    }

    .intro-text {
      font-size: 16px;
    }

    .section-title {
      font-size: 28px;
    }
  }
</style>