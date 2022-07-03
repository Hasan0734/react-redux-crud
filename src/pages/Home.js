import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-12 col-lg-6">
                    <img className="img-fluid rounded-2" src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80" alt="" />
                </div>
                <div className="co-12l col-lg-6">
                    <div className="py-5">
                        <h1 className="text-success">Welcome to Our Book House</h1>
                        <p>🚀 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        <Link to={'/add-book'} className="btn btn-success mx-2">Add Book</Link>
                        <Link to={'/show-books'} className="btn btn-primary mx-2">View Our Books</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;