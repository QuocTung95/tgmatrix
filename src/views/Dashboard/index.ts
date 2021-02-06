import { Component, Vue } from 'vue-property-decorator';
import DashboardComponent from '@/components/Dashboard/index.vue';
import SideBar from '@/components/Sidebar/index.vue'
import Header from '@/components/Header/index.vue'
@Component({
    name: 'DashboardView',
    components: {
        DashboardComponent,
        SideBar,
        Header
    }
})
export default class DashboardView extends Vue {
}

