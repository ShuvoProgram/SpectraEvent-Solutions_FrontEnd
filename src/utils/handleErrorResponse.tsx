import { AxiosError } from "axios";
import { Button, Input, message as toast } from 'antd';

export enum NotificationType {
    ERROR = 'error',
    SUCCESS = 'success',
  }


export const showNotification = (
    message = 'Something went wrong',
    type: NotificationType = NotificationType.ERROR,
  ) => {
    toast[type](message);
  };

export const handleErrorResponse = (
    error: any,
    callback?: () => void,
    errorMessage?: string
  ) => {
    console.error(error);
  
    if (!errorMessage) {
      errorMessage = 'Something went wrong';
  
      if (typeof error === 'string') {
        try {
          error = JSON.parse(error);
        } catch (error) {
          // do nothing
        }
      }
  
      if (error instanceof AxiosError && error?.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error?.message) {
        errorMessage = error.message;
      }
    }

    showNotification(
        errorMessage &&
          errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1),
        NotificationType.ERROR
      );
    
      if (callback) {
        return callback();
      }
    };