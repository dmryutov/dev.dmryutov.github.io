import {createLocalVue, mount} from '@vue/test-utils';

import StackGroup from '@/components/project/StackGroup';


const localVue = createLocalVue();


describe('components/project/StackGroup', () => {
    it('render', () => {
        const wrapper = mount(StackGroup, {
            localVue,
            propsData: {
                items: ['item1', 'item2'],
            },
        });
        expect(wrapper.exists()).toBe(true);

        // Child components
        expect(wrapper.findAll('li').length).toBe(2);
    });
});
