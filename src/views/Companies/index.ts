import { Component, Vue } from 'vue-property-decorator';
import CompaniesComponent from '@/components/Companies/index.vue';
import SideBar from '@/components/Sidebar/index.vue'
import Header from '@/components/Header/index.vue'
@Component({
    name: 'CompaniesView',
    components: {
        CompaniesComponent,
        SideBar,
        Header
    }
})
export default class CompaniesView extends Vue {
}

