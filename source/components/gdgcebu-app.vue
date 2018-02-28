<template>
    <main class="gdgcebu-app">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </main>
</template>

<script>
    export default {
        components: {
            'app-header': require('./app-header.vue').default,
            'app-footer': require('./app-footer.vue').default
        }
    };
</script>
