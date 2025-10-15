<script lang="ts">
	export let project: {
		imageUrl: string;
		title: string;
		description: string;
		technologies: string[];
		githubUrl: string;
		liveUrl: string;
	};
</script>

<div class="project-card">
	<div class="image-container">
		<img src={project.imageUrl} alt={project.title} />
	</div>
	<div class="content">
		<div class="text-center">
			<h2>{project.title}</h2>
			<p class="description">{project.description}</p>
			<div class="technologies">
				<div class="tech-list">
					{#each project.technologies as tech}
						<span class="tech-tag">{tech}</span>
					{/each}
				</div>
			</div>
		</div>
		<div class="links mt-8 mb-6">
			<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="github-link">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
				GitHub
			</a>
			<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="demo-link">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
				Live Demo
			</a>
		</div>
	</div>
</div>

<style lang="scss">
  .project-card {
    @apply bg-white rounded-lg overflow-hidden shadow-lg flex flex-col;
  }

  .image-container {
    @apply relative pb-[55%] overflow-hidden;
    img {
      @apply absolute inset-0 w-full h-full object-cover;
    }
  }

  .content {
    @apply p-6 flex flex-col justify-center items-center flex-grow;
  }

  h2 {
    @apply text-2xl font-bold text-gray-800 mb-2;
  }

  .description {
    @apply text-gray-600 text-base leading-relaxed mb-4;
  }

  .technologies {
    @apply mb-4 text-center;
    h3 {
      @apply text-lg font-semibold text-gray-700 mb-2;
    }
  }

  .tech-list {
    @apply flex flex-wrap justify-center gap-2;
  }

  .tech-tag {
    @apply bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium;
  }

  .links {
    @apply flex flex-col sm:flex-row gap-4 w-full justify-center;
    a {
      @apply flex items-center justify-center gap-3 px-6 py-3 rounded-md text-base font-medium transition-colors duration-200 w-full sm:w-auto no-underline;
      svg {
        @apply w-5 h-5;
      }
      &.github-link {
        @apply bg-gray-800 text-white hover:bg-gray-700 hover:no-underline;
      }
      &.demo-link {
        @apply bg-blue-600 text-white hover:bg-blue-500 hover:no-underline;
      }
    }
  }
</style>