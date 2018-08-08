import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Product from '../components/Product';

/* For DB access
const SPACE_ID = '';
const ACCESS_TOKEN = '';

const client = 'hej';
*/

class ProductList extends Component {
    state = {
        products: [],
        searchString: ''
    };

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.state.products ? (
                    <div>
                        <TextField
                            style={{ padding: 24 }}
                            id="searchInput"
                            placeholder="Search for Products"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                        />
                        <Grid container spacing={24} style={{ padding: 24 }}>
                            {this.state.products.map(currentProduct => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Product product={currentProduct} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : (
                    'No product found'
                )}
            </div>
        );
    }
}

export default ProductList;
