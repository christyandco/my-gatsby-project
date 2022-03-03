import * as React from 'react';
import Layout from '../../components/Layout';
import '../../styles/portfolio.css';
//import { Link, graphql } from 'gatsby';

const port = () => {
    return (
        <Layout>
            <section className='portfolio'>
                <h2>Portfolio </h2>
                <p>
                    Our portfolios will cover every aspects of photoshoot needs
                    from Simple amateur Photography to proffesional Modelling
                    needs to simple Family & childrens best moments. Just go
                    through our various portfolios select the one that best
                    suits you.
                </p>
                <div className='content_wrap'></div>
            </section>
        </Layout>
    );
};

export default port;
