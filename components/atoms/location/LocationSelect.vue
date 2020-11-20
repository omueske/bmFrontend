<template>
  <div>
    <label :for="name">{{ name }}</label>
    <b-form-select
      v-model="inputVal"
      :id="name"
      :options="optionSet"
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
      selected: null,
      options: [
        { value: 'active', text: 'Aktiv' },
        { value: 'inactive', text: 'Inaktiv' }
      ]
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
      locationList: (state) => state.locations.locationList
    }),
    inputVal: {
      get() {
        return this.beeHive
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    optionSet: {
      get() {
        let optionsArray = []
        for (const loc of this.locationList) {
          optionsArray.push({ value: loc._id, text: loc.name })
        }
        return optionsArray
      }
    }
  }
}
</script>
