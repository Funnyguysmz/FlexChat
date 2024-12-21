import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageService {
  private static instance: StorageService;
  private cache: Map<string, any> = new Map();
  
  // 保留原有的 token 相关方法和属性
  private token: string | null = null;
  private static readonly TOKEN_KEY = "authToken";

  private constructor() {}

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  // 通用存储方法
  async setValue(key: string, value: any): Promise<void> {
    try {
      const stringValue = JSON.stringify(value);
      this.cache.set(key, value);
      await AsyncStorage.setItem(key, stringValue);
    } catch (error) {
      console.error(`Error setting value for key ${key}:`, error);
      throw error;
    }
  }

  // 通用获取方法
  async getValue<T>(key: string, defaultValue?: T): Promise<T | null> {
    try {
      // 先从缓存中获取
      if (this.cache.has(key)) {
        return this.cache.get(key);
      }
      
      const value = await AsyncStorage.getItem(key);
      if (value === null) {
        return defaultValue ?? null;
      }
      
      const parsedValue = JSON.parse(value);
      this.cache.set(key, parsedValue);
      return parsedValue;
    } catch (error) {
      console.error(`Error getting value for key ${key}:`, error);
      return defaultValue ?? null;
    }
  }

  // 通用删除方法
  async removeValue(key: string): Promise<void> {
    try {
      this.cache.delete(key);
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing value for key ${key}:`, error);
      throw error;
    }
  }

  // 保持原有的 token 相关方法，但使用新的通用方法实现
  async setToken(token: string) {
    this.token = token;
    await this.setValue(StorageService.TOKEN_KEY, token);
  }

  async getToken(): Promise<string> {
    if (!this.token) {
      this.token = await this.getValue(StorageService.TOKEN_KEY, "");
    }
    return this.token || "";
  }

  async clearToken() {
    this.token = null;
    await this.removeValue(StorageService.TOKEN_KEY);
  }

  // 清除所有缓存和存储的数据
  async clearAll(): Promise<void> {
    try {
      this.cache.clear();
      await AsyncStorage.clear();
    } catch (error) {
      console.error("Error clearing all storage:", error);
      throw error;
    }
  }
}

export default StorageService;