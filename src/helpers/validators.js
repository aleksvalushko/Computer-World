import React from "react";

export const required = value => {
  return value ? undefined : 'Обязательное поле!';
};

const maxLength = max => value => {
return value && value.length > max && `Максимальное количество - ${max} символов!`
};

export const maxLength30 =maxLength(30);