import EventEmitter from 'events';

class DrawerEventEmitter extends EventEmitter {
  private readonly drawer: string = 'drawer' as const;

  addChangeListner(callback: () => void) {
    console.log('addChangeListner');
    this.addListener(this.drawer, callback);
  }

  removeChangeListner(callback: () => void) {
    console.log('addChangeListner');
    this.removeListener(this.drawer, callback);
  }

  add() {
    console.log('asdf');
    this.emit(this.drawer);
  }
}

export default new DrawerEventEmitter();
