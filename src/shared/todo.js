import shortid from "shortid";

class Todo {
	constructor({id = shortid.generate(), text = "", done = false}) {
		this._id = id;
		this._text = text;
		this._done = done;
	}

	get id() {
		return this._id;
	}

	get text() {
		return this._text;
	}

	set text(text) {
		this._text = text;
	}

	get done() {
		return this._done;
	}

	set done(done) {
		this._done = done;
	}

	toggleDone() {
		this.done = !this.done;
	}
}

export default Todo;