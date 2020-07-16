import React from "react";
import Form from "./Form";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name_Input_Value: "",
      surname_Input_Value: "",
      city_Input_Value: "",
      telephone_Input_Value: "",
      loading: false,
      buttonClicked: false,
    };
  }

  on_Input_Change = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      buttonClicked: true,
    });
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        loading: false,
        name_Input_Value: "",
        surname_Input_Value: "",
        city_Input_Value: "",
        telephone_Input_Value: "",
        show_Message_Success_Registration: true,
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <Form
          name={this.state.name_Input_Value}
          surname={this.state.surname_Input_Value}
          city={this.state.city_Input_Value}
          telephone={this.state.telephone_Input_Value}
          on_Input_Change={this.on_Input_Change}
          loading={this.state.loading}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default App;
