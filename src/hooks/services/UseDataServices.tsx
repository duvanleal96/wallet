import { AppInterface } from '../../redux/interface/AppInterface';
import { ClientInterface } from '../../redux/interface/ClientInterface';
import { MovementInterface } from '../../redux/interface/MovementInterface';
import { AccountFullInterface } from '../interface/AccountFullInterface';
import { MovementPostInterface } from '../interface/MovementPostInterface';

export const useDataService = () => {
  const localhost = '192.168.1.5';

  const postClient = async (
    data: ClientInterface,
  ): Promise<ClientInterface | undefined> => {
    const request = {
      method: 'POST',
      hearders: {
        Accept: 'application/json',
        'Conternt-type': 'aplication/json',
      },
      body: JSON.stringify(data),
    };
    try {
      const responsePost: Response = await fetch(
        'http://${localhost}:3000/api/client/signup',
        request,
      );
      const responseBody: ClientInterface = await responsePost.json();
      return responseBody;
    } catch (error) {
      console.log('error en la creacion ', error);
    }
  };

  const getFullAccount = async (
    id: string,
    token: string,
  ): Promise<AccountFullInterface | undefined> => {
    try {
      const response: Response = await fetch(
        `http://${localhost}:3000/api/account/full/${id}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const clientImages = await response.json();
      return clientImages;
    } catch (error) {}
  };

  const createMovement = async (data: MovementPostInterface, token: string) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
    try {
      const responsePost: Response = await fetch(
        `http://${localhost}:3000/api/movement`,
        requestOptions,
      );
      const bodyResponseCreateMovement: MovementInterface =
        await responsePost.json();
      return bodyResponseCreateMovement;
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  const getClientByEmail = async (
    search: string,
    token: string,
  ): Promise<ClientInterface | undefined> => {
    try {
      const response: Response = await fetch(
        `http://${localhost}:3000/api/client/data/${search}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const client: ClientInterface = await response.json();
      return client;
    } catch (error) {
      console.log('error', error);
    }
  };

  const updateApp = async (
    id: string,
    data: AppInterface,
    token: string,
  ): Promise<AppInterface | undefined> => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };
    try {
      const response: Response = await fetch(
        `http://${localhost}:3000/api/app/${id}`,
        requestOptions,
      );
      const app: AppInterface = await response.json();
      return app;
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
  return {
    postClient,
    getFullAccount,
    createMovement,
    getClientByEmail,
    updateApp,
  };
};
