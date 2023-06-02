<script setup>
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <svg
      v-if="props.iconName === 'github'" viewBox="0 0 24 24" :width="props.width" :height="props.height" fill="none"
      stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
  <svg
      v-if="props.iconName === 'linkedin'" viewBox="0 0 24 24" :width="props.width" :height="props.height" fill="none"
      stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
  <svg v-if="props.iconName === 'logo'" viewBox="0 0 42 48" :width="props.width" :height="props.height" fill="rgb(10, 25, 47)">
    <path
        d="M1 13.2828L20.9986 1.16913L41 13.2829V34.7171L20.9986 46.8309L1 34.7172L1 13.2828Z"
        stroke="#64FFDA"
        stroke-width="3"
    />
    <path
        d="M1 13.2828L20.9986 1.16913L41 13.2829V34.7171L20.9986 46.8309L1 34.7172L1 13.2828Z"
        stroke="#64FFDA"
        stroke-width="3"
    />
    <path
        d="M24.8306 22.7329V24.9478H16.9761V22.7329H24.8306ZM17.7451 16.5703V31.5H14.9253V16.5703H17.7451ZM26.9224 16.5703V31.5H24.1025V16.5703H26.9224Z"
        fill="#64FFDA"
    />
  </svg>
  <svg v-if="props.iconName === 'hex'" viewBox="0 0 84 96" :width="props.width" :height="props.height">
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        <polygon stroke="rgb(100, 255, 218)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                 points="39 0 0 22 0 67 39 90 78 68 78 23" fill="rgb(100, 255, 218)"></polygon>
      </g>
    </g>
  </svg>
</template>