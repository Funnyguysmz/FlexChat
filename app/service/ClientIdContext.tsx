import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

// 定义 context 类型
interface ClientContextType {
  clientId: number;
  setClientId: (id: number) => void;
  seq: number;
  setSeq: (seq: number) => void;
}

// 创建 Context，默认值为 undefined
const ClientContext = createContext<ClientContextType | undefined>(undefined);

// 自定义 hook 来访问 context
export const useClientContext = (): ClientContextType => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error('useClientContext must be used within a ClientProvider');
  }
  return context;
};

// 简化 ClientProvider 组件，确保它只负责管理 clientId 和 seq
interface ClientProviderProps {
  children: ReactNode;
}

export const ClientProvider: FC<ClientProviderProps> = ({ children }) => {
  const [clientId, setClientId] = useState<number>(0); // 初始值为 0
  const [seq, setSeq] = useState<number>(1000); // 初始值为 1000（你可以根据需要修改初始值）

  return (
    <ClientContext.Provider value={{ clientId, setClientId, seq, setSeq }}>
      {children}
    </ClientContext.Provider>
  );
};