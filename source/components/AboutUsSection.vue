<template>
    <section>
        <img src="~images/hero-image.jpg" alt="Hero image" loading="lazy" height="1255" width="579">

        <div>
            <h1>About us</h1>

            <p>Google Developer Group (GDG) Cebu is a non-profit group of amateurs and professionals (technology users, specialists, and developers) who are independent from Google but are enthusiasts and daily users of Google technologies. Members meet and socialize on a regular basis.</p>
            <p>GDG Cebu is an independent group; the activities and opinions expressed by the group should in no way be linked to Google, the corporation.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutUsSection'
};
</script>

<style scoped>
img {
    display: none;

    width: calc(100% - 10rem);
    max-width: 114rem;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;

    position: absolute;
    top: 0;
    left: 5rem;
    right: 5rem;
    bottom: 0;
}

div {
    padding: 3.2rem;
    background-color: #fff;
}

h1 {
    margin-bottom: 1.8rem;

    font-size: 2rem;
    text-align: center;
    color: var(--primary-text-color);
}

p {
    margin: 1.6rem 0;
}

p:last-child {
    margin-bottom: 0;
}

@media (min-width: 576px) {
    section {
        display: flex;
        justify-content: flex-end;
        position: relative;

        padding: 0 5rem;
    }

    div {
        padding: 6rem;
        padding-top: 5rem;
    }

    h1 {
        margin-bottom: 2.4rem;
        font-size: 3rem;
        text-align: left;
    }

    p {
        margin: 1.8rem 0;
    }
}

@media (min-width: 730px) {
    img {
        display: block;
    }

    div {
        max-width: 55rem;
        margin: 8rem 0;

        position: relative;
        z-index: 1;
    }
}

@media (min-width: 1450px) {
    img {
        max-width: calc(100% - 10rem - 55rem);
    }
}
</style>
