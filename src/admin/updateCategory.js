import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import { getCategory, updateCategory } from './apiAdmin';
import './AdminDashboard.css';
import Particles from './Particles';
import './Particle.css';
// {category: ["5cd0258f2793ec6e100bc191"], price: []}
// http://localhost:3000/admin/category/update/5cd0258f2793ec6e100bc191
const UpdateCategory = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        error: '',
        redirectToProfile: false,
        formData: ''
    });

    // destructure user and token from localStorage
    const { user, token } = isAuthenticated();

    const { name, error, redirectToProfile } = values;

    const init = categoryId => {
        getCategory(categoryId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                    name: data.name
                });
            }
        });
    };

    useEffect(() => {
        init(match.params.categoryId);
    }, []);

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const submitCategoryForm = e => {
        e.preventDefault();
        // update with ? you should send category name otherwise what to update?
        const category = {
            name: name
        };
        updateCategory(match.params.categoryId, user._id, token, category).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    error: false,
                    redirectToProfile: true
                });
            }
        });
    };

    const updateCategoryForm = () => (
        <div className="text-center">
             <h2 className="text-center">
                 Update Category Form
                </h2>
             <hr style={{width : '600px'}}/>
            <form className="mt-4 mb-5" onSubmit={submitCategoryForm}>
           
                
                
            <div className="form-group">
             
                    <input 
                    style={{width : '400px',fontWeight:'600'}}
                        onChange={handleChange('name')}
                        value={name}
                        placeholder='Category Name'
                        className=" Category-input text-center"
                        type="text"
                        required
                        name="name"
                    />
                        
            </div>
            <button style={{width : '400px'}} type="submit" className="mt-3 Category-btn ">
                        Save Changes
                    </button>
                
                
            </form>
            {goBackBTN()}
        </div>
    );

    const showError = () => (
        <div className={'alert alert-danger'} role="alert" style={{ display: error ? '' : 'none' }}>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            {error}
        </div>
    );

    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/admin/categories" />;
            }
        }
    };

    const goBackBTN = () => {
        return (
            <div className="mt-5">
                <Link style={{width : '400px',fontWeight:'700'}} to="/admin/categories" className="text-info ">
                    Back To Admin Home
                </Link>
            </div>
        );
    };

    return (

        <div style={{background:'#d6e7f5',height:'900px'}}>

        
        <Layout
        title="MarketPlace For AlphaD&D."
        description='marketplace for react themes and plugins made in AlphaD&D, which is a web based application, used to make themes and plugins by simply dragging and dropping options.'
        className="container-fluid"
        />
        <Particles height='500px'></Particles>
            <div  style={{paddingTop:'50px'}} className="row">
                
                <div className="col-md-8 offset-md-2 m-b-250 mb-5">
                    {showError()}
                    {updateCategoryForm()}
                    
                    {redirectUser()}
                </div>
            </div>
            </div>
    );
};

export default UpdateCategory;