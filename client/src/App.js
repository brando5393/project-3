import React from 'react';
import AuthForm from '../src/components/AuthForm';
import Card from '../src/components/Card';
import Comment from '../src/components/Comments';
import CreateForm from '../src/components/CreateForm';
import Footer from '../src/components/Footer';
import NavBar from '../src/components/NavBar';
import PostList from '../src/components/PostList';


function App() {
  return (
    <div>
      <NavBar />
      <AuthForm />
      <Footer />
      
    </div>
  );
}

export default App;
