module.exports = {
    siteMetadata: {
        title: `chrisStudios`,
        description: '',
        siteUrl: `https://www.yourdomain.tld`,
        copyright: 'This website is copyright 2022 chrisStudios',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'xxxxxxxxxxxxxxxxxxxxx',
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-transformer-remark',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
};
