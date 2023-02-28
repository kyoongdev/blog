import EventEmitter from 'events';

class DrawerEventEmitter extends EventEmitter {
  private readonly drawer: string = 'drawer' as const;

  addChangeListner(callback: () => void) {
    this.addListener(this.drawer, callback);
  }

  removeChangeListner(callback: () => void) {
    this.removeListener(this.drawer, callback);
  }

  add() {
    this.emit(this.drawer);
  }
}

export default new DrawerEventEmitter();
