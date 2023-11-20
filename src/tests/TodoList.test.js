import { mount } from "@vue/test-utils";
import { expect, describe, it, beforeEach } from "vitest";
import TodoList from "@/components/TodoList.vue";

describe("TodoList", () => {
  beforeEach(() => {
    // Mocking canvas for confetti
    HTMLCanvasElement.prototype.getContext = () => {
      return {
        clearRect: () => {},
        beginPath: () => {},
        save: () => {},
        moveTo: () => {},
        lineTo: () => {},
        stroke: () => {},
        restore: () => {},
        closePath: () => {},
        fill: () => {},
        translate: () => {},
        rotate: () => {},
        scale: () => {},
        arc: () => {},
      };
    };
  });

  it("has correct placeholder text", () => {
    const wrapper = mount(TodoList);
    const input = wrapper.find("input");
    expect(input.attributes("placeholder")).toBe("What needs to be done? Press enter to add...");
  });

  it("loads items from local storage", () => {
    const items = ["Todo 1", "Todo 2"];
    const localStorageMock = (function () {
      let store = {};
      return {
        getItem: function (key) {
          return store[key] || null;
        },
        setItem: function (key, value) {
          store[key] = value.toString();
        },
        clear: function () {
          store = {};
        },
      };
    })();
    Object.defineProperty(window, "localStorage", { value: localStorageMock });
    localStorage.setItem("items", JSON.stringify(items));
    const wrapper = mount(TodoList);
    expect(wrapper.vm.items).to.deep.equal(items);
  });

  it("add item", async () => {
    const wrapper = mount(TodoList);
    const input = wrapper.find("input");
    await input.setValue("New Todo");
    await input.trigger("keyup.enter");
    expect(wrapper.vm.items).toContain("New Todo");
  });

  it("remove item", async () => {
    const wrapper = mount(TodoList);
    await wrapper.setData({ items: ["Todo 1", "Todo 2"] });
    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.items).not.toContain("Todo 1");
  });
});
