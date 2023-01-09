import { describe, it, expect } from 'vitest'

import { shallowMount, mount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue';
import CalculatorButton from '@/components/CalculatorButton.vue';
import { buttonActionMapping } from '@/constants';

describe('Calculator', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Calculator);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.result-container').exists()).toBe(true);
    expect(wrapper.find('.grid').exists()).toBe(true);
  })
  it('renders child components properly', () => {
    const wrapper = mount(Calculator);
    expect(wrapper.findAllComponents(CalculatorButton)).toHaveLength(buttonActionMapping.length);
  })
  it('check clearAll', async () => {
    const wrapper = mount(Calculator);
    const calcButtons = wrapper.findAllComponents(CalculatorButton);

    // click 7
    await calcButtons?.at(4).find('button').trigger('click');

    // click +
    await calcButtons?.at(15).find('button').trigger('click');

    // click AC
    await calcButtons?.at(0).find('button').trigger('click');

    const resultContainer = wrapper.find('.result-container');
    const expression = resultContainer.find('#expr');
    const result = resultContainer.find('#result');
    expect(expression.text()).toBe("");
    expect(result.exists()).toBe(false);
  })
  it('check clearPrevious', async () => {
    const wrapper = mount(Calculator);
    const calcButtons = wrapper.findAllComponents(CalculatorButton);

    // click 7
    await calcButtons?.at(4).find('button').trigger('click');

    // click +
    await calcButtons?.at(15).find('button').trigger('click');

    // click C
    await calcButtons?.at(1).find('button').trigger('click');

    const resultContainer = wrapper.find('.result-container');
    const expression = resultContainer.find('#expr');
    const result = resultContainer.find('#result');
    expect(expression.text()).toBe("7");
    expect(result.exists()).toBe(false);
  })
  it('check add functionality', async () => {
    const wrapper = mount(Calculator);
    const calcButtons = wrapper.findAllComponents(CalculatorButton);

    // click 7
    await calcButtons?.at(4).find('button').trigger('click');

    // click +
    await calcButtons?.at(15).find('button').trigger('click');

    // click 8
    await calcButtons?.at(5).find('button').trigger('click');

    // click =
    await calcButtons?.at(18).find('button').trigger('click');


    const resultContainer = wrapper.find('.result-container');
    const expression = resultContainer.find('#expr');
    const result = resultContainer.find('#result');
    expect(expression.text()).toBe("7+8");
    expect(result.text()).toBe("= 15");
  })

  it('check subtract functionality', async () => {
    const wrapper = mount(Calculator);
    const calcButtons = wrapper.findAllComponents(CalculatorButton);

    // click 8
    await calcButtons?.at(5).find('button').trigger('click');

    // click -
    await calcButtons?.at(11).find('button').trigger('click');

    // click 7
    await calcButtons?.at(4).find('button').trigger('click');

    // click =
    await calcButtons?.at(18).find('button').trigger('click');


    const resultContainer = wrapper.find('.result-container');
    const expression = resultContainer.find('#expr');
    const result = resultContainer.find('#result');
    expect(expression.text()).toBe("8-7");
    expect(result.text()).toBe("= 1");
  })

  it('click two operator sequentially', async () => {
    const wrapper = mount(Calculator);
    const calcButtons = wrapper.findAllComponents(CalculatorButton);

    // click 8
    await calcButtons?.at(5).find('button').trigger('click');

    // click -
    await calcButtons?.at(11).find('button').trigger('click');

    // click +
    await calcButtons?.at(15).find('button').trigger('click');

    // click 7
    await calcButtons?.at(4).find('button').trigger('click');

    // click =
    await calcButtons?.at(18).find('button').trigger('click');


    const resultContainer = wrapper.find('.result-container');
    const expression = resultContainer.find('#expr');
    const result = resultContainer.find('#result');
    expect(expression.text()).toBe("8+7");
    expect(result.text()).toBe("= 15");
  })

  it('click two dots sequentially', async () => {
    const wrapper = mount(Calculator);
    const calcButtons = wrapper.findAllComponents(CalculatorButton);

    // click 8
    await calcButtons?.at(5).find('button').trigger('click');

    // click .
    await calcButtons?.at(16).find('button').trigger('click');

    // click .
    await calcButtons?.at(16).find('button').trigger('click');

    const resultContainer = wrapper.find('.result-container');
    const expression = resultContainer.find('#expr');
    const result = resultContainer.find('#result');
    expect(expression.text()).toBe("8.");
    expect(result.exists()).toBe(false);
  })

  it('click dot as first value', async () => {
    const wrapper = mount(Calculator);
    const calcButtons = wrapper.findAllComponents(CalculatorButton);

    // click .
    await calcButtons?.at(16).find('button').trigger('click');

    // click 7
    await calcButtons?.at(4).find('button').trigger('click');

    const resultContainer = wrapper.find('.result-container');
    const expression = resultContainer.find('#expr');
    const result = resultContainer.find('#result');
    expect(expression.text()).toBe("0.7");
    expect(result.exists()).toBe(false);
  })

  it('type zero and a number sequencially', async () => {
    const wrapper = mount(Calculator);
    const calcButtons = wrapper.findAllComponents(CalculatorButton);

    // click 0
    await calcButtons?.at(17).find('button').trigger('click');

    // click 2
    await calcButtons?.at(13).find('button').trigger('click');

    const resultContainer = wrapper.find('.result-container');
    const expression = resultContainer.find('#expr');
    const result = resultContainer.find('#result');
    expect(expression.text()).toBe("2");
    expect(result.exists()).toBe(false);
  })

  it('click equals operator without expr', async () => {
    const wrapper = mount(Calculator);
    const calcButtons = wrapper.findAllComponents(CalculatorButton);

    // click =
    await calcButtons?.at(18).find('button').trigger('click');

    const resultContainer = wrapper.find('.result-container');
    const expression = resultContainer.find('#expr');
    const result = resultContainer.find('#result');
    expect(expression.text()).toBe("");
    expect(result.exists()).toBe(false);
  })
})
