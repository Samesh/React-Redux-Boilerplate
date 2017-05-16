import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component {


    render() {
        console.log(this.props.activeUser);

        if (this.props.activeUser == null) {
            return (
                <h2>Click a user</h2>
            )
        }
        return (
            <div>
                Name: {this.props.activeUser.first} {this.props.activeUser.last} <br />
                Age: {this.props.activeUser.age} <br />
                Description: {this.props.activeUser.description} <br />
                <span style={{position: "absolute"}}>Image:</span> <img src={this.props.activeUser.thumbnail} style={{ height: "200px", margin:"0px 0px 0px 50px"}}/> <br />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeUser: state.activeUsers
    }
}

export default connect(mapStateToProps)(UserDetails)
