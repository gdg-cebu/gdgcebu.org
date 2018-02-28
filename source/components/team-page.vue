<template>
    <div class="team-page">
        <div class="wrapper">
            <div class="page-header">
                <h1>The Team</h1>
            </div>

            <div class="team">
                <team-item v-for="(member, i) in team" :key="i" :data="member"></team-item>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState(['team']),

        components: {
            'team-item': require('./team-page/team-item.vue').default
        }
    };
</script>

<style scoped>
    .team-page {
        padding-bottom: 20rem;
    }

    .page-header {
        padding: 7rem 0;
    }

    h1 {
        font-size: 2.4rem;
        font-weight: 500;
    }

    .team {
        display: flex;
        flex-wrap: wrap;
        justify-content: center
    }

    .team-item {
        width: 39rem;
        padding: 3.2rem;
    }
</style>
