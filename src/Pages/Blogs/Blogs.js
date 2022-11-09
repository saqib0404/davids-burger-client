import React from 'react';

const Blogs = () => {
    return (
        <section>
            <h2 className='text-4xl font-semibold text-center mt-7 mb-5'>Blogs</h2>
            <div className="blogs w-8/12 mx-auto">
                {/* Blog-1 */}
                <div className="blog-1 mb-7">
                    <h3 className='text-2xl text-center mb-2'><span className='font-semibold'>Asked:</span> Difference between SQL and NoSQL?</h3>
                    <p>
                        <div>
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
            </div>
        </section>
    );
};

export default Blogs;