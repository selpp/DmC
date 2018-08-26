<template>
  <div class="presentation">
    <transition name=bounce>
      <Modal v-for="(modal, index) in modals" :key="index"
        v-if="modal.show"
        v-bind:type="modal.type"
        v-bind:content="modal.content"
      />
    </transition>

    <div class="test">
      <button @click="test_next">Test</button>
      <button @click="test_reset">Reset</button>
    </div>

    <Code
      code="
// TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST

// TEST
let tester = function (params) {
  for (let i in params) {
    console.log(params[i]);
  }
};

// TEST
let tester = function (params) {
  for (let i in params) {
    console.log(params[i]);
  }
};

// TEST
let tester = function (params) {
  for (let i in params) {
    console.log(params[i]);
  }
};

// TEST
let tester = function (params) {
  for (let i in params) {
    console.log(params[i]);
  }
};

// TEST
let tester = function (params) {
  for (let i in params) {
    console.log(params[i]);
  }
};

// TEST
let tester = function (params) {
  for (let i in params) {
    console.log(params[i]);
  }
};

// TEST
let tester = function (params) {
  for (let i in params) {
    console.log(params[i]);
  }
};

// TEST
let tester = function (params) {
  for (let i in params) {
    console.log(params[i]);
  }
};

// TEST
let tester = function (params) {
  for (let i in params) {
    console.log(params[i]);
  }
};
      "
      language="javascript"/>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import Code from '@/components/Code';

export default {
  name: 'Presentation',
  components: {
    Modal,
    Code
  },
  props: ['code', 'language', 'sequence'],
  data: function () {
    return {
      modals: {
        header_1: {
          type: 'HEADER 1',
          content: 'Header 1',
          show: false
        },
        header_2: {
          type: 'HEADER 2',
          content: 'Header 2',
          show: false
        },
        header_3: {
          type: 'HEADER 3',
          content: 'Header 3',
          show: false
        },
        header_4: {
          type: 'HEADER 4',
          content: 'Header 4',
          show: false
        },
        header_5: {
          type: 'HEADER 5',
          content: 'Header 5',
          show: false
        },
        header_6: {
          type: 'HEADER 6',
          content: 'Header 6',
          show: false
        },
        info: {
          type: 'INFO',
          content: this.info('labore irure quae minim export quid quae quid esse irure illum veniam tempor aliqua legam dolor fore eram labore fore duis export eram elit minim esse noster\n\tvelit culpa amet magna nulla summis malis minim dolore velit export export\n\tmultos fore malis malis multos veniam labore anim quorum quae dolore'),
          show: false
        },
        image: {
          type: 'IMAGE',
          content: 'https://pre00.deviantart.net/5943/th/pre/i/2017/196/c/2/metamorphie_faciesse_by_taitsujin-dbgeh6a.jpg',
          show: false
        },
        video: {
          type: 'VIDEO',
          content: 'https://www.youtube.com/embed/hVEPXzve5EY',
          show: false
        }
      }
    }
  },
  methods: {
    info: function(content) {
      return content.split('\n')
      .map(line => {
        return line.replace('\t', '&nbsp;');
      });
    },
    test_next: function() {
      let random_test = function(modals) {
        let n = Object.keys(modals).length;
        let r = Math.floor(Math.random() * n);
        let key = Object.keys(modals)[r];
        modals[key].show = true;
      }
      random_test(this.modals);
    },
    test_reset: function() {
      let reset = function(modals){
          for(let m in modals) { modals[m].show = false; }
      }
      reset(this.modals);
    }
  }
}
</script>

<style scoped>
.test {
   position: fixed;
   top: 15px;
   left: 15px;
   width: auto;
   height: auto;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
