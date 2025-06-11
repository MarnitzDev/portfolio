
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
      <a href="mailto:malanmarnitz@gmail.com">malanmarnitz@gmail.com</a>
    </div>
  </div>

  <div class="about-content">
    <div class="about-text">
      <p>Hello! I’m Marnitz Malan, a passionate full-stack developer based in Gauteng, South Africa.
        With over 15 years of industry experience, I bring a unique blend of design expertise and
        technical skills to every project I tackle.
      </p>
      <p>I originally started my journey in tech as a designer, where I developed a keen eye for detail and a love for
        clean, elegant interfaces. Over time, my curiosity and drive led me to expand my skillset into development,
        allowing me to build robust, scalable web applications that not only look beautiful but also function seamlessly.
      </p>
      <p>
        Today, I specialize in front-end development, but I’m equally comfortable working across the full stack,
        crafting comprehensive solutions that bridge design and functionality. I thrive on writing clean, efficient
        code that delivers exceptional user experiences.
      </p>
    </div>

    <div class="about-image">
      <img src="/images/profile-pic.jpg" alt="Marnitz Malan" />
    </div>
  </div>

  <div class="skills-section">
    <h2 class="skills-title">Skills & Technologies</h2>
    <div class="skills-icons">
      <i class="devicon-vuejs-plain" title="Vue.js"></i>
      <i class="devicon-nuxtjs-plain" title="Nuxt.js"></i>
      <i class="devicon-react-original" title="React"></i>
      <i class="devicon-nextjs-original" title="Next.js"></i>
      <i class="devicon-angularjs-plain" title="Angular"></i>
      <i class="devicon-svelte-plain" title="Svelte"></i>
      <i class="devicon-javascript-plain" title="JavaScript"></i>
      <i class="devicon-typescript-plain" title="TypeScript"></i>
      <i class="devicon-nodejs-plain" title="Node.js"></i>
      <i class="devicon-html5-plain" title="HTML5"></i>
      <i class="devicon-css3-plain" title="CSS3"></i>
      <i class="devicon-jquery-plain" title="jQuery"></i>
      <i class="devicon-sass-original" title="Sass"></i>
      <i class="devicon-php-plain" title="PHP"></i>
      <i class="devicon-laravel-plain" title="Laravel"></i>
      <i class="devicon-mysql-plain" title="MySQL"></i>
      <i class="devicon-postgresql-plain" title="PostgreSQL"></i>
      <i class="devicon-git-plain" title="Git"></i>
      <i class="devicon-gitlab-plain" title="GitLab"></i>
      <i class="devicon-docker-plain" title="Docker"></i>
      <i class="devicon-jira-plain" title="Jira"></i>
    </div>
  </div>
</div>


<style lang="scss">
  $primary-color: #333;
  $secondary-color: #777;
  $background-color: #f8f8f8;
  $text-color: #666;
  $max-width: 1200px;

  .about-container {
    max-width: $max-width;
    margin: 0 auto;
    padding: 60px 20px;
  }

  .about-title {
    font-size: 48px;
    font-weight: 300;
    margin-bottom: 40px;
    text-align: center;
  }

  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .info-item {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    background-color: $background-color;

    i {
      font-size: 24px;
      color: $primary-color;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
    }

    p, a {
      font-size: 16px;
      color: $text-color;
    }
  }

  .about-content {
    display: flex;
    gap: 60px;
    margin-bottom: 40px;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .about-text {
    flex: 2;

    p {
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 20px;
    }
  }

  .about-image {
    flex: 1;
    max-width: 300px;
    margin: 0 auto;

    @media (max-width: 768px) {
      margin-bottom: 40px;
      max-width: 250px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
  }

  .skills-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 20px;
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
    gap: 20px;

    i {
      font-size: 48px;
      color: $secondary-color;
      transition: color 0.3s ease;

      &:hover {
        color: $primary-color;
      }
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;

    a {
      color: $primary-color;
      font-size: 24px;
      transition: color 0.3s ease;

      &:hover {
        color: $secondary-color;
      }
    }
  }
</style>