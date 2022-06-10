import { useState, useEffect } from "react";
import { Heading, Image } from '@chakra-ui/react';
import { LaunchItem } from "./components/LaunchItem";
import * as API from "./services/launches";
import logo from './assets/SpaceX-Logo.png';


export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Heading as="h1" size="lg">
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  );
}