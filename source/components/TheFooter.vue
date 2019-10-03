<template>
    <footer>
        <div class="wrapper">
            <div class="links">
                <h4>GDG Cebu</h4>

                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/events/">Events</router-link></li>
                    <li><router-link to="/team">Team</router-link></li>
                </ul>
            </div>

            <div class="links">
                <h4>Get Involved</h4>

                <ul>
                    <li><a :href="links.facebookGroup" target="_blank" rel="noopener noreferrer">Join our Facebook Group</a></li>
                    <li><a :href="links.facebookPage" target="_blank" rel="noopener noreferrer">Like our Facebook Page</a></li>
                </ul>
            </div>

            <div class="links">
                <h4>Resources</h4>

                <ul>
                    <li><a :href="links.mediaKit" target="_blank" rel="noopener noreferrer">Media Kit</a></li>
                    <li><a :href="links.photoGallery" target="_blank" rel="noopener noreferrer">Photo Gallery</a></li>
                </ul>
            </div>

            <div class="links">
                <h4>Contact Us</h4>

                <ul>
                    <li><a :href="mailtoLink">Send us an email</a></li>
                </ul>
            </div>
        </div>

        <img src="~images/gdgcebu-lockup.png" alt="GDG Cebu Logo">
    </footer>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'TheFooter',

    computed: {
        ...mapState(['links']),

        mailtoLink() {
            return `mailto:${this.links.email}`;
        }
    }
};
</script>

<style scoped>
footer {
    border-top: 1px solid #ebebeb;
    padding: 3.2rem;
    margin-top: 8rem;
}

.wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3.2rem;
    justify-content: center;
}

h4 {
    margin-bottom: 2.4rem;
    color: var(--primary-text-color);
}

ul {
    padding: 0;
    margin: 0;

    list-style: none;
}

li {
    margin: 8px 0;
}

img {
    display: block;
    max-height: 6.4rem;
    margin: 0 auto;
    margin-top: 3.2rem;
}

@media (min-width: 576px) {
    footer {
        padding: 8rem;
        margin-top: 15rem;
    }

    .wrapper {
        grid-template-columns: repeat(2, max-content);
        grid-gap: 8rem 12rem;
    }

    h4 {
        margin-bottom: 3.2rem;
    }

    li {
        margin: 1.2rem 0;
    }

    img {
        margin-top: 8rem;
    }
}

@media (min-width: 992px) {
    .wrapper {
        grid-template-columns: repeat(4, max-content);
    }
}
</style>
