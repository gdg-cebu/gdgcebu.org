<template>
    <article>
        <div class="image">
            <img :src="data.image" :alt="data.title">
        </div>

        <div class="details">
            <h2>{{data.title}}</h2>

            <ul>
                <li>{{eventDate}}</li>
                <li>{{data.venue}}</li>
            </ul>
        </div>
    </article>
</template>

<script>
import dayjs from 'dayjs';

export default {
    name: 'PastEvent',

    props: {
        data: {
            type: Object,
            required: true
        }
    },

    computed: {
        eventDate() {
            return dayjs(this.data.date).format('MMMM D, YYYY');
        }
    }
};
</script>

<style scoped>
.image {
    position: relative;
}

.image::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

article:nth-child(4n+1) .image::after {
    background-color: rgba(67, 132, 244, 0.4);
}

article:nth-child(4n+2) .image::after {
    background-color: rgba(255, 193, 2, 0.4);
}

article:nth-child(4n+3) .image::after {
    background-color: rgba(220, 68, 55, 0.4);
}

article:nth-child(4n+4) .image::after {
    background-color: rgba(15, 157, 88, 0.4);
}

img {
    display: block;
    width: 100%;

    filter: saturate(0) brightness(2.5);
}

.details {
    padding: 3.2rem 2.4rem 8rem 2.4rem;
}

.details h2 {
    margin-bottom: 1.8rem;

    font-size: 2rem;
    color: var(--primary-text-color);
}

.details li {
    font-size: 1.6rem;
}

@media (min-width: 576px) {
    .details h2 {
        margin-bottom: 2.4rem;
        font-size: 2.4rem;
    }

    .details li {
        margin: 8px 0;
    }
}
</style>
