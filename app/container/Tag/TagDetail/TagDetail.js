import React, { Component } from 'react';
import { withRouter } from 'react-router';

class TagDetail extends Component {
  render() {
    const { match } = this.props;
    return <div>TagDetail {match.params.tagName}</div>;
  }
}

export default withRouter(TagDetail);
