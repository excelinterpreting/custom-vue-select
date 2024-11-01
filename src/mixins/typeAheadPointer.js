module.exports = {
  data() {
    return {
      typeAheadPointer: -1
    }
  },

  watch: {
    filteredOptions() {
      const { search } = this;
      this.typeAheadPointer = search.length > 0 ? 0 : -1;
    }
  },

  methods: {
    typeAheadUp() {
      if (this.typeAheadPointer > 0) {
        this.typeAheadPointer--;
        if (this.maybeAdjustScroll) {
          this.maybeAdjustScroll();
        }
      }
    },

    typeAheadDown() {
      if (this.typeAheadPointer < this.filteredOptions.length - 1) {
        this.typeAheadPointer++;
        if (this.maybeAdjustScroll) {
          this.maybeAdjustScroll();
        }
      }
    },

    typeAheadSelect() {
      const { typeAheadPointer, filteredOptions, search } = this;
      if (filteredOptions[typeAheadPointer]) {
        this.select(filteredOptions[typeAheadPointer]);
      } else if (this.taggable && search.length) {
        this.select(search);
      }

      if (this.clearSearchOnSelect) {
        this.search = "";
      }
    },
  }
}