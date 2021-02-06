import { Component, Vue } from 'vue-property-decorator';
import DashboardComponent from '@/components/Dashboard/index.vue';

@Component({
    name: 'DashboardView',
    components: {
        DashboardComponent
    }
})
export default class DashboardView extends Vue {
}

