import React, {Component} from 'react';
import CustomizedTable from "../ui/CustomizedTable";
import axios from 'axios';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: ['Name', 'Username', 'Email'],
            rows: [{id: 1, name: 'Masha', username: 'SuperMasha', email: 'm@ooo.lv'}],
            loading:true
        }
    }

    componentDidMount(prevProps, prevState, snapshot) {
        console.log('Update');
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            let rows = [];
            response.data.map(item => {
               rows.push({id:item.id, name: item.name, username: item.username, email: item.email});
            });
            console.log(rows);
            this.setState({rows: rows, loading: false});
        })
    }

    render() {
        return (
            <CustomizedTable headers={this.state.headers} rows={this.state.rows} loading={this.state.loading}/>
        );
    }

}

export default UserPage;
