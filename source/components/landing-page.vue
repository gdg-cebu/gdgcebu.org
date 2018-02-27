<template>
    <div class="landing-page">
        <about-us></about-us>
        <what-we-do></what-we-do>
    </div>
</template>

<script>
    export default {
        components: {
            'about-us': require('./landing-page/about-us.vue').default,
            'what-we-do': require('./landing-page/what-we-do.vue').default
        }
    };
</script>
