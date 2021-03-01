import { Component, Vue } from 'vue-property-decorator';
import SignUpComponent from '@/components/SignUp/index.vue';
import SideBar from '@/components/Sidebar/index.vue'
import Header from '@/components/Header/index.vue'
@Component({
    name: 'SignUpView',
    components: {
        SignUpComponent,
        SideBar,
        Header
    }
})
export default class SignUpView extends Vue {
}

