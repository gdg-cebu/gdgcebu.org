<template>
    <article class="team-item">
        <img :src="data.image" :alt="data.name">
        <h2>{{ data.name }}</h2>
        <p>{{ data.role }}</p>
    </article>
</template>

<script>
    export default {
        props: ['data']
    };
</script>

<style scoped>
    .team-item {
        text-align: center;
    }

    img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: center center;
    }

    h2 {
        font-size: 1.8rem;
        font-weight: 500;
    }

    p {
        color: #888;
    }
</style>
