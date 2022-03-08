export const initialStateMock = {
  showFragmentLanguage: false,
  showFragmentTerms: false,
  showFragmentNews: false,
  englishSelected: true,
  spanishSelected: false,
  portugueseSelected: false,
  notificationsActivated: false,
  news: [],
  totalNews: [],
  newsDetail: {},
  showLoader: false,
  favoriteNews: [],
  categories: {
    all: {
      name: "all",
      status: true,
    },
    health: {
      name: "health",
      status: false,
    },
    economy: {
      name: "economy",
      status: false,
    },
    tecnology: {
      name: "tecnology",
      status: false,
    },
    politics: {
      name: "politics",
      status: false,
    },
    ecology: {
      name: "ecology",
      status: false,
    },
    social: {
      name: "social",
      status: false,
    },
  },
  word: "",
};
