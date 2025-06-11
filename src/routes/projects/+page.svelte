<script>
    import { fade } from 'svelte/transition';

    const projects = [
    {
        id: 1,
        title: "TrackHub",
        description: "A comprehensive project management and time tracking application.",
        technologies: ["Nuxt.js", "Vue.js", "Node.js", "PostgreSQL", "TailwindCSS", "Pinia", "TypeScript"],
        imageUrl: "/images/trackhub-project.jpg",
        githubUrl: "https://github.com/MarnitzDev/TrackHub",
        liveUrl: "https://trackhub-3o4v.onrender.com"
    },
    {
        id: 2,
        title: "WatchHub",
        description: "A movie and TV show tracking application with a modern interface.",
        technologies: ["React", "Vite", "Supabase", "TailwindCSS", "React Query", "TypeScript"],
        imageUrl: "/images/watchhub-project.jpg",
        githubUrl: "https://github.com/MarnitzDev/WatchHub",
        liveUrl: "https://watchhub-zs0q.onrender.com"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A responsive weather application using OpenWeatherMap API and Svelte.",
        technologies: ["Svelte", "OpenWeatherMap API", "Chart.js"],
        imageUrl: "/images/weather-dashboard.jpg",
        githubUrl: "https://github.com/yourusername/weather-dashboard",
        liveUrl: "https://weather-dashboard-demo.com"
    },
    // Add more projects as needed
  ];
</script>

<svelte:head>
  <title>My Projects | Developer Portfolio</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold mb-8">My Projects</h1>

  <div class="space-y-12">
    {#each projects as project (project.id)}
      <div class="bg-white shadow-lg rounded-lg overflow-hidden" transition:fade>
       <div class="aspect-w-16 aspect-h-9 overflow-hidden">
         <img src={project.imageUrl} alt={project.title} class="w-full h-full object-cover" />
       </div>
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-2">{project.title}</h2>
          <p class="text-gray-600 mb-4">{project.description}</p>
          <div class="mb-4">
            <h3 class="text-lg font-semibold mb-2">Technologies Used:</h3>
            <div class="flex flex-wrap gap-2">
              {#each project.technologies as tech}
                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{tech}</span>
              {/each}
            </div>
          </div>
          <div class="flex space-x-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">
              GitHub Repo
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>