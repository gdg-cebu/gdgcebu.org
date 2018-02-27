<template>
    <main class="gdgcebu-app">
        <app-header></app-header>
        <router-view></router-view>
    </main>
</template>

<script>
    export default {
        components: {
            'app-header': require('./app-header.vue').default
        }
    };
</script>
