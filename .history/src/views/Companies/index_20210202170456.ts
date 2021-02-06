import { Component, Vue } from 'vue-property-decorator';
import CompaniesComponent from '@/components/Companies/index.vue';

@Component({
    name: 'CompaniesView',
    components: {
        CompaniesComponent
    }
})
export default class CompaniesView extends Vue {
}

