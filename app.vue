<script setup>
import '/node_modules/primeflex/primeflex.css'
import { ref } from 'vue';

const titlePage = ref('Hello, this is a new page')

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
