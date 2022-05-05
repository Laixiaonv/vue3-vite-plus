const getters = {
  sidebar: (state) => {
    console.log('getters', state.menu)
    return state.menu
  },
}
export default getters
