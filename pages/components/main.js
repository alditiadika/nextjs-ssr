import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Card, CardBody } from 'reactstrap'
const arr = new Array(10).fill(0)
class Main extends Component {
    render() {
        return (
            <Container style={{ marginTop: '20px' }}>
                <Card style={{ backgroundColor: 'gray' }}>
                    <CardBody>
                        <table>
                            <tbody>
                                {arr.map(item => (
                                    <tr key={Math.random()}>{item}</tr>
                                ))}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}
export default connect(state => ({ ...state }))(Main)
