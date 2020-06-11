Object.defineProperty(Object.prototype, 'log', {
    get() {
        if (this.toJS) {
            console.log('Immutable >> ', this.toJS())
        } else {
            console.log('Normal >> ', this)
        }
        return;
    }
});