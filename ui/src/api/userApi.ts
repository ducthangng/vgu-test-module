import { AppError } from '../models/Error';
import { User } from '../models/User';

const BASE_API = process.env.REACT_APP_BASE_API || 'http://localhost:8080';
const apiUrl = `${BASE_API}/api/v1/`;

/**
 * functions that related to authentication/authorization.
 */
export const userApi = {
  /**
   * Login Function.
   *
   * @param username string
   * @param password string
   *
   * @returns userIndentity when success & Error otherwise.
   */
  getInfo: async (parameter: {
    fullname?: string;
    username?: string;
    id?: number;
  }) => {
    const response = await fetch(`${apiUrl}/login`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        console.log(data);
        const err: AppError = data.error;
        if (err.errorCode !== 0) {
          throw new Error(err.errorMsg + ' ++ ' + err.errorField);
        }

        const user: User = data.data;
        return user;
      })
      .catch((err) => {
        return err;
      });

    return response;
  },
  /**
   * Logout Function.
   *
   * @returns null when success & Error otherwise.
   */
  logout: async () => {
    const response = await fetch(`${apiUrl}/logout`, {
      method: 'GET',
      credentials: 'include',
    });

    return response.json();
  },

  /**
   * Check if user is logged in.
   *
   * @returns true if user is logged in, false otherwise.
   */
  validateLoggedStatus: async () => {
    const response = await fetch(`${apiUrl}/validateLoggedStatus`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        const err: AppError = data.error;
        if (err.errorCode) {
          return null;
        }

        const user: User = data.data;
        return user;
      });

    return response;
  },
  /**
   * Retrieve the role of user.
   *
   * @returns role of if user & error if failed.
   */
  validateRole: async () => {
    const response = await fetch(`${apiUrl}/validateRole`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        const err: AppError = data.error;
        if (err.errorCode) {
          return null;
        }

        return data.data;
      })
      .catch((error) => {
        return error;
      });

    return response;
  },
};
