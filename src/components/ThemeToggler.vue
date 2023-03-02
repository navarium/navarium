<template>
  <button class="rounded-full bg-base-300 w-8 h-8 shadow-lg transition-all" @click="handleClick">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <mask id="mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <transition name="moonMove" enter-active-class="moonrise" leave-active-class="moonset">
          <circle v-if="!isDarkMode" cx="18" cy="6" r="8" fill="black" stroke-width="0" class="mask" />
        </transition>
      </mask>
      <circle fill="currentColor" cx="12" cy="12" r="5" mask="url(#mask)" />
      <transition name="sunFlaire" enter-active-class="sunrise" leave-active-class="sunset">
        <g class="sunFlaire" v-if="isDarkMode" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </transition>
    </svg>
  </button>
</template>

<script>
export const DARK_MODE = "dark"

export default {
  data() {
    return {
      isDarkMode: false,
    }
  },
  methods: {
    handleClick() {
      const hasDarkMode = document.documentElement.classList.contains(DARK_MODE)
      return this.toggleTheme(!hasDarkMode)
    },

    toggleTheme(mode) {
      document.documentElement.classList.toggle(DARK_MODE, mode)
      this.isDarkMode = mode
      this.writeToStorage(mode)
      return mode
    },

    detectPreferred() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    },

    hasInStorage() {
      return localStorage.getItem(DARK_MODE) !== null
    },

    getFromStorage() {
      return localStorage.getItem(DARK_MODE) === "true"
    },

    writeToStorage(prefersDark) {
      localStorage.setItem(DARK_MODE, prefersDark ? "true" : "false")
    },
  },

  mounted() {
    if (this.hasInStorage()) {
      this.toggleTheme(this.getFromStorage())
    } else if (process.isClient && window.matchMedia) {
      this.toggleTheme(this.detectPreferred())
    }
  },
}
</script>

<style lang="scss" scoped>
$animationDuration: 0.5s;

.sunrise {
  animation: sunrise $animationDuration 1;
  transform-origin: center;
  animation-fill-mode: forwards;
}

.sunset {
  animation: sunrise $animationDuration 1;
  transform-origin: center;
  animation-fill-mode: forwards;
  animation-direction: reverse;
}

.moonrise {
  animation: moon $animationDuration 1;
  animation-fill-mode: forwards;
}

.moonset {
  animation: moon $animationDuration 1;
  animation-direction: reverse;
}

@keyframes moon {
  0% {
    transform: translate3d(8px, 0, 0);
  }
  40% {
    transform: translate3d(8px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes sunrise {
  0% {
    transform: scale(0.01);
  }
  50% {
    transform: scale(0.01);
  }
  75% {
    transform: scale(1);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
</style>

