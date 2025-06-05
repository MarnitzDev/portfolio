<script>
  export let project;
</script>

<div class="bg-white shadow-md rounded-lg p-6">
  <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
  <p class="text-gray-600 mb-4">{project.description}</p>
  <a href={project.link} class="text-blue-500 hover:underline">View Project</a>
</div>