import {createLocalVue, mount} from '@vue/test-utils';

import ReviewList from '@/components/home/ReviewList';


const localVue = createLocalVue();


describe('components/home/ReviewList', () => {
    it('render', () => {
        const wrapper = mount(ReviewList);
        expect(wrapper.exists()).toBe(true);
    });
});
