import React from 'react';
import Container from "../../components/container";
import Card from "../../components/card";

interface IProps {
}

function HomePage(props: IProps) {
  return (
    <Container className="py-10">
      <Card>
        <div>
          <h4>Title here</h4>
        </div>
      </Card>
    </Container>
  );
}

export default HomePage;
