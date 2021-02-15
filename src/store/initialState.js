export const initialState = {
  meta: {
    isLoadingSearchResults: ""
  },
  search: {
    searchQuery: "",
    searchResults: [],
    searchFilters: {
      languages: [],
      stars: 0
    },
    selectedRepository: {}
  }
}