import { Component, Vue } from 'vue-property-decorator';
import LoginComponent from '@/components/Login/index.vue';
import SideBar from '@/components/Sidebar/index.vue'
import Header from '@/components/Header/index.vue'
@Component({
    name: 'LoginView',
    components: {
        LoginComponent,
        SideBar,
        Header
    }
})
export default class LoginView extends Vue {
}

