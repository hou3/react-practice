import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Admin } from '../../api/';

// 初始state
const initialState = {
    status: "",
    profile: {},
};

// reducer切片
export const account = createSlice({
    name: "account",
    initialState,
    // `reducers`字段让我们定义 reducers 并生成关联的 action 对象
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchProfile.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // 更新state
                state.profile = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
});

// 加载账户资料--Thunk函数
export const fetchProfile = createAsyncThunk('account/fetchProfile', async () => {
    // 当前登录账户的user_id;
    let user_id = sessionStorage.user_id;
    let { status, msg, data } = await Admin.info({ user_id });
    return data
});

// 导出 action creator 函数
export const { update } = account.actions;

// 导出 reducer
export default account.reducer;