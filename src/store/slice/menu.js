import { createSlice } from '@reduxjs/toolkit';

// 初始state
const initialState = {
    isCollapsed: false,
};

// reducer切片
export const menu = createSlice({
    name: "menu",
    initialState,
    // `reducers`字段让我们定义 reducers 并生成关联的 action 对象
    reducers: {
        toggle: (state) => {
            // Redux Toolkit 允许我们在 reducer 中编写“变异”逻辑。
            // 它实际上并没有改变状态，因为它使用了 Immer 库，
            // 它检测到“草稿状态”的变化，并根据这些变化产生(return)一个全新的不可变状态
            state.isCollapsed = !state.isCollapsed;
        },
    }
});

// 导出 action creator 函数
export const { toggle } = menu.actions;

// 导出 reducer
export default menu.reducer;