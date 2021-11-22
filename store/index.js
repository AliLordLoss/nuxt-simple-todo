export const state = () => ({
  threads: {},
  threadsCount: 0
})

export const getters = {
  threadsArray(state) {
    return Object.values(state.threads)
  }
}

export const actions = {
  fetchThreadTodos({ state }, { threadId }) {
    return new Promise((resolve) => {
      resolve(state.threads[threadId].todos)
    });
  },

  addTodo({ commit, state }, { todo, threadId }) {
    commit('ADD_TODO', { todo: { ...todo, id: state.threads[threadId].todos.length }, threadId })
  },

  removeTodo({ commit }, { id, threadId }) {
    commit('REMOVE_TODO', { id, threadId })
  },

  bringTodoUp({ commit }, { id, threadId }) {
    commit('SWAP_TODO_WITH_PREV', { id, threadId })
  },

  bringTodoDown({ commit }, { id, threadId }) {
    commit('SWAP_TODO_WITH_NEXT', { id, threadId })
  },

  editTodo({ commit }, { todo }) {
    commit('EDIT_TODO', { todo })
  },

  sortTodos({ commit }, { threadId }) {
    commit('SORT_TODOS', { threadId })
  },

  createThread({ commit }, { title }) {
    commit('CREATE_THREAD', { title })
  },

  editThread({ commit }, { thread }) {
    commit('EDIT_THREAD', { thread })
  },

  removeThread({ commit, state }, { id }) {
    const newThreads = {}
    const newThreadsArray = Object.values(state.threads).filter(thread => thread.id !== id)
    newThreadsArray.forEach((thread, index) => {
      newThreads[index] = { ...thread, id: index }
    })
    commit('SET_THREADS', { newThreads, newThreadsCount: newThreadsArray.length })
  },
}

export const mutations = {
  ADD_TODO(state, { todo, threadId }) {
    state.threads[threadId].todos.push(todo)
  },

  REMOVE_TODO(state, { id, threadId }) {
    state.threads[threadId].todos = state.threads[threadId].todos.filter(todo => todo.id !== id)
  },

  CREATE_THREAD(state, { title }) {
    this._vm.$set(state.threads, state.threadsCount, { title, id: state.threadsCount, todos: [] })
    state.threadsCount++
  },

  SWAP_TODO_WITH_PREV(state, { id, threadId }) {
    const temp = state.threads[threadId].todos[id - 1]
    temp.id = id
    this._vm.$set(state.threads[threadId].todos, id - 1, { ...state.threads[threadId].todos[id], id: id - 1 })
    this._vm.$set(state.threads[threadId].todos, id, temp)
  },

  SWAP_TODO_WITH_NEXT(state, { id, threadId }) {
    const temp = state.threads[threadId].todos[id + 1]
    temp.id = id
    this._vm.$set(state.threads[threadId].todos, id + 1, { ...state.threads[threadId].todos[id], id: id + 1 })
    this._vm.$set(state.threads[threadId].todos, id, temp)
  },

  EDIT_TODO(state, { todo }) {
    this._vm.$set(state.threads[todo.threadId].todos, todo.id, todo)
  },

  SORT_TODOS(state, { threadId }) {
    state.threads[threadId].todos.sort((a, b) => (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0))
    state.threads[threadId].todos = state.threads[threadId].todos.map((todo, index) => ({ ...todo, id: index }))
  },

  EDIT_THREAD(state, { thread }) {
    state.threads[thread.id] = thread
  },

  SET_THREADS(state, { newThreads, newThreadsCount }) {
    state.threads = newThreads
    state.threadsCount = newThreadsCount
  }
}