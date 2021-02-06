import { Component, Vue } from 'vue-property-decorator';
import Dashboard from '@/components/Dashboard/index.vue';

@Component({
    name: 'DashboardView',
    components: {
        Dashboard
    }
})
export default class DashboardView extends Vue {
}

