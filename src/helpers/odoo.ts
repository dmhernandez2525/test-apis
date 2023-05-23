interface RpcRequestParams {
  db: string;
  login: string;
  password: string;
  [key: string]: any;
}

interface RpcRequest {
  jsonrpc: string;
  method: string;
  params: RpcRequestParams;
}

interface RpcResponse<T> {
  jsonrpc: string;
  id?: string | number | null;
  result: T;
  error?: any;
}

class Odoo {
  private apiUrl: string;
  private db: string;
  private username: string;
  private password: string;

  constructor(apiUrl: string, db: string, username: string, password: string) {
    this.apiUrl = apiUrl;
    this.db = db;
    this.username = username;
    this.password = password;
  }

  async rpcCall<T>(method: string, params: any): Promise<T> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: method,
        params: {
          db: this.db,
          login: this.username,
          password: this.password,
          ...params,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data: RpcResponse<T> = await response.json();
    if (data.error) {
      throw new Error(`Odoo error: ${data.error}`);
    }

    return data.result;
  }
}

export { Odoo };
