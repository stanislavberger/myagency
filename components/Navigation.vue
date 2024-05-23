<script setup lang="ts">
const navItems = ref([
    {title: 'О нас', href: '/about'},
    {title: 'Услуги', href: '/services'},
    {title: 'Портфолио', href: '/cases'},
    {title: 'Контакты', href: '/contacts'},
    ]);
</script>

<template>
    <nav class="flex justify-content-start flex-wrap">
        <ul>
            <li v-for="navItem in navItems">{{ navItem.title }}</li>
        </ul>
    </nav>
</template>