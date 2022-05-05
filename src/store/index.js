
import { createStore } from 'vuex'
import getters from './getters.js'

// https://vitejs.dev/guide/features.html#glob-import
const modulesFiles = import.meta.globEager('./modules/*.ts')
// let modules = {}

// for (const path in modulesFiles) {
//   const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
//   modules = { ...modules, ...moduleName[path] }  
// }

const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  const value = modulesFiles[modulePath]
  modules[moduleName] = value.default
  return modules
}, {})

// const store = createStore({
//   state: {
//     todos: [
//       { id: 1, text: '...', done: true },
//       { id: 2, text: '...', done: false }
//     ]
//   },
//   getters: {
//     doneTodos: (state) => {
//       return state.todos.filter(todo => todo.done)
//     }
//   }
// })

const store = createStore({
  state: modules,
  modules,
  getters,
})

console.log('modules', store,modules, getters)
export default store