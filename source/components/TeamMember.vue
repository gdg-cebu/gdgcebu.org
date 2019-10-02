<template>
    <article>
        <div class="image"></div>

        <h1>{{data.name}}</h1>
        <h2>{{data.role}}</h2>

        <div class="links">
            <a
                v-for="link in links"
                :key="link.type"
                :href="link.url"
                :class="link.type"
                target="_blank"
                rel="noopener noreferrer"
            >
                {{link.type}}
            </a>
        </div>
    </article>
</template>

<script>
export default {
    name: 'TeamMember',

    props: {
        data: {
            type: Object,
            required: true
        }
    },

    computed: {
        links() {
            return Object.keys(this.data.links || []).map(key => ({
                type: key,
                url: this.data.links[key]
            }));
        }
    }
};
</script>

<style scoped>
article {
    padding-top: 4rem;
    padding-bottom: 6rem;
    text-align: center;
}

.image {
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    margin-bottom: 4rem;

    border-radius: 50%;
    background-color: #eee;
}

h1,
h2 {
    font-size: 1.6rem;
}

h1 {
    margin-bottom: 8px;
    color: var(--primary-text-color);
}

h2 {
    margin-bottom: 2.4rem;
    font-weight: 400;
}

.links {
    display: flex;
    justify-content: center;
}

.links a {
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 6px;

    font-size: 0;
    background: url("~images/web.svg") center center no-repeat;
}

.links a.github { background-image: url("~images/github.svg"); }
.links a.linkedin { background-image: url("~images/linkedin.svg"); }
.links a.twitter { background-image: url("~images/twitter.svg"); }

@media (min-width: 576px) {
    h1,
    h2 {
        font-size: 1.8rem;
    }
}
</style>
