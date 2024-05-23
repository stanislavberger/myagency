<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps(['titlePage'])

</script>

<template>
    <div class="hero">
        <div class="titlePage">
            <h1>{{ titlePage }}</h1>
            <p></p>
        </div>
    </div>
</template>