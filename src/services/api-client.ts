import axios from "axios";

export default axios.create(
  {
    baseURL:'https://api.rawg.io/api',
    params:{key:'4a4ba00e64774d9982849c2d0aac2d25'}
  }
)