import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTlhYmFjMjFkMjVkNTY2YWYzODI0MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjA0OTQ1NywiZXhwIjoxNjU2MzA4NjU3fQ.pgDxw3JX2XpqZORb1FiyJDhHXR6VVRM5G_Y1JWietV4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});
