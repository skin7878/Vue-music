import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false)

  const hiddenClass = computed(() => (!isOpen.value ? 'hidden' : ''))

  const toggleAuthModal = () => (isOpen.value = !isOpen.value)

  return { isOpen, hiddenClass, toggleAuthModal }
})
