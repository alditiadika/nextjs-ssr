import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Card, CardBody } from 'reactstrap'

class Main extends Component {
    render() {
        return (
            <Container style={{ marginTop: '20px' }}>
                <Card style={{ backgroundColor: 'gray' }}>
                    <CardBody>test</CardBody>
                </Card>{' '}
            </Container>
        )
    }
}
export default connect(state => ({ ...state }))(Main)
