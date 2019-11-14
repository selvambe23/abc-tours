import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import Layout from '../../../components/Layout/Layout';
import {homePageRequest} from '../../../actions/HomeActions';
import {searchFormRequest} from '../../../actions/SearchActions';
import HotelCard from '../../../components/HotelCards/HotelCards';
import SearchForm from '../../../components/SearchForm/SearchForm';

class Home extends Component {
  componentDidMount(){
    const { homePageRequest } = this.props.actions;
    homePageRequest();
  }
    render() {
      const data = _get(this.props, 'hotelsData.data', []);
      return (
        <Layout>
          <h1>Hello Home</h1>
          <div className={'searchForm'}>
            <SearchForm actions={this.props.actions}/>
          </div>
          { !_isEmpty(data) ?
          data.map((hotelData, index)=> (
            <HotelCard key={index} hotelData={hotelData} />
          ))
          :
          <h1>No Hotels Found</h1>
          }
        </Layout>
      );
    }
  }

function mapStateToProps({homeReducer}) {
    return {
        hotelsData: homeReducer,
    };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators((Object.assign({
    homePageRequest,
    searchFormRequest,
  })),
  dispatch,
  ),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
