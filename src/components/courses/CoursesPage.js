import React from "react";
import { connect } from "react-redux";
import * as courseActions from "./../../redux/actions/CourseAction";
import PropTypes from "prop-types";

class CoursePage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createCourse(this.state.course);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

// type 4. Return object
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
const mapDispatchToProps = {
  createCourse: courseActions.createCourse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePage);
