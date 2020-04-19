import React, {Component} from 'react';
import './App.css';
import Course from './components/Course';
import MyForm from './MyForm';

class App extends Component{

  constructor(props){
    super(props);    
    this.state = {
      courses:[
        {
          id: 1,
          name: 'React',
          category: 'JavaScript',
          image: 'https://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png'
        },
        {
          id: 2,
          name: 'Angular',
          category: 'JavaScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
        }
      ]      
    }
    this.remove = this.remove.bind(this);
  }

  remove(courseId){
    const {courses} = this.state,
          courseIndex = courses.findIndex(course => course.id === courseId);
          courses.splice(courseIndex, 1);
          this.setState({courses});
  }

  render(){
    const {state} = this;

    return (
      <div className='App'>
        <ul className= 'courses-list'>
          {            
            state.courses.map(course => <Course course={course}  onRemove={this.remove} />)
          }
        </ul>
        <MyForm/>
      </div>
    );
  }
}

export default App;
