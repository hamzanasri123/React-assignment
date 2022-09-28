import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductForm from '../Update/ProductForm';
import { CREATE_PRODUCT } from '../../../actions/products';

class AddFormContainer extends Component {
    render() {
        const { categories, addProduct } = this.props;

        return (
            <>
                <Link to='/'>Home</Link>
                <ProductForm
                    onSave={(data) => { addProduct(data) }}
                    categories={categories}
                    redirect={this.props.history.goBack}
                />
            </>
        );
    }
}

AddFormContainer.propTypes = {
    categories: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (data) => {
            dispatch({
                type: CREATE_PRODUCT,
                data,
            });
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddFormContainer);
