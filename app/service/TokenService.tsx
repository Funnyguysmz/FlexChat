import AsyncStorage from "@react-native-async-storage/async-storage";

class TokenService {
  private static instance: TokenService;
  private token: string | null = null;

  private constructor() {}

  static getInstance(): TokenService {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService();
    }
    return TokenService.instance;
  }

  async setToken(token: string) {
    this.token = token;
    await AsyncStorage.setItem("authToken", token);
  }

  async getToken(): Promise<string | null> {
    if (!this.token) {
      this.token = await AsyncStorage.getItem("authToken");
    }
    return this.token;
  }

  async clearToken() {
    this.token = null;
    await AsyncStorage.removeItem("authToken");
  }
}

export default TokenService;
