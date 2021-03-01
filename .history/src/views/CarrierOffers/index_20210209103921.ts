import { Component, Vue } from 'vue-property-decorator';
import CarrierOffersComponent from '@/components/CarrierOffers/index.vue';
import SideBar from '@/components/Sidebar/index.vue'
import Header from '@/components/Header/index.vue'
@Component({
    name: 'CarrierOffersView',
    components: {
        CarrierOffersComponent,
        SideBar,
        Header
    }
})
export default class CarrierOffersView extends Vue {
}

