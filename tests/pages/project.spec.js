import {createLocalVue, mount} from '@vue/test-utils';

import Project from '@/pages/project';


const localVue = createLocalVue();


describe('pages/project', () => {
    it('render', () => {
        const wrapper = mount(Project, {
            localVue,
            propsData: {
                id: 1,
            },
            stubs: ['router-link'],
        });
        expect(wrapper.exists()).toBe(true);
    });
});
