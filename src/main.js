import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import store from './store';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)
app.use(store)
app.use(router);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.mount('#app');

