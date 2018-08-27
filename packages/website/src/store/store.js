import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    code: '',
    lines: '',
    modals: {
      header_1: { type: 'HEADER 1', content: 'Header 1', show: false },
      header_2: { type: 'HEADER 2', content: 'Header 2', show: false },
      header_3: { type: 'HEADER 3', content: 'Header 3', show: false },
      header_4: { type: 'HEADER 4', content: 'Header 4', show: false },
      header_5: { type: 'HEADER 5', content: 'Header 5', show: false },
      header_6: { type: 'HEADER 6', content: 'Header 6', show: false },
      info: { type: 'INFO', content: 'labore irure quae minim export quid quae quid esse irure illum veniam tempor aliqua legam dolor fore eram labore fore duis export eram elit minim esse noster\n\tvelit culpa amet magna nulla summis malis minim dolore velit export export\n\tmultos fore malis malis multos veniam labore anim quorum quae dolore', show: false },
      image: { type: 'IMAGE', content: 'https://pre00.deviantart.net/5943/th/pre/i/2017/196/c/2/metamorphie_faciesse_by_taitsujin-dbgeh6a.jpg', show: false },
      video: { type: 'VIDEO', content: 'https://www.youtube.com/embed/hVEPXzve5EY', show: false }
    }
  },
  mutations: {
    set_code: function(state, payload) {
      state.code = payload.code;
      state.lines = state.code.split('\n');
    },
    reset_modals: function(state) {
      for(let key in state.modals)
        state.modals[key].show = false;
    },
    set_modal: function(state, payload) {
      let key = payload.key;
      let content = payload.content;
      if(key === 'info') content = content.split('\n');

      state.modals[key].content = content;
      state.modals[key].show = true;
    }
  }
})
