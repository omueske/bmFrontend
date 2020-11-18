<template>
  <div>
    <label :for="name">{{ name }}</label>
    <b-form-select
      v-model="inputVal"
      :id="name"
      :options="options"
      class="mb-3"
    >
      <!-- This slot appears above the options from 'options' prop -->
      <template v-slot:first>
        <b-form-select-option :value="null" disabled
          >-- Please select an option --</b-form-select-option
        >
      </template>
    </b-form-select>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selected: this.value
    }
  },
  props: ['value', 'name'],
  computed: {
    ...mapState({
      configuration: (state) => state.configurations.configuration
    }),
    options() {
      const opt = []
      for (let status of this.configuration.hives.statuses) {
        opt.push({ value: status.type, text: status.name })
      }
      return opt
    },
    inputVal: {
      get() {
        console.log('GET')
        console.log('this.value')
        return this.value
      },
      set(val) {
        console.log('SET')
        console.log(val)
        this.$emit('input', val)
      }
    }
  }
}
</script>
