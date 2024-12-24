import * as S from "./style";

import { useEffect, useState } from "react";

import FloorStatus from "@components/FloorStatus";
import Header from "@components/Header";
import axios from "axios";

function CheckIn() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_CHECKIN_MEMBER_API_URL
        );
        setData(response.data);
      } catch (error) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <FloorStatus
          floor={2}
          noshow={false}
          students={data}
          loading={loading}
          error={error}
        />
        <FloorStatus
          floor={3}
          noshow={false}
          students={data}
          loading={loading}
          error={error}
        />
        <FloorStatus
          floor={4}
          noshow={false}
          students={data}
          loading={loading}
          error={error}
        />
        <FloorStatus
          floor={5}
          noshow={false}
          students={data}
          loading={loading}
          error={error}
        />
      </S.Container>
    </S.Wrapper>
  );
}

export default CheckIn;
