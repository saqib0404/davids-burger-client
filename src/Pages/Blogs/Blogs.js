import React from 'react';

const Blogs = () => {
    return (
        <section className='mb-10'>
            <h2 className='text-4xl font-semibold text-center mt-6 mb-8 underline'>Blogs</h2>
            <div className="blogs w-8/12 mx-auto">
                {/* Blog-1 */}
                <div className="mb-12">
                    <h3 className='text-2xl text-center mb-2'><span className='font-semibold'>Asked:</span> Difference between SQL and NoSQL?</h3>
                    <p>
                        <div className='overflow-x-auto'>
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th>SQL</th>
                                        <th>NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                        <td>Non-relational or distributed database system.</td>
                                    </tr>

                                    <tr className="active">
                                        <td>These databases have fixed or static or predefined schema</td>
                                        <td>They have dynamic schema</td>
                                    </tr>

                                    <tr>
                                        <td>These databases are not suited for hierarchical data storage.</td>
                                        <td>These databases are best suited for hierarchical data storage.</td>
                                    </tr>

                                    <tr className="active">
                                        <td>Vertically Scalable</td>
                                        <td>Horizontally scalable</td>
                                    </tr>

                                    <tr>
                                        <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                                        <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </p>
                </div>
                {/* Blog-2 */}
                <div className="mb-12">
                    <h3 className='text-2xl text-center mb-2'><span className='font-semibold'>Asked:</span> What is JWT, and how does it work?</h3>
                    <p>
                        JWT Stand for Json Web Token. It is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider. <br /> <br />
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;