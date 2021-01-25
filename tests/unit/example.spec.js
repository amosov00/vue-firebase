import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router'
import Registration from "@/views/Registration";
import Xbutton from "@/components/Xbutton";
import Xcard from "@/components/Xcard";
const localVue = createLocalVue()
localVue.use(Vuelidate)
localVue.use(VueRouter)
localVue.component('x-btn', Xbutton)
localVue.component('x-card', Xcard)


describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        // const msg = 'new message'
        const wrapper = shallowMount(Registration, {
            localVue,
        })
        console.log(wrapper)
        // expect(wrapper.text()).toMatch(msg)
    })
})
