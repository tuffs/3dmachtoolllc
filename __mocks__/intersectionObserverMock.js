class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    // Trigger the callback with a mock entry
    this.callback([{ isIntersecting: true }]);
  }

  // Close out the Intersection Observer Mock
  unobserve() { };
  disconnect() { };
}

global.IntersectionObserver = IntersectionObserver;