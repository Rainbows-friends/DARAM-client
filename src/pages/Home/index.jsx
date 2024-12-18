import CheckIn from "@components/CheckIn";
import Dashboard from "@components/Dashboard";
import Circle from "@components/Circle";
import Character from "@components/Character";
import { useEffect, useState } from "react";
import { characterData } from "@data/characterData";
import { circleDataHome } from "@data/circleDataHome";
import axios from "axios";
import * as S from "./style";
import Header from "@components/Header";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_REMAIN_TIME_API_URL
        );
        setData(response.data);
      } catch (error) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000); // 1000ms = 1초

    return () => clearInterval(interval);
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <CheckIn time={data} loading={loading} error={error} />
        <Dashboard />
      </S.Container>
      {circleDataHome.map((circle, index) => (
        <Circle
          key={index}
          size={circle.size}
          color={circle.color}
          top={circle.top}
          left={circle.left}
        />
      ))}
      {characterData.map((char, index) => (
        <Character
          key={index}
          src={char.src}
          alt={char.alt}
          initialTop={char.top}
          initialLeft={char.left}
        />
      ))}
    </S.Wrapper>
  );
}

export default Home;
