/**
 * @module wf-box
 * @description
 * Custom element for generic boxes & containers.
 * @property {string} padding=var(--scale-1), A CSS `padding` value
 * @property {string} color=var(--color-dark), CSS `color` value.
 * @property {string} backgroundColor=var(--color-light), CSS 'background-color' value.
 * @property {string} borderWidth=var(--border-thin), A CSS 'border-width' value.
 * @property {boolean} invert=false, Whether to apply an inverted theme for dark mode.
 *
 */

export default class Box extends HTMLElement {
	// attributes/props of the customElement getter & setters.
	get padding() {
		return this.getAttribute('padding') || 'var(--scale-1)';
	}

	set padding(val) {
		return this.setAttribute('padding', val);
	}

	get color() {
		return this.getAttribute('color') || 'var(--color-dark)';
	}

	set color(val) {
		return this.setAttribute('color', val);
	}

	get backgroundColor(){
		return this.getAttribute('backgroundColor') || 'var(--color-light)';
	}

	set backgroundColor(val){
		return this.setAttribute('backgroundColor', val);
	}

	get borderWidth() {
		return this.getAttribute('borderWidth') || 'var(--border-thin)';
	}

	set borderWidth(val) {
		return this.setAttribute('borderWidth', val);
	}

	get invert() {
		return this.hasAttribute('invert');
	}

	set invert(val) {
		if (val) {
			return this.setAttribute('invert', '');
		} else {
			return this.removeAttribute('invert');
		}
	}

	// browser calls attributeChangedCallback for every attr in observedAttributes
	static get observedAttributes() {
		// Return list of attributes to watch.
		return ['padding', 'color', 'backgroundColor', 'borderWidth', 'invert'];
	}

	constructor() {
		super();
		this.render = () => {
			this.i = `Box-${[
				this.padding,
				this.color,
				this.backgroundColor,
				this.borderWidth,
				this.invert
			].join('')}`;

			this.dataset.i = this.i;

			// Creates a style tag element with changed values
			// if there is no other element style that exists with these inputs.
			if ( ! document.getElementById(this.i)) {
				let styleTag = document.createElement('style');
				styleTag.id = this.i;
				styleTag.innerHTML = `
					[data-i="${this.i}"] {
						padding: ${this.padding};
						color: ${this.color};
						background-color: ${this.backgroundColor};
						border: ${this.borderWidth} solid;
						${this.invert ?
							`color: var(--color-dark);
							background-color: var(--color-light);`
						: '' }
					}
				`.replace( /\s\s+/g, ' ').trim();
				document.head.appendChild(styleTag);
			}
		}
	}

	connectedCallback() {
		// Run functionality when an instance of this element is inserted into the DOM.
		this.render();
	}

	attributeChangedCallback() {
		// Run functionality when one of these attributes is changed.
	this.render();
	}
}

if ('customElements' in window) {
	customElements.define('wf-box', Box);
}
