customElements.whenDefined('app-drawer').then(() => {
    console.log('app-drawer defined.');
});

customElements.define('app-drawer', AppDrawer);