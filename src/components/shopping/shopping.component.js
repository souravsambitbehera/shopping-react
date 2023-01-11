import axios from "axios";
import { useState, useEffect } from "react";
import './shopping.component.css'
export function ShoppingComponent () {
    const[categories, setCategories] = useState([]);
    const[products, setProducts] = useState([]);


  
    function LoadCategories () {
        axios.get("https://fakestoreapi.com/products/categories")
        .then(response => {
            response.data.unshift("all")
            setCategories(response.data);
        });
    }

    function LoadProducts (url) {
        axios.get(url)
        .then(response =>{
            setProducts(response.data);
        });

    }

    useEffect(()=> {
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
    },[]);

    function HandelCategoryChanged(e){
        if (e.target.value=="all"){
            LoadProducts("https://fakestoreapi.com/products");
        }
        else{
        LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }
    function HandelCheckBoxChanged(e){
        if (e.target.checked){
        LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }else{
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);

        }
    }
    

    return (
        <div className="container-fluid">
            <header className="bg-dark text-white text-center p-2">
                <h2><span className="bi bi-cart"></span> shopper</h2>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                   <div>
                        <label className="form-label" htmlFor="">Catagory</label>
                        <div>
                            <select onChange={HandelCategoryChanged} className="form-select" name="" id="">
                            {
                                categories.map(category => 
                                    <option key={category} value={category}>
                                        {category.toUpperCase()}
                                    </option> )
                            }
                            </select>
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="form-label" htmlFor="">Choose Category </label>
                        <div>
                            <ul onChange={HandelCategoryChanged}>
                                {
                                    categories.map(category =>
                                        <li key={category}>
                                            <input type="radio" value={category} name="name"/> 
                                            {category.toUpperCase()}
                                        </li> )
                                }
                            </ul>
                        </div>

                    </div>

                    <div className="mt-3">
                        <label className="form-label" htmlFor="">Choose Checkbox</label>
                        <div>
                            <ul onChange={HandelCheckBoxChanged}>
                                {
                                    categories.map(category =>
                                        <li key={category}>
                                            <input type="checkbox" value={category} name="name"/> 
                                            {category.toUpperCase()}
                                        </li> )
                                }
                            </ul>
                        </div>


                        
                    </div>
  
                </nav>
                <main className="col-8 d-flex flex-wrap">
                            {
                                products.map(product =>
                                    <div key={product.id} className="card m-2 p-2">
                                        <img src={product.image} alt="" className="card-img-top" width="200" height="200" />
                                        <div className="card-header">
                                            <p>
                                                {product.title}
                                            </p>
                                        </div>
                                        <div className="card-body">
                                            <dl key={product.price}>
                                                <dt>Price</dt>
                                                <dd>{product.price}</dd>
                                                <dt>Rating</dt>
                                                <dd><span className="bi bi-star-fill text-success"></span> {product.rating.rate}[{product.rating.count}]
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-danger">
                                                <span className="bi bi-cart4"></span>
                                                Add to Cart

                                            </button>

                                        </div>
                                    </div>
                                    )
                            }

                </main>
            </section>

        </div>
    )
}
