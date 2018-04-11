class DataApi {

  constructor(rawData) {
    this.data = {
      articles:   this.mapIntoObject(rawData.articles),
      authors:    this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: '',
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
    this.startClock();
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

  startClock = () => {
    setInterval( () => {
      this.mergeWithState({timestamp: new Date()});
    }, 1000);
  }

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
