import {createLocalVue, mount} from '@vue/test-utils';
import VueScrollTo from 'vue-scrollto';

import ReviewList from '@/components/home/ReviewList';


const localVue = createLocalVue();
localVue.use(VueScrollTo);


describe('components/home/ReviewList', () => {
    it('render', () => {
        const wrapper = mount(ReviewList, {
            localVue,
        });
        expect(wrapper.exists()).toBe(true);
    });
});
