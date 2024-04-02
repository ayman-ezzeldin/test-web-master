import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/girl.png";
import courseImg2 from "../../assests/images/_.jpeg";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Frontend Developer",
    github: 1,
    name: "Jamila Programmer",
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Backend Developer",
    github: 1,
    name: "Amr Alnas",
    imgUrl: courseImg2,
  },
];

const Teams = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-3 " >
            <div>
              <div >
                <h2 >Our Creative Team </h2>
                <p>
                  We are a team of two members that complete each other's backend and frontend.
                </p>
              </div>

              <div className="w-50 text-end"> </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col key={item.id} lg="4" md="6" sm="6" style={{margin : 'auto'}} >
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    
  );
};

export default Teams;
