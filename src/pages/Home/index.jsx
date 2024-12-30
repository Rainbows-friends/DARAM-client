import * as S from "./style";

import { useEffect, useState } from "react";

import Character from "@components/Character";
import CheckIn from "@components/CheckIn";
import Circle from "@components/Circle";
import Dashboard from "@components/Dashboard";
import Header from "@components/Header";
import axios from "axios";
import { characterData } from "@data/characterData";
import { circleDataHome } from "@data/circleDataHome";
import { useAuth } from "@contexts/AuthContext";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_REMAIN_TIME_API_URL
        );
        setData(response.data);
      } catch (error) {
        setError("데이터 로드 실패");
        clearInterval(interval);
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

  useEffect(() => {
    if (isAuthenticated) {
      async function fetchUserData() {
        try {
          const accessToken = localStorage.getItem("accessToken");
          const response = await axios.get(
            import.meta.env.VITE_USER_DATA_API_URL,
            { headers: { Authorization: `Bearer ${accessToken}` } }
          );
          setUserData(response.data);
        } catch (error) {
          console.error("사용자 정보를 가져오지 못했습니다: ", error);
          localStorage.clear(); // 로컬 스토리지 비우기
        }
      }

      fetchUserData();
    }
  }, [isAuthenticated]);

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <CheckIn
          time={data}
          loading={loading}
          error={error}
          userData={userData}
        />
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
          drag={true}
        />
      ))}
    </S.Wrapper>
  );
}

export default Home;
