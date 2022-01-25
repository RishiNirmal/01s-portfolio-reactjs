import './App.css'
import GoToTop from './GotoTop'
import Routes from './router'
import Layout from './Layout/Index';


function App() {
  return (
     <>
             
      <Layout>
        <Routes/>
      </Layout>      
      <GoToTop/>
    </>
  );
}

export default App;
