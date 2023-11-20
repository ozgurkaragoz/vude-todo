import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import TodoList from '@/components/TodoList.vue'

test('has correct placeholder text', () => {
  const wrapper = mount(TodoList)
  const input = wrapper.find('input')
  expect(input.attributes('placeholder')).toBe('What needs to be done? Press enter to add...')
})

test('loads items from local storage', () => {
  const items = ['Todo 1', 'Todo 2']
    const localStorageMock = (function() {
      let store = {}
      return {
        getItem: function(key) {
          return store[key] || null
        },
        setItem: function(key, value) {
          store[key] = value.toString()
        },
        clear: function() {
          store = {}
        }
      }
    })()
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
    localStorage.setItem('items', JSON.stringify(items))
    const wrapper = mount(TodoList)
    expect(wrapper.vm.items).to.deep.equal(items)
})

test('add item', async () => {
  const wrapper = mount(TodoList)
  const input = wrapper.find('input')
  await input.setValue('New Todo')
  await input.trigger('keyup.enter')
  expect(wrapper.vm.items).toContain('New Todo')
})

test('remove item', async () => {
  const wrapper = mount(TodoList)
  await wrapper.setData({ items: ['Todo 1', 'Todo 2'] })
  await wrapper.find('button').trigger('click')
  expect(wrapper.vm.items).not.toContain('Todo 1')
})