<template>
  <SearchForm />
  <SearchList />
</template>

<script>
import SearchForm from "../components/SearchForm.vue";
import SearchList from "../components/SearchList.vue";

export default {
  components: { SearchList, SearchForm },
};
</script>
