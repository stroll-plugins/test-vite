<template>
  <form>
    <label>{{ t('language') }}</label>
    <select v-model="locale">
      <option value="cn">cn</option>
      <option value="en">en</option>
      <option value="ja">ja</option>
    </select>
  </form>
  <p>{{ t('hello') }}</p>
</template>

<script setup>
import { ref, getCurrentInstance, computed } from 'vue'

const ins = getCurrentInstance()

function useI18n () {
  const locale = ref('en')

  const i18n = ins.type.i18n
  console.log(ins)

  function t (msg) {
    return computed(() => i18n[locale.value][msg]).value
  }

  return { locale, t }
}

const { locale, t } = useI18n({
  inheritLocale: true
})
</script>

<i18n>
{
  "cn": {
    "language": "语言",
    "hello": "你好世界!"
  },
  "en": {
    "language": "Language",
    "hello": "hello, world!"
  },
  "ja": {
    "language": "言語",
    "hello": "こんにちは、世界！"
  }
}
</i18n>
