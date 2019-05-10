import React, {Component} from 'react';
import PaperSheet from "../ui/PaperSheet";
import axios from 'axios';
import CustomizedTable from "../ui/CustomizedTable";

class ToDoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {headers: ['Title', 'Completed'], rows: []}
    }

    componentDidMount() {
        let rows = [];
        axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
            response.data.map(item => {
                rows.push({id: item.id, title: item.title, completed: item.completed.toString()});
            })
            this.setState({rows: rows});
        })
    }

    render() {
        return (
            <CustomizedTable headers={this.state.headers} rows={this.state.rows}/>
        );
    }

}

export default ToDoPage;
