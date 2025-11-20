import { create } from "zustand";

const useCategoryFilter = create((set) => ({
    categories: [], // all blog categories
    selectedCategory: "", // current selected filter
    setCategories: (cats) => set({ categories: cats }),
    setSelectedCategory: (cat) => set({ selectedCategory: cat }),
}));

export default useCategoryFilter;
