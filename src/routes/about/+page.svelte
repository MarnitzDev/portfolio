<script>
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>About Marnitz Malan | Developer Portfolio</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
</svelte:head>

<div class="about-container" in:fade>
  <h1 class="about-title">About Me</h1>

  <div class="about-content">
    <div class="about-text">
      <p>Hello! I'm Marnitz Malan, a passionate full-stack developer based in Gauteng, South Africa. With a keen eye for detail and a love for clean, efficient code, I specialize in creating robust and scalable web applications.</p>

      <p>My journey in tech began [brief background]. Since then, I've honed my skills in both front-end and back-end technologies, allowing me to build comprehensive solutions that not only look great but also perform exceptionally.</p>

      <p>When I'm not coding, you can find me [your hobbies or interests]. I believe in continuous learning and am always excited to take on new challenges in the ever-evolving world of web development.</p>


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

      <a href="/contact" class="contact-button">Get in Touch</a>
    </div>

    <div class="about-image">
      <img src="/path-to-your-image.jpg" alt="Marnitz Malan" />
    </div>
  </div>
</div>

<style>
  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
  }

  .about-title {
    font-size: 48px;
    font-weight: 300;
    margin-bottom: 40px;
    text-align: center;
  }

  .about-content {
    display: flex;
    gap: 60px;
  }

  .about-text {
    flex: 1;
  }

  .about-text p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .skills-title {
    font-size: 24px;
    font-weight: 600;
    margin: 40px 0 20px;
    text-align: center;
  }

  .skills-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
  }

  .skills-icons i {
    font-size: 48px;
    color: #333;
    transition: color 0.3s ease;
  }

  .skills-icons i:hover {
    color: #555;
  }

  .contact-button {
    display: inline-block;
    margin-top: 30px;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .contact-button:hover {
    background-color: #555;
  }

  .about-image {
    flex: 1;
  }

  .about-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    .about-content {
      flex-direction: column-reverse;
    }

    .about-image {
      margin-bottom: 40px;
    }
  }
</style>