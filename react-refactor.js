// This is a react component that is technically functional,
// but would be very hard to maintain because of it's size.

// It's easier to write tests for smaller components that pass
// data between them. Rewrite this component so that it could be
// rendered from somewhere else by using these lines.

// const checkboxes = [0, 1, 2];

// <Form>
// 	checkboxes.map(id =>
// 		<Checkbox key={id} id={id}/>
// 	)
// </Form>

// or (easier but less impresive)

// <Form checkboxes={checkboxes} />

// If you decide to do the second option you MUST STILL create and
// render a Checkbox Component inside the Form Component

const checkboxes = [0, 1, 2];

const Checkbox = ({ id, value, onChange }) => (
	<div className="checkbox-wrapper">
		<span>checkbox {id}</span>
		<input value={value} onChange={onChange} type="checkbox" />
	</div>
);

class BigForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: [false, false, false],
		};
		this.checkboxOnCheck = this.checkboxOnCheck.bind(this);
	}

	checkboxOnCheck(id) {
		return () => {
			const checked = this.state.checked.map((value, index) => {
				if (id === index) {
					return !value;
				}
				return value;
			});
			this.setState({ checked });
		};
	}

	render() {
		const checked = this.state.checked;
		return (
			<div className="form">
				<span>Checked boxes: {JSON.stringify(checked)}</span>
				{checkboxes.map(id =>
					<Checkbox key={id} id={id} value={checked[id]} onChange={this.checkboxOnCheck(id)} />
				)}
			</div>
		)
	}
}

ReactDOM.render(
	<BigForm />,
	document.getElementById('container')
);