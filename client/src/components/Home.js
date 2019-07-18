import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./home.css";
import Header from "./Header";
import { Layout, Rate, Button, Slider, InputNumber, Row, Col } from "antd";
import Card from "./Card";

import { getAllProperty } from "../actions/propertyActions";

const { Sider, Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1
    };
    this.props.getAllProperty();
  }

  

  renderCards = data => {
    return data.map((item, i) => {
      return (
        <Col span={8} key={i} style={{ marginTop: "20px" }}>
          <Card key={i + 1} data={item} />
        </Col>
      );
    });
  };

  onChange = value => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    const propertyData = this.props.property.property.result || [];
    
    const { inputValue } = this.state;
    return (
      <div>
        <div id='showcase'>
          <Header />
          <div id='setting-up'>
            <span className='item1'>
              <strong>Welcome to Property pro!</strong>
            </span>
            <div className='item2'>
              <div className='nitem1'>
                {" "}
                <p style={{ fontSize: "35px" }}>
                  The better way to buy real estate
                </p>
              </div>
              <div className='nitem2' />
            </div>
          </div>
        </div>

        <Layout>
          <Layout>
            <Sider id='sidebar'>
              <div>
                <strong>Filters</strong>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <strong>Price</strong>
                <Row>
                  <Col span={9} style={{ marginLeft: "10px" }}>
                    <Slider
                      min={1}
                      max={20}
                      onChange={this.onChange}
                      value={inputValue}
                    />
                  </Col>
                  <Col span={2} style={{ paddingTop: "5px" }}>
                    <InputNumber
                      min={1}
                      max={20}
                      style={{ marginLeft: 16 }}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <strong>Rating</strong>
              </div>
              <div>
                <Rate defaultValue={2} />
              </div>
              <Button type='primary' ghost style={{ marginTop: "2rem" }}>
                Search
              </Button>
            </Sider>
            <Content style={{ margin: "20px" }}>
              <div className='cardGrid'>
                <Row gutter={16}>{this.renderCards(propertyData)}</Row>
                <Row gutter={16} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  property: state.property
});
export default connect(
  mapStateToProps,
  { getAllProperty }
)(withRouter(Home));
