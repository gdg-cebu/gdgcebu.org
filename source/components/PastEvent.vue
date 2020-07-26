<template>
    <article>
        <div class="image" :class="{colorize: data.colorize}">
            <img
              :src="imageUrl"
              :alt="data.title"
              loading="lazy"
              width="555"
              height="305"
            >
        </div>

        <div class="details">
            <h2>{{data.title}}</h2>

            <ul>
                <li>{{eventDate}}</li>
                <li>{{data.venue}}</li>
            </ul>

            <a :href="data.url" target="_blank" rel="noopener noreferrer">
                Visit event
            </a>
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
        },

        imageUrl() {
          const BASE_URL = 'https://gdgcebu.org';
          const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/arnellebalane';
          const transforms = 'w_555,h_312';
          const url = [BASE_URL, this.data.image.replace(/^\//, '')].join('/');

          return [CLOUDINARY_BASE_URL, 'image/fetch', transforms, url]
            .filter(Boolean).join('/');
        }
    }
};
</script>

<style scoped>
.image {
    position: relative;
}

.image.colorize::after {
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
    height: 100%;
}

.image.colorize img {
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

.details a {
    display: inline-block;
    margin-top: 2.4rem;
    margin-left: 4rem;

    font-size: 1.6rem;
    color: var(--gdg-blue);
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
