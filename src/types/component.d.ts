/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import type XtxSwiperVue from '@/components/XtxSwiper.vue'
import type XtxGuess from '@/components/XtxGuess.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    //
    XtxSwiper:typeof XtxSwiperVue
    XtxGuess:typeof XtxGuess
  }
}
