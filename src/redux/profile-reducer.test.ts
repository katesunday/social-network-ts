import profileReducer , {addPostAC , ProfilePageType , setStatus} from "./profile-reducer";

let startState:ProfilePageType;

beforeEach(()=>{
    startState = {
        posts: [
            {id: 1 , message: "Hi,how are you?" , likeAmount: 15} ,
            {id: 2 , message: "It's my first post!" , likeAmount: 20} ,
        ] ,
        profile: null ,
        status: ""
    }
})

test('new post should be added',()=>{
    const endState = profileReducer(startState, addPostAC('new test post'))

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[0].message).toBe('new test post')
})

test('new status should be added',()=>{
    const endState = profileReducer(startState,setStatus('new test status'))

    expect(endState.profile).toBeDefined()
    expect(endState.status).toBe('new test status')

})
