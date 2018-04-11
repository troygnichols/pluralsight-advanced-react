class DataApi {

  constructor(rawData) {
    this.data = {
      articles:   this.mapIntoObject(rawData.articles),
      authors:    this.mapIntoObject(rawData.authors),
      searchTerm: '',
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
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

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((cb) => cb());
  }

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  }

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({searchTerm});
  };

  getState = () => {
    return this.data;
  }

  subscribe = (callback) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = callback;
    return this.lastSubscriptionId;
  }

  unsubscribe = (subId) => {
    delete this.subscriptions[subId];

  }

}

export default DataApi;
