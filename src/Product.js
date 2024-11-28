import React, {Component} from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

let PRODUCTS = {
    '1': {id: 1, category: 'Electronics', price: '$700', name: 'Dell Laptop'},
    '2': {id: 2, category: 'Sports', price: '$300', name: 'Wilson Racquet'},
    '3': {id: 3, category: 'Education', price: '$10', name: 'Notebook'},
    '4': {id: 4, category: 'Food', price: '$25', name: 'Ramen Bowl'},
    '5': {id: 5, category: 'Electronics', price: '$940', name: 'iPhone 15'},
    '6': {id: 6, category: 'Food', price: '$20', name: 'Boba Tea'}
}

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: "",
            products: PRODUCTS
        }
        this.handleFilter= this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleFilter(filterInput){
        this.setState(filterInput)
    }

    handleSave(product) {
        if(!product.id) {
                product.id = new Date().getTime()
        }
        this.setState((prevState) => {
                let products = prevState.products
                products[product.id] = product
                return {products}
        });
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
                let products = prevState.products
                delete products[productId]
                return {products}
        })
    }

    render() {
        return (
            <div class="container-fluid">
                <h1 class="col-md-4">My Inventory</h1><br/>
                <Filters onFilter={this.handleFilter}/>
                <ProductTable products={this.state.products} filterText={this.state.filterText} onDestroy={this.handleDestroy}/>
                <ProductForm onSave={this.handleSave}/>
            </div>
        )
    }
}

export default Product