import Vue from 'vue';
import Vuex from 'vuex';

import team from './data/team.json';
import events from './data/events.json';

Vue.use(Vuex);

const state = {
    team,
    events
};

const getters = {
    featuredEvent(state) {
        const featured = state.events.find(event => event.featured);
        return featured || state.events[0];
    }
};

export default new Vuex.Store({
    state,
    getters
});
