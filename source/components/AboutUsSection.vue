<template>
    <section>
        <img src="~images/hero-image.jpg" alt="Hero image">

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
section {
    display: flex;
    justify-content: flex-end;
    position: relative;

    padding: 0 5rem;
}

img {
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
    z-index: -1;
}

div {
    width: 100%;
    max-width: 55rem;

    padding: 6rem;
    padding-top: 5rem;
    margin: 8rem 0;
    background-color: #fff;
}

h1 {
    margin-bottom: 2.4rem;

    font-size: 3rem;
    color: var(--primary-text-color);
}

p {
    font-weight: 300;
}

p:not(:last-child) {
    margin-bottom: 1.8rem;
}
</style>
