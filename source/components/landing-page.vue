<template>
    <div class="landing-page">
        <about-us></about-us>
    </div>
</template>

<script>
    export default {
        components: {
            'about-us': require('./landing-page/about-us.vue').default
        }
    };
</script>
