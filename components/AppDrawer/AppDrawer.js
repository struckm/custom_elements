class AppDrawer extends HTMLElement {


    // 
    //  Properties    
    //
    get open() {
        return this.hasAttribute('open');
    }

    set open(val) {
        // Reflect the value of the open property as an HTML attribute
        if(val) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
        this.toggleDrawer();
    }

    // A getter/setter for a disabled property
    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        // Reflect the value of the disabled property as an HTML attribute
        if(val) {
            this.setAttribute('disabled', '');
        } else {
            this.remoteAttribute('disabled');
        }
        this.toggleDrawer();
    }

    //
    // Lifecycle Methods    
    //
    // Can define constructor arguments if you wish
    constructor() {
        // If you define a ctor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
        
        // Setup a click listener on <app-drawer> itself.
        this.addEventListener('click', (e) => {
            // Don't toggle the drawer if it's disabled
            if(this.disabled) {
                return;
            }
            this.toggleDrawer();
        });

        // To use Shadow DOM in a custom element, call this.attachShadow inside your constructor
        // Attach a shadow root to the element.
        // let shadowRoot = this.attachShadow({mode: 'open'});
        // shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }

    connectedCallback() {
        return;
    }

    disconnectedCallback() {
        return;
    }

    // Only called for the disabled and open attributes due to observedAttributes
    attributeChangedCallback(attrName, oldVal, newVal) {
        // When the drawer is disabled, update keyboard/screen reader behavior.
        if(this.disabled) {
            this.setAttribute('tabindex', '-1');
            this.setAttribute('aria-disabled', 'true');
        } else {
            this.setAttribute('tabindex', '0');
            this.setAttribute('aria-disabled', 'false');
        }
        // TODO: also react to the open attribute changing.
    }

    // 
    //  Custom Methods
    //
    toggleDrawer() {
        return;
    }
}