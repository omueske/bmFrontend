<template>
  <div>
    <label :for="name">Bauart</label>
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
      selected: null
    }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      configuration: (state) => state.configurations.configuration
    }),
    options() {
      const opt = []
      for (let buildType of this.configuration.hives.buildTypes) {
        opt.push({
          value: buildType.name,
          text: buildType.name
        })
      }
      return opt
    },
    inputVal: {
      get() {
        return this.$emit('input')
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
