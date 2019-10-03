<template>
    <main class="wrapper">
        <header>
            <h1>Team</h1>
            <p>These are the people that make all our awesome events possible, so we can all have a place to connect with other developers in our community.</p>
        </header>

        <div>
            <TeamMember v-for="member in team" :key="member.name" :data="member" />
        </div>
    </main>
</template>

<script>
import {mapState} from 'vuex';
import TeamMember from '@/components/TeamMember.vue';

export default {
    name: 'Team',

    components: {
        TeamMember
    },

    computed: mapState(['team'])
};
</script>

<style scoped>
main {
    padding: 0 3.2rem;
}

h1 {
    margin-bottom: 1.8rem;

    font-size: 2rem;
    color: var(--primary-text-color);
}

header {
    padding-top: 3rem;
    padding-bottom: 4rem;
}

div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    grid-gap: 1rem;
}

@media (min-width: 576px) {
    main {
        padding: 0 11rem;
    }

    header {
        max-width: 45rem;
        padding-top: 5rem;
        padding-bottom: 6rem;
    }

    h1 {
        margin-bottom: 2.4rem;
        font-size: 3rem;
    }
}
</style>
