import * as React from 'react';
import Layout from '../components/Layout';
import '../styles/style.css';
import '../styles/home.css';
import { Link } from 'gatsby';
import img from './../assets/pic1.jpg';
const IndexPage = () => {
    return (
        <Layout>
            <section className='section'>
                <div>
                    <h2>Think </h2>
                    <h3>Capture & Frame</h3>
                    <Link className='btn' to='/project/port'>
                        My Portfolio Projects
                    </Link>
                </div>
                <img src={img} alt='' />
            </section>
        </Layout>
    );
};

export default IndexPage;
