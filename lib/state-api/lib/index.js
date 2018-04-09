class DataApi {

  constructor(rawData) {
    this.data = {
      articles:   this.mapIntoObject(rawData.articles),
      authors:    this.mapIntoObject(rawData.authors),
      searchTerm: '',
    };
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  getState = () => {
    return this.data;
  }

}

export default DataApi;
