<script>
  export let project;
</script>

<div class="project-card">
  <div class="image-container">
    <img src={project.imageUrl} alt={project.title} />
  </div>
  <div class="content">
    <h2>{project.title}</h2>
    <p class="description">{project.description}</p>
    <div class="technologies">
      <h3>Technologies Used:</h3>
      <div class="tech-list">
        {#each project.technologies as tech}
          <span class="tech-tag">{tech}</span>
        {/each}
      </div>
    </div>
    <div class="links">
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="github-link">
        GitHub Repo
      </a>
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="demo-link">
        Live Demo
      </a>
    </div>
  </div>
</div>

<style lang="scss">
  .project-card {
    background-color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 0.5rem;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .image-container {
    position: relative;
    padding-top: 56.25%; // 16:9 aspect ratio
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .description {
    color: #4b5563;
    margin-bottom: 1rem;
  }

  .technologies {
    margin-bottom: 1rem;

    h3 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    background-color: #dbeafe;
    color: #1e40af;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
  }

  .links {
    display: flex;
    gap: 1rem;

    a {
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      text-decoration: none;
      transition: background-color 0.3s ease;

      &.github-link {
        background-color: #1f2937;
        color: white;

        &:hover {
          background-color: #374151;
        }
      }

      &.demo-link {
        background-color: #2563eb;
        color: white;

        &:hover {
          background-color: #3b82f6;
        }
      }
    }
  }
</style>