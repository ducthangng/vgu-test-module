import React from 'react';

export const roleFunc = {
  getRole: (parameter: { EC: number }) => {
    const ec = {
      data: parameter.EC,
    };

    switch (ec.data) {
      case 1:
        return 'admin';
      case 2:
        return 'student';
      case 3:
        return 'teacher';
      default:
        throw new Error('EC does not supported');
    }
  },
};
