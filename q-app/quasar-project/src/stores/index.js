import { store, route } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { LocalStorage } from "quasar"
import { watch, markRaw } from "vue"


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 *
 * The function below can be async too either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // persist pinia storage
  if (LocalStorage.getItem("state")) {
    pinia.state.value = LocalStorage.getItem("state")
  }

  watch (
    pinia.state,
    (state) => {
      LocalStorage.set("state", state)
    },
    { deep: true }
  )

  // to use this.router in pinia stores
  pinia.use(({ store }) => {
    store.router = markRaw(route)
  })

  return pinia
})
