import { Component, Vue } from 'vue-property-decorator';
import UsersComponent from '@/components/Users/index.vue';
import SideBar from '@/components/Sidebar/index.vue'
import Header from '@/components/Header/index.vue'
@Component({
    name: 'UsersView',
    components: {
        UsersComponent,
        SideBar,
        Header
    }
})
export default class UsersView extends Vue {
}

