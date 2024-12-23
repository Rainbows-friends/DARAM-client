import axios from "axios";

export const refreshTokens = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post(
      import.meta.env.VITE_REFRESH_TOKEN_API_URL,
      { refreshToken: refreshToken },
      { headers: { "Content-Type": "application/json" } }
    );

    const {
      accessToken,
      refreshToken: newRefreshToken,
      accessTokenExpiresIn,
      refreshTokenExpiresIn,
    } = response.data;

    // 새로운 토큰 저장
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
    localStorage.setItem("accessTokenExpiresIn", accessTokenExpiresIn);
    localStorage.setItem("refreshTokenExpiresIn", refreshTokenExpiresIn);

    return accessToken;
  } catch (error) {
    console.error("Token refresh failed:", error);
    // 리프레시 실패시 로그아웃 처리
    localStorage.clear();
    throw error;
  }
};

// axios 인터셉터 설정
export const setupAxiosInterceptors = (setIsAuthenticated) => {
  axios.interceptors.request.use(
    async (config) => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // 액세스 토큰 만료로 인한 401 에러, 재시도하지 않은 요청인 경우
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const newAccessToken = await refreshTokens();
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        } catch (refreshError) {
          // 리프레시 토큰도 만료된 경우
          setIsAuthenticated(false);
          throw refreshError;
        }
      }

      return Promise.reject(error);
    }
  );
};
