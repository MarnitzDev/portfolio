
<script>
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>About Marnitz Malan | Developer Portfolio</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</svelte:head>

<div class="about-container" in:fade>
  <h1 class="about-title">About Me</h1>

  <div class="info-grid">
    <div class="info-item">
      <h3>Location</h3>
      <p>Gauteng, South Africa</p>
    </div>
    <div class="info-item">
      <h3>Contact</h3>
      <a href="mailto:support@marnitzmalan.com">support@marnitzmalan.com</a>
    </div>
  </div>

  <div class="about-content">
    <div class="about-image">
      <img src="/images/profile-pic.jpg" alt="Marnitz Malan" />
    </div>
    <div class="about-text">
      <p>Hello! I'm Marnitz Malan, a passionate full-stack developer based in Gauteng, South Africa.
        With over 15 years of industry experience, I bring a unique blend of design expertise and
        technical skills to every project I tackle.
      </p>
      <p>I originally started my journey in tech as a designer, where I developed a keen eye for detail and a love for
        clean, elegant interfaces. Over time, my curiosity and drive led me to expand my skillset into development,
        allowing me to build robust, scalable web applications that not only look beautiful but also function seamlessly.
      </p>
      <p>
        Today, I specialize in front-end development, but I'm equally comfortable working across the full stack,
        crafting comprehensive solutions that bridge design and functionality. I thrive on writing clean, efficient
        code that delivers exceptional user experiences.
      </p>
    </div>
  </div>

  <div class="skills-section">
    <h2 class="skills-title">Skills & Technologies</h2>
    <div class="skills-icons">
      <i class="devicon-vuejs-plain colored" title="Vue.js"></i>
      <i class="devicon-nuxtjs-plain colored" title="Nuxt.js"></i>
      <i class="devicon-react-original" title="React"></i>
      <i class="devicon-nextjs-original" title="Next.js"></i>
      <i class="devicon-angularjs-plain colored" title="Angular"></i>
      <i class="devicon-svelte-plain colored" title="Svelte"></i>
      <i class="devicon-javascript-plain colored" title="JavaScript"></i>
      <i class="devicon-typescript-plain colored" title="TypeScript"></i>
      <i class="devicon-nodejs-plain colored" title="Node.js"></i>
      <i class="devicon-html5-plain colored" title="HTML5"></i>
      <i class="devicon-css3-plain colored" title="CSS3"></i>
      <i class="devicon-jquery-plain colored" title="jQuery"></i>
      <i class="devicon-sass-original" title="Sass"></i>
      <i class="devicon-php-plain colored" title="PHP"></i>
      <i class="devicon-laravel-plain colored" title="Laravel"></i>
      <i class="devicon-mysql-plain colored" title="MySQL"></i>
      <i class="devicon-postgresql-plain colored" title="PostgreSQL"></i>
      <i class="devicon-git-plain colored" title="Git"></i>
      <i class="devicon-gitlab-plain colored" title="GitLab"></i>
      <i class="devicon-docker-plain colored" title="Docker"></i>
      <i class="devicon-jira-plain colored" title="Jira"></i>
    </div>
  </div>
</div>

<style lang="scss">
  $primary-color: #333;
  $secondary-color: #777;
  $background-color: #f8f8f8;
  $text-color: #666;
  $accent-color: #3498db;
  $max-width: 1200px;

  .about-container {
    max-width: $max-width;
    margin: 0 auto;
    padding: 30px 20px;

    @media (min-width: 768px) {
      padding: 60px 20px;
    }
  }

  .about-title {
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 30px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 48px;
      margin-bottom: 40px;
    }
  }

  .info-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-bottom: 40px;
    }
  }

  .info-item {
    text-align: center;
    padding: 15px;
    border-radius: 10px;
    background-color: $background-color;

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    p {
      font-size: 16px;
      color: $text-color;
    }

    a {
      font-size: 16px;
      color: $accent-color;
    }
  }

  .about-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 30px;

    .about-image {
      width: 100%;
      max-width: 250px;
      margin: 0 auto;

      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        display: block;
      }
    }

    .about-text {
      p {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 15px;
      }
    }
  }

  /* Desktop styles */
  @media screen and (min-width: 768px) {
    .about-content {
      grid-template-columns: 300px 1fr;
      gap: 60px;
      margin-bottom: 40px;

      .about-image {
        max-width: 300px;
        margin: 0;
      }

      .about-text {
        p {
          font-size: 18px;
          margin-bottom: 20px;
        }
      }
    }
  }

  .skills-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 0;

    @media (min-width: 768px) {
      padding: 60px 20px;
    }
  }

  .skills-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }

  .skills-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

    @media (min-width: 768px) {
      gap: 20px;
    }

    i {
      font-size: 36px;
      transition: color 0.3s ease;

      @media (min-width: 768px) {
        font-size: 48px;
      }

      &:hover {
        color: $primary-color;
      }
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;

    @media (min-width: 768px) {
      gap: 20px;
    }

    a {
      color: $primary-color;
      font-size: 20px;
      transition: color 0.3s ease;

      @media (min-width: 768px) {
        font-size: 24px;
      }

      &:hover {
        color: $secondary-color;
      }
    }
  }
</style>