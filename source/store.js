import Vue from 'vue';
import Vuex from 'vuex';
import dayjs from 'dayjs';

import team from './data/team.json';
import events from './data/events.json';
import links from './data/links.json';

Vue.use(Vuex);

const state = {
    team,
    events,
    links
};

const getters = {
    featuredEvent(state) {
        const featured = state.events.find(event => event.featured);
        return featured || state.events[0];
    },

    upcomingEvents(state) {
        const today = dayjs();
        return state.events.filter(event => (
            dayjs(event.date).isAfter(today)
        ));
    },

    pastEvents(state) {
        const today = dayjs();
        return state.events.filter(event => (
            dayjs(event.date).isBefore(today)
        ));
    }
};

export default new Vuex.Store({
    state,
    getters
});
