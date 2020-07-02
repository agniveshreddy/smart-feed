import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { loginAction } from 'actions/loginAction';

import './loginUser.scss';

class LoginUser extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {userId:'', error:''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.navigateTo = this.navigateTo.bind(this);
    }
  
    handleChange(event) {
        const {value} = event.target;
        this.setState({userId: value});
    }

    handleSubmit(event) {
        const {userId} = this.state;
        const {dispatch} = this.props;
        console.log('userId: '+ userId);
        if(userId!='')
            dispatch(loginAction(userId));
        else
            this.setState({error: LOGIN_ERROR})
        event.preventDefault();
    }

    componentDidUpdate(prevProps, prevState){
        const {user} = this.props;
        if( user.error && (user.error != prevState.error)){
            this.setState({error: user.error})
        }
    }

    navigateTo(e){
        console.log('e.name: '+ e.target.name);
        this.props.history.push('/'+e.target.name);
    }
  
    render() {
        const { error } = this.state; 
        return (
            <Container>
                <h4>Login</h4>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>user id:</Form.Label>
                        <Form.Control 
                            type="text"
                            required={true}
                            onChange={this.handleChange} 
                            placeholder='enter user id'/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="primary">Submit</Button>
                    </Form.Group>
                    {(error != '') && <Form.Label>{error}</Form.Label>}
                </Form>
            </Container>
        );
    }
}
const mapStateToProps = user => user;

export default connect(mapStateToProps)(LoginUser);