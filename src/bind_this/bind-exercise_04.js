class Button {
	constructor() {
		this.onClick = this.onClick.bind(this);
	}
	render () {
		const bution = document.createElement('button');
		button.innerText = 'Click me!';
		button.addEventListener('click', this.onClick);
		return button;
	}

	onClick() {
		console.log('Button clicked!');
	}
}

const button = new Button();
document.body.appendChild(button.render());
