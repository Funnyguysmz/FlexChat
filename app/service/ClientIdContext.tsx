import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

// 定义 context 类型
interface ClientIdContextType {
  clientId: number;
  setClientId: (id: number) => void;
}

// 创建 Context，默认值为 undefined
const ClientIdContext = createContext<ClientIdContextType | undefined>(undefined);

// 自定义 hook 来访问 context
export const useClientId = (): ClientIdContextType => {
  const context = useContext(ClientIdContext);
  if (!context) {
    throw new Error('useClientId must be used within a ClientIdProvider');
  }
  return context;
};

// 简化 ClientIdProvider 组件，确保它只负责管理 clientId
interface ClientIdProviderProps {
  children: ReactNode;
}

export const ClientIdProvider: FC<ClientIdProviderProps> = ({ children }) => {
  const [clientId, setClientId] = useState<number>(0); // 初始值为 0

  return (
    <ClientIdContext.Provider value={{ clientId, setClientId }}>
      {children}
    </ClientIdContext.Provider>
  );
};