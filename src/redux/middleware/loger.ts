const logger  = (state )=>(next)=>(action)=>{
    console.group(action.type)
    console.info("Prev state", state.getState())
    console.log(action)
    const result = next(action)
    console.info("next state", state.getState())
    console.groupEnd()
    return result
}
export default logger