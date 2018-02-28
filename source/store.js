import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    events: [ {
        title: 'Mobile Sites Certification: University of the Philippines Cebu',
        date: 'March 14, 2018',
        venue: 'UP Cebu',
        description: 'GDG Cebu\'s biggest event yet. The event will focus on essential technical topics for developers, along with updates on the current development trends. The topics will range from Machine Learning, Firebase, and the Cloud, to Material Design, Android, and 2017\'s Web Trends. Attendees will be learning about these topics from Googlers themselves, who will be flying in from South Korea, Japan, Singapore and the US.',
        image: 'https://picsum.photos/200/200'
    }, {
        title: 'Mobile Sites Certification: University of the Philippines Cebu',
        date: 'March 14, 2018',
        venue: 'UP Cebu',
        description: 'GDG Cebu\'s biggest event yet. The event will focus on essential technical topics for developers, along with updates on the current development trends. The topics will range from Machine Learning, Firebase, and the Cloud, to Material Design, Android, and 2017\'s Web Trends. Attendees will be learning about these topics from Googlers themselves, who will be flying in from South Korea, Japan, Singapore and the US.',
        image: 'https://picsum.photos/200/200'
    }, {
        title: 'Mobile Sites Certification: University of the Philippines Cebu',
        date: 'March 14, 2018',
        venue: 'UP Cebu',
        description: 'GDG Cebu\'s biggest event yet. The event will focus on essential technical topics for developers, along with updates on the current development trends. The topics will range from Machine Learning, Firebase, and the Cloud, to Material Design, Android, and 2017\'s Web Trends. Attendees will be learning about these topics from Googlers themselves, who will be flying in from South Korea, Japan, Singapore and the US.',
        image: 'https://picsum.photos/200/200'
    }, {
        title: 'Mobile Sites Certification: University of the Philippines Cebu',
        date: 'March 14, 2018',
        venue: 'UP Cebu',
        description: 'GDG Cebu\'s biggest event yet. The event will focus on essential technical topics for developers, along with updates on the current development trends. The topics will range from Machine Learning, Firebase, and the Cloud, to Material Design, Android, and 2017\'s Web Trends. Attendees will be learning about these topics from Googlers themselves, who will be flying in from South Korea, Japan, Singapore and the US.',
        image: 'https://picsum.photos/200/200'
    } ],

    team: [ {
        name: 'Shad Roi de la Cruz',
        role: 'Community Manager',
        image: 'https://picsum.photos/200/200'
    }, {
        name: 'Shad Roi de la Cruz',
        role: 'Community Manager',
        image: 'https://picsum.photos/200/200'
    }, {
        name: 'Shad Roi de la Cruz',
        role: 'Community Manager',
        image: 'https://picsum.photos/200/200'
    }, {
        name: 'Shad Roi de la Cruz',
        role: 'Community Manager',
        image: 'https://picsum.photos/200/200'
    }, {
        name: 'Shad Roi de la Cruz',
        role: 'Community Manager',
        image: 'https://picsum.photos/200/200'
    }, {
        name: 'Shad Roi de la Cruz',
        role: 'Community Manager',
        image: 'https://picsum.photos/200/200'
    }, {
        name: 'Shad Roi de la Cruz',
        role: 'Community Manager',
        image: 'https://picsum.photos/200/200'
    }, {
        name: 'Shad Roi de la Cruz',
        role: 'Community Manager',
        image: 'https://picsum.photos/200/200'
    } ]
};

const mutations = {};
const actions = {};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store;
