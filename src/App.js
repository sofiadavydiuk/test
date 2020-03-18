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

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {" "}
                <div>
                    <Input
                        className="input-search"
                        icon="search"
                        placeholder="Search..."
                    />
                    <Popup
                        content="Add your company to the list"
                        trigger={<Button className="addCompany" icon="add" />}
                    />
                </div>
            </header>
            <body>
            <FetchCompanies />

            {/* <MapExample numbers={numbers} /> */}
            </body>
            <footer className="App-footer">
                <>
                    <p>
                        <Icon className="mail-icon" name="mail outline" />
                        If you have any questions, please feel free to contact us at
                        professional-company@gmail.com
                    </p>
                </>
            </footer>
        </div>
    );
}

export default App;



