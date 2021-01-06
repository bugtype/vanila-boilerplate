export abstract class Component {
  // TODO: 얆은 비교 로직
}

export abstract class ViewModel<T> {
  // TODO: observer
  private observerCallback: (vm: T) => void;

  setObserverCallback: (callback: (vm: T) => void) => void = (callback) => {
    this.observerCallback = callback;
  };
  update(data: T) {
    this.observerCallback && this.observerCallback(data);
  }
}
