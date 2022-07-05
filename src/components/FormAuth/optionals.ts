import { FieldModel } from '../Field/interfaces';
export const inputs:{ [key: string]: FieldModel } = {
  email: {
    id: "email",
    defaultValue: '',
    optionals: {
      placeholder: {
        text: "Электронная почта",
        state: undefined
      }
    }
  },
  fullName: {
    id: "fullName",
    defaultValue: '',
    optionals: {
      placeholder: {
        text: "Фамилия Имя Отчество",
        state: undefined
      }
    }
  },
  passport: {
    id: "passport",
    defaultValue: '',
    optionals: {
      placeholder: {
        text: "Номер Паспорта",
        state: undefined
      }
    }
  }
}