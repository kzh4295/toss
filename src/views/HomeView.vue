<template>
  <the-main />
  <the-section1 />
</template>

<script>
import TheMain from '@/components/TheMain.vue'
import TheSection1 from '@/components/TheSection1'

export default {
  name: 'HomeView',
  components: {
    'the-main': TheMain,
    'the-section1': TheSection1
  }
}
</script>
