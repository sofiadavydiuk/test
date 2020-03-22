import React from "react";
import "./App.css";
import FetchCompanies from "./FetchCompanies";
import {
    Input,
    Header,
    Container,
    Segment,
    Button,
    Popup,
    Icon
} from "semantic-ui-react";

class App extends React.Component {

    state = {
      searchValue: " ",
    };

    filterData(value)  {
        this.setState({searchValue: value});
    };


    render() {

        //state = {searchValue: ''};

        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <input type="text" onChange={(event => this.filterData(event.target.value))}/>
                    </div>
                </header>
                <body>
                <FetchCompanies searchValue={this.state.searchValue}/>
                </body>
                <footer className="App-footer">
                    <>
                        <p>
                            <Icon className="mail-icon" name="mail outline"/>
                            If you have any questions, please feel free to contact us at
                            professional-company@gmail.com
                        </p>
                    </>
                </footer>
            </div>
        );
    }
}

export default App;



