<template>
  <div class="min-h-screen h-[200vh] max-w-screen flex flex-col items-center">
    <Navbar />
    <div class="p-4 text-lg flex flex-col items-center">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Josef Macera Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Hello! I'm Josef, avid programmer and open-source supporter. I love all things software development and enjoy working on personal and enterprise-level projects. I'm from Reno, Nevada and will be studying ECE and Carnegie Mellon University.",
    },
  ],
});

const particlesInit = async (engine: any) => {
  await loadFull(engine);
};

const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};
</script>
