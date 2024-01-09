import { createSlice } from "@reduxjs/toolkit";
function findIndex(array,id){
    for(let i = 0;i<array.length;i++)
    {
        if(array[i].id===id)
            return i
    }
    return null
}
export const BlogSlice = createSlice({
    name:'blogs',
    initialState:[],
    reducers:{
        saveAllBlogs:(state,action)=>{
            return action.payload
        },
        deleteBlog:(state,action)=>{
            let id = action.payload
            let index = findIndex(state,id)
            if(index!=null)
            {
                state.splice(index,1)
            }
        },
        toggleBlog:(state,action)=>{
            
            let id = action.payload
            let index = findIndex(state,id)
            if(index!=null)
                state[index].status = !state[index].status
        }  
    }
})

export const {saveAllBlogs,deleteBlog,toggleBlog} = BlogSlice.actions

export default BlogSlice.reducer